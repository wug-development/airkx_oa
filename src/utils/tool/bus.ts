export class Bus {
    list: {[key: string]: Array<Function>}
    constructor () {
        this.list = {}
    }

    $on(name: string, fn: Function) {
        this.list[name] = this.list[name] || []
        this.list[name].push(fn)
    }

    $off(name: string) {
        this.list[name] && delete this.list[name]
    }

    $emit(name: string, data?: any) {
        this.list[name] && this.list[name].forEach((fn: Function) => {
            fn(data)
        })
    }
}