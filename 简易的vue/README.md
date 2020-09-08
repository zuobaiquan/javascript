### 实现过程

实现数据的双向绑定，首先要对数据进行劫持监听，所以我们需要设置一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很多个，所以我们需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。接着，我们还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。因此接下去我们执行以下3个步骤，实现数据的双向绑定：

1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。

2.实现一个订阅者Suber，可以收到属性的变化通知并执行相应的函数，从而更新视图。

3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。

### 流程图如下：

![流程图](http://dzblog.cn/images/md/46e90aff63146.png)

### 1. Observer

Observer是一个数据监听器，其实现核心方法就是Object.defineProperty( )。如果要对所有属性都进行监听的话，那么可以通过递归方法遍历所有属性值，并对其进行Object.defineProperty( )处理。如下代码，实现了一个Observer。

```javascript
observer.js

class Observer {
    constructor (data, vm) {
        this.data = data
        this.vm = vm
        this.init()
    }

    init() {
        this.initData(this.data)
    }

    initData (data) { // 初始化数据
        if (!data || typeof data !== 'object') return
        Object.keys(data).forEach( key => {
            this.defineProperty(data, key, data[key])
        })
    }

    defineProperty (parent, attr, val) { //通过 Object.defineProperty 来劫持数据 做到监听效果
        this.initData(val) // 递归监听
        let _this = this
        Object.defineProperty(parent, attr, {
            enumerable: true,
            configurable: true,
            get () {
                if (_this.vm.subQueue.target) { // 初始化时,把订阅者添加进队列
                    if (_this.vm.subQueue.subs.some( sub => sub === _this.vm.subQueue.target)) return val
                    _this.vm.subQueue.addSub(_this.vm.subQueue.target)
                }
                return val
            },
            set (newVal) {
                if (val === newVal) return
                console.log(`${attr}原来的值:${val},最新的值:${newVal}`)
                val = newVal
                _this.vm.subQueue.notifyAllSubs()
            }
        })
    }
}

```

### 2. Suber

订阅者Suber执行对应的get函数进行初始化, 在初始化的时候需要将自己添加进订阅者队列 SubQueue中, 当原来的值发生变化时执行相应的update函数

```javascript
sub.js

/*
    订阅者: 收到属性的变化通知并执行相应的函数，从而更新视图
        @params: vm     : 对象实例
        @params: attr   : 该实例下的属性
        @params: cb     : 发生变化时触发的回调函数
*/
class Suber {
    constructor( vm, attr, cb) {
        this.vm = vm
        this.attr = attr
        this.cb = cb
        this.value = this.get()
    }

    get () {
        this.vm.subQueue.target = this // 添加当前订阅者
        let value = this.getAttrVal(this.attr) // 通过获取该属性值来把当前订阅者放入队列
        this.vm.subQueue.target = null // 清除缓存
        return value
    }

    update () {

        let value = this.getAttrVal(this.attr)
        if (value !== this.value) {
            this.cb && this.cb(value)
            this.value = value
        }
    }

    // 属性值
    getAttrVal (attr) {
        let vm = this.vm
        if (attr.indexOf('.') >= 0) {
            let arr = attr.split('.')
            return arr.reduce( (obj, attr) => {
                if (typeof obj !== 'object') {
                    return this.vm[obj][attr]
                }
                return obj[attr]
            })
        }else{
            return this.vm[this.attr]
        }
    }
}

```

### 3. SubQueue

收集所有订阅者发生变化时通知订阅者

```javascript
sub.js

/*
    订阅器队列: 我们需要一个队列来统一管理订阅者
*/
class SubQueue {
    constructor () {
        this.subs = []
        this.target = null
    }
    addSub (sub) { //添加订阅者
        this.subs.push(sub)
    }
    notifyAllSubs () { // 通知所有订阅者
        this.subs.forEach( sub => {
            sub.update()
        })
    }
}

```

### 4. Compile

解析模板指令，并替换模板数据，初始化视图。 将模板指令对应的节点绑定对应的更新函数，初始化相应的订阅器

```javascript
compile.js

/*
    compile: 解析器
*/
class Compile {
    constructor (vm) {
        this.vm = vm //实例
        this.el = document.querySelector(vm.el)
        this.fragment = null //代码块
        this.init()
    }

    // 节点初始化
    init () { 
        this.fragment = this.getFragment()
        this.formatFragment(this.fragment)
        this.el.appendChild(this.fragment)
    }

    // 把指定el 里面的所有节点移入 代码块中
    getFragment () {
        let fragment = document.createDocumentFragment()
        // 通过appendChild 把元素全部移入 fragment中
        let child = this.el.firstChild
        while (child) {
            fragment.appendChild(child)
            child = this.el.firstChild
        }
        return fragment
    }

    // 格式化文档片段
    formatFragment (el) {
        [].slice.call(el.childNodes).forEach( node => {
            let reg = /((?:\{\{)[^\{\}]*(?:\}\}))/g,
                text = node.textContent
            if (node.nodeType === 3 && text.match(reg) && text.match(reg).length) { // 该节点时文本节点 且 具有 {{}} 指令
                this.formatText(node, text.match(reg))
            }else if (node.nodeType === 1 && node.attributes.length > 0) { // 该节点为元素节点时
                this.getDirective(node)
            }
            if (node.childNodes && node.childNodes.length) {
                this.formatFragment(node)
            }
        })
    }

    // 格式化文本节点的内容
    formatText (node, attrs) {
        let initText = node.textContent // 获取文本
        attrs.forEach( attr => {
            let val = this.getAttrVal(attr.slice(2, -2))
            node.textContent = node.textContent.replace(attr, val) // 初始化属性值


            let text = initText
            new Suber(this.vm, attr.slice(2, -2), val => {
                console.log(val)
                node.textContent = attrs.forEach( key => { // 获取到值后 重新遍历该文本节点中的 {{}} 指令
                    let keyVal = this.getAttrVal(key.slice(2, -2))
                    text = text.replace(key, keyVal)
                })
                node.textContent = text
                text = initText // 设置完毕, 重新初始化值便于下次修改赋值
            })
        })
    }

    // 属性值
    getAttrVal (attr) {
        if (attr.indexOf('.') >= 0) {
            let attrArr = attr.split('.')
            return attrArr.reduce( (obj, attr) => {
                if (typeof obj !== 'object') {
                    return this.vm[obj][attr]
                }
                return obj[attr]
            })
        }else{
            return this.vm[attr]
        }
    }

    // 执行指令
    getDirective (node) {
        let attrs = node.attributes;
        [].slice.call(attrs).forEach( attr => {
            if (attr.name.indexOf('v-') >= 0) {
                let val = attr.value
                if (attr.name.indexOf('v-on:') >= 0) { // v-on: 事件指令
                    this.compileEvent(node, attr)
                }else if(attr.name.indexOf('v-model') >= 0) { //v-model指令
                    this.compileModel(node, val)
                }else if(attr.name.indexOf('v-bind') >= 0) { //v-bind指令
                    this.compileBind(node, attr)
                }else { // 其余指令
                    console.log('其余指令')
                }
            }else if(attr.name.indexOf(':') === 0) { // v-bind: 指令简写
                this.compileBind(node, attr)
            }else if(attr.name.indexOf('@') === 0) { // v-on: 指令简写
                this.compileEvent(node, attr)
            }
        })
    }

    // v-model指令
    compileModel (input, attr) {
        let reg = /((?:\{\{)[^\{\}]*(?:\}\}))/g,
            getNodeText = el => {
                [].slice.call(el.childNodes).forEach( node => {
                    let text = node.textContent
                    if (node.nodeType === 3 && node.textContent.indexOf(`{{${attr}}}`) >= 0) {
                        this.formatText(node, text.match(reg))
                    }
                    if (node.childNodes && node.childNodes.length > 0) {
                        getNodeText.call(this, node)
                    }
                })
            }
        getNodeText.call(this,this.fragment)
        input.value = this.getAttrVal(attr)
        input.addEventListener('input', e => {
            if (attr.indexOf('.') < 0) return this.vm[attr] = e.target.value

            attr.split('.').reduce( (obj, attr, index, arr) => {
                if (index >= arr.length - 1) {
                    if (typeof obj !== 'object') {
                       return this.vm[obj][attr] = e.target.value
                    }
                    return obj[attr] = e.target.value
                }
                if (typeof obj !== 'object') {
                    return this.vm[obj][attr]
                }
                return obj[attr]
            })
        })
    }

    // v-on指令
    compileEvent (node, attr) {
        let ev = attr.name.indexOf(':') >= 0 && attr.name.split(':')[1] || attr.name.indexOf('@') >= 0 && attr.name.split('@')[1],
            fn = attr.value

        if (typeof this.vm.methods[fn] !== 'function') return console.warn('methods 里面只能放函数')
        node.addEventListener(ev, this.vm.methods[fn].bind(this.vm))
    }

    // v-bind指令
    compileBind (node, attr) {
        let name = attr.name.split(':')[1],
            value = attr.value

        new Suber(this.vm, value, val => {
            console.log(val)
            node[name] = this.getAttrValue(value)
        })
        node[name] = this.getAttrValue(value)

    }

    // 获取属性值
    getAttrValue (attr) {
        if (attr.indexOf('.') < 0) return this.vm[attr]

        return attr.split('.').reduce( (obj, attr, index, arr) => {
            if (index >= arr.length - 1) {
                if (typeof obj !== 'object') {
                   return this.vm[obj][attr]
                }
                return obj[attr]
            }
            if (typeof obj !== 'object') {
                return this.vm[obj][attr]
            }
            return obj[attr]
        })
    }

}

```

### 5. Vue实例

```javascript
vue.js

/*
    实例
*/
class Vue {
    constructor (opts) {
        if (!opts.el) return console.warn('请填写参数: el')
        opts.beforeCreate && opts.beforeCreate.call(this) // beforeCreate 钩子
        this.el = opts.el
        this.created = opts.created.bind(this) // created 钩子
        this.data = opts.data || {} // 数据
        this.methods = opts.methods // 实例方法
        this.subQueue = new SubQueue() //订阅器队列
        this.init()
        opts.mounted && opts.mounted.call(this) // mounted 钩子
    }

    init () {
        Object.keys(this.data).forEach( key => {
            this.proxyKeys(key) 
        })
        new Observer(this.data, this) // 数据绑定
        this.created && this.created() // created 钩子
        new Compile(this) // 节点解析
    }

    // 代理属性
    proxyKeys (attr) {
        Object.defineProperty(this, attr, {
            enumerable: true,
            configurable: true,
            get () {
                return this.data[attr]
            },
            set (newVal) {
                if (this.data[attr] === newVal) return
                this.data[attr] = newVal
            }
        })
    }
}

```

### 测试页面

```html
<body>
    <div id="app">
        <div>
            <span>姓名: {{person.name}}</span><br>
            <input type="text" v-model="person.name">
        </div>
        <br>
        <div class="sex" v-on:click="editSex">
            性别: 
            <input type="checkbox" v-bind:checked="person.sex">
        </div>
        <button v-on:click="editSex">修改性别</button>
        <br>
        <br>
        <div>
            头像:<br>
            <img :src="person.avatar" alt="" width="80">
        </div>
        <div>{{clickText}}</div>
        <button @click="clickFn">Click Me</button>
    </div>
</body>
<script src="./observer.js"></script>
<script src="./sub.js"></script>
<script src="./compile.js"></script>
<script src="./vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            person: {
                name: 'chendong',
                sex: true,
                avatar: './avatar.png'
            },
            bol: true,
            clickText: '点按钮变化'
        },
        methods: {
            clickFn () {
                this.clickText = this.bol ? '点按钮还原':'点按钮变化'
                this.bol = !this.bol
            },
            editSex () {
                this.person.sex = !this.person.sex
            }
        },
        beforeCreate () {
            console.log('beforeCreate')
        },
        created () {
            console.log('created')
        },
        mounted () {
            console.log('mounted')
        }
    })

</script>

```

> 参考文档: [vue的双向绑定原理及实现](https://www.cnblogs.com/libin-1/p/6893712.html)
> 链接地址: [Vue双向绑定、事件绑定、属性绑定的实现](http://dzblog.cn/article/5a586fe025da2703ccaad7a0)