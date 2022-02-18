// 方法装饰器
// 他会被应用到方法的属性描述符上，可以用来监视，修改或替换方法定义
// 方法装饰器3个参数
// 1对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
// 2成员名字
// 3成员的属性描述符

function get(params: any) { //
    // 参数1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
    // 参数2、成员的名字 方法名
    // 3成员的属性描述符 方法描述，可以修改方法
    return function (target: any, methodName: any, desc: any) { //属性装饰器接收2个参数，一个是类，第二个是属性名称
        console.log(target); //
        target.apiUrl = 'xxx' //拿到了实例，扩展属性和方法
        target.run = function () {
            console.log('run');

        }
    }
}

class HttpClient {

    public url: string | undefined //制定类型的时候可以多加一个类型undefined，避免报错
    constructor() {

    }
    @get('http://www.baidu.com')
    getData() {
        console.log(this.url);

    }
}
var http: any = new HttpClient()
console.log(http.apiUrl);
http.run()


