// 接口继承接口
// 接口继承类


// //1.1 接口继承接口
// interface TwoDPoint{
//     x:number,
//     y:number
 
// }
// interface ThreeDPoint extends TwoDPoint{ //extends接口继承
//     z:number
// }
// let poi2:ThreeDPoint={
//     z:100,
//     x:100,
//     y:100
// }
// 1.2接口可以多继承

interface TwoDPoint{
    x:number,
    y:number
}
interface ThreeDPoint{ //extends接口继承
    z:number
}
interface FourDPoint  extends ThreeDPoint,TwoDPoint{
    time:Date
}
let poi3:FourDPoint={
    z:100,
    x:100,
    y:100,
    time:new Date()
}

// 2接口继承类
当接口继承了一个类类型时，它会继承的成员但不包括其实现。就好像接口声明了所有类中存在的成员，
但并没有提供具体实现一样。接口同样会继承到类的private和protected成员。这意味着当你创建
了一个接口继承了一个拥有私有或保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）

当你有一个庞大的继承解构时这很有用，但要指出的是你的代码只在子类拥有特定属性时起作用。出了继承自己类，子类之间不必相关联
class Bird{
    type:string='画眉鸟'
    fly():void{

    }
}

interface Fly extends Bird{

}
let flyingBird:Fly={
    type:'啄木鸟',
    fly():void{

    }
}
