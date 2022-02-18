class People {
    // name:string='' //设置默认值'' 这种写法没办法校验可以使用get
    private _name: string = ''
    // 当在外面访问name时，会自动调用get方法
    get name(): string { //设置返回值 string
        return this._name
    }
    set name(value: string) { //只要给name赋值操作，就会调用set
        // 设置器中添加相关的校验逻辑
        if (value.length < 2 || value.length > 5) {
            throw new Error('名字不合法，不许使用！')
            this._name = value;
        }
    }
}
var p = new People()
p.name = '啊啊啊啊' //设置值
console.log(p.name);
