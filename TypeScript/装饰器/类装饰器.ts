// 装饰器是一种特殊的类型声明，他能够被附加到类声明，方法、属性或参数上，可以修改类的行为
// 装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能
// 常见的装饰器有类装饰器、属性装饰器、方法装饰器、参数装饰器
// 装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
// 装饰器是ES7的标准特性之一

// 1、类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。传入一个参数

// function logClass(params: any) {
//     console.log(params); //params就是当前类HttpClient
//     params.prototype.apiUrl = 'xxx' //就是给类扩展了一个属性
//     params.prototype.run = function () {
//         console.log('我是一个run方法');

//     }
// }

// @logClass
// class HttpClient {
//     constructor() {

//     }
//     getData() {

//     }
// }
// var http: any = new HttpClient()
// console.log(http.apiUrl);

// http.run()

//2装饰器工厂:可传参
// function logClass(params: string) { //hello传给了params
//     console.log(params); //params就是当前类HttpClient
//     return function (target: any) { //target是类
//         console.log(target);
//         console.log(params);
//         target.prototype.apiUrl = params
//     }
// }

// @logClass('http://www.itying.com/api')
// class HttpClient {
//     constructor() {

//     }
//     getData() {

//     }
// }
// var http: any = new HttpClient()
// console.log(http.apiUrl);

//类装饰器 可以重载构造函数或者构造函数里面的函数
// 类装饰器表达式会在运行时当做函数被调用，类的构造函数作为其唯一的参数。
// 如果类装饰器返回一个值，他会使用提供的构造函数来替换类的声明
function logClass(target: any) { //hello传给了params
    console.log(target);//target是类
    return class extends target{
        apiUrl:any='我是修改后的数据'
        getData(){
            this.apiUrl=this.apiUrl+'----'
            console.log(this.apiUrl);
            
        }
    }
}

@logClass //注意这里没有分号
class HttpClient11 {
    public apiUrl: string | undefined //制定类型的时候可以多加一个类型undefined，避免报错
    constructor() {
        this.apiUrl = '我是构造函数里面的apiUrl'
    }
    getData() {
        console.log(this.apiUrl);

    }
}
var http: any = new HttpClient11()
http.getData()
console.log(http.apiUrl);