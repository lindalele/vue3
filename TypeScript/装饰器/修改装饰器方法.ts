// 方法装饰器
// 他会被应用到方法的属性描述符上，可以用来监视，修改或替换方法定义
// 方法装饰器3个参数
// 1对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
// 2成员名字
// 3成员的属性描述符

function get1(params: any) { //
    return function (target: any, methodName: any, desc: any) {
        console.log(desc.value); //desc.value是方法getData() {  console.log(this.url);}
        // 需求修改装饰器的方法，把装饰器方法里面传入的所有参数改为string类型
        // 第一步：保存当前的方法
        var oMethod = desc.value;
        // 第二步修改方法
        desc.value = function (...args: any[]) { //接收参数放在数组里面
            args = args.map((value) => {
                return String(value);
            })
            console.log(args); //['123', 'xxx']
            oMethod.apply(this, args)//this是当前方法
        }
    }
}

class HttpClient1 {

    public url: string | undefined //制定类型的时候可以多加一个类型undefined，避免报错
    constructor() {

    }
    @get1('http://www.baidu.com')
    getData1(...args: any[]) {
        console.log(this.url);
    }
}
var http: any = new HttpClient1()
http.getData1(123, 'xxx')