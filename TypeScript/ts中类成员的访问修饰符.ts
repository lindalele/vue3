// 访问修饰符
// 指的是可以在类的成员前通过添加关键字来设置当前成员的访问权限
// public公开的，省略默认是 所有人都可以进行访问
// private私有的，只能在当前类中进行访问
// protected：受保护的，只能在当前类后者子类中进行访问
enum Color{
    red,
    yellow,
    blue
}
class Car{
    // 如果不加访问修饰符，默认当前成员是公开的，所有人都可以访问
    public color:Color //属性必须先声明，之类的意思是他是枚举类型
    constructor(){
        this.color=Color.red;//在ts中给对象添加属性，需要提前声明
    }
    //加了private,当前方法只能在当前类中使用
    private run(){  
        console.log('吃鸡腿');         
    }
    protected loadPeople(){

    }
}
let byd=new Car()
// byd.run()不能访问，因为run加了private，只能在class类中访问，这里不能访问 
// byd.loadPeople() 被保护的成员只能在class中用

class Audi extends Car{ //extends继承

  sayHi(){
      console.log(this.color);
      this.loadPeople() //子类的类中可以使用
      
  }
}

var audi=new Audi()
// audi.run() //不能用因为加了修饰符