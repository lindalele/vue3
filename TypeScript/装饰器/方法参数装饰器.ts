// 方法参数装饰器

// 方法参数装饰器3个参数
// 1对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
// 2方法名字
// 3参数在函数参数列表中的索引
function logParams(params: any) {
    return function (target: any, methodName: any, paramsIndex: any) {
        target.apiUrl = params
    }
}
class HttpC {
    public url: string | undefined //制定类型的时候可以多加一个类型undefined，避免报错
    constructor() {

    }
    // 调用getData1函数的时候，执行了装饰器 uuid:any这个参数定义了他是一个any类型
    getData1(@logParams('xxx') uuid: any) {
        console.log(uuid);
    }
}
var http: any = new HttpC()
http.getData1(123)
