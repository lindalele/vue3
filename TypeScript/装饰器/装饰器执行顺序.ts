function logClass1(params: string) { //
    return function (target: any) {
        console.log('类装饰器1');
    }
}
function logClass2(params: string) { //
    return function (target: any) {
        console.log('类装饰器2');
    }
}
//?代表可以传参数也可以不传参数
function logAttribute(params?: string) {
    return function (target: any, attrName: any) {
        console.log('属性装饰器');
    }
}
function logMethod(params?: string) {
    return function (target: any, attrName: any, desc: any) {
        console.log('方法装饰器');
    }
}
function logParams(params?: string) {
    return function (target: any, attrName: any, desc: any) {
        console.log('方法参数装饰器');
    }
}
function logParams2(params?: string) {
    return function (target: any, attrName: any, desc: any) {
        console.log('方法参数装饰器2');
    }
}
// 属性》方法》方法参数》类  如果有多个的话，先执行下面的一个 比如方法参数装饰器2会先执行，在执行上面的一个方法参数装饰器1
@logClass1('http')//类装饰器
@logClass2('xxx') //类装饰器
class HttpClient1 {

    @logAttribute() //属性装饰器先执行 ，下面定义的是属性，这里就是属性装饰器
    public apiUrl: string | undefined //制定类型的时候可以多加一个类型undefined，避免报错
    constructor() {

    }

    @logMethod() //方法装饰器
    getData1() {
        return true
    }
    setData(@logParams() attr1:any,@logParams2() attr2:any) {

    }
}
var http: any = new HttpClient1()
http.getData1(123, 'xxx')