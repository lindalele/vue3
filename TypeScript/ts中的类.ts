class Person{
    name:string
    age:number =10 //属性必须先声明，声明时，要么给与一个默认值，或者在构造函数中进行初始化
    constructor(name:string){
        this.name=name;//在ts中给对象添加属性，需要提前声明
    }
    // sayHello(msg:string):void{  //函数里面没有返回值的话，可以写默认是void
    //     console.log(msg);   
    // }
    // 给函数的返回值设置一个类型 :string代表函数会返回字符串
    sayHello(msg:string):string{  
        console.log(msg);   
        return 'abc'
    }
}