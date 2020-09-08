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
