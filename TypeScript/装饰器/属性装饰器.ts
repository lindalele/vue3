// 属性装饰器
// 属性装饰器表达式会在运行时当做函数被调用，传入下列2个参数
// 1、对于静态成员来说是累的构造函数，对于实例成员是类的原型对象
// 2、成员的名字

// 这个是类装饰器
function logClass1(target: any) { //hello传给了params
    console.log(target);//target是类
    return class extends target{
        url:any='我是修改后的数据'
        getData(){
            this.url=this.url+'----'
            console.log(this.url);
            
        }
    }
}
// 属性装饰器和类装饰器的定义方法都是一样的
//这个是属性装饰器 就是装饰下面类HttpClint的url属性的
function logProperty(params:any){ //params'属性装饰器'
    // 参数1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
// 参数2、成员的名字
 return function(target:any,attr:any){ //属性装饰器接收2个参数，一个是类，第二个是属性名称
     console.log(target); //
     target[attr]=params
 }
}
@logClass1('xxx') 
class HttpClient2 {
    
    @logProperty('属性装饰器')
    public url: string | undefined //制定类型的时候可以多加一个类型undefined，避免报错
    constructor() {
        this.url = '我是构造函数里面的url'
    }
    getData() {
        console.log(this.url);

    }
}
var http: any = new HttpClient2()