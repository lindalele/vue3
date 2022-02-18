class Animal{
    age:number //属性必须先声明，声明时，要么给与一个默认值，或者在构造函数中进行初始化
    constructor(age:number){
        this.age=age;//在ts中给对象添加属性，需要提前声明
    }
    // sayHello(msg:string):void{  //函数里面没有返回值的话，可以写默认是void
    //     console.log(msg);   
    // }
    // 给函数的返回值设置一个类型 :string代表函数会返回字符串
    eat(){  
        console.log('吃鸡腿');         
    }
}
class Dog extends Animal{ //extends继承
  type:string
  constructor(type:string,age:number){
      super(age); //子类实现继承第一件是super调用父类构造函数
      this.type=type;

  }
  eat(){
      console.log('子类方法和父类同名的方法，会覆盖父类方法，调用时调用的就是子类中的方法了');
      
  }
}
var dog=new Dog('哈士奇',18)
dog.eat()