/*
    compile: 解析器
*/
class Compile {
    constructor (vm) {
        this.vm = vm
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
