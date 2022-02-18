// 接口
// 可以理解为一个约定 一个规范
// 接口使用interface进行声明
interface AjaxOptions {
    url: string,
    type?: string, //给属性加上问号之后，这个属性就是可选的，也就是可传可不传
    data?: object,
    success(data: object): void
}
// option参数需要包含url type data success
function ajax(options: AjaxOptions) { //约束options规范是后面的参数类型约束

}
ajax({
    url: 'http:www.baidu.com',
    type: 'get',
    data: {
    },
    success(data) {

    }
})

// 只读属性
interface Point {
    readonly x: number,
    y: number,
    [propName: string]: any //接收额外参数 propName是随便取名的

}

let poi: Point = {
    x: 10,
    y: 10,
    // 告诉接口，存在其他额外属性，额外的属性检查
}
// poi.x=100; //错误，定义了readonly以后就不能设置值

let poi1: Point = {
    x: 10,
    y: 10,
    z: 100 //额外参数
}

// ts中函数类型的接口
interface SumInterface {
    (a: number, b: number): number //返回值写在最后的代表返回值是number
}
let sumFun: SumInterface = function (a: number, b: number) {
    return a + b;
}

// 1.3 类类型接口
interface PeronInterface {
    name: string,
    age: number,
    eat(): void
}
class XiaoMing implements PeronInterface { //让这个类强制遵守PeronInterface
    name: string = '小明';
    age: number = 18;
    eat() {
        // 强制要求实现 约定类必须实现某些功能，用于数据库访问层代码 mysql oracal mssql mongodb
        //比如 dbinterface当用户访问数据库的时候 CRUD
    }
}
var xm=new XiaoMing()
xm.name;


