// es5中定义函数的方法
// 函数声明法
function run(){
    return 'run'
}
// 匿名函数
var fun2=function():number{
    return 123
}
// TS中定义函数的方法
// 函数声明法
function runh():string{ //代表返回值需要是字符串才行，否则报错
    return '123'
}
// 匿名函数
var fun2=function():number{ //制定返回值是数字
    return 123
}
fun2() //调用方法

// ts中定义方法传参
function getInf(name:string,age:number):string{
    return `${name}---${age}`;
}
getInf('zs',20) //如果调用时，参数不对，在运行时就会不能通过
// 匿名函数
// name:string,age:number这种写法代表参数必须传
var getInfo1=function(name:string,age:number):string{
    return `${name}---${age}`;
}
getInfo1('zs',20) 

// 没有返回值的方法
function runt():void{
    console.log('run');   
}
runt()

// 方法可选参数
// es5里面的实参和形式参数可以不一样，但是在TS中必须一样，如果不一样就需要配置可选参数
// ?代表可选参数，可选参数必须配置到参数的最后面
function getInfoKeXuanCanShu(name:string,age?:number):string{
    if(age){
        return `${name}---${age}`;

    }else{

        return `${name}---年龄保密`;
    }
}
getInfoKeXuanCanShu('zs')

// 3.3默认参数
// es5中没法设置默认参数；ES6和TS中都可以设置默认参数
function getInfoMoRen(name:string,age:number=20):string{
    if(age){
        return `${name}---${age}`;

    }else{

        return `${name}---年龄保密`;
    }
}
getInfoMoRen('zs')

// 剩余参数 ES6用三点运算符接收传过来的值
function sum(...result:number[]):number{  //result每一个都是number,是一个数组
    var sum=0;
    for (let i = 0; i < result.length; i++) {
        sum+=result[i]
        
    }
    return sum
}
sum(1,2,3,4)
//吧参数1赋值给了a
function sum1(a:number,...result:number[]):number{  //result每一个都是number,是一个数组
    var sum=a;
    for (let i = 0; i < result.length; i++) {
        sum+=result[i]
        
    }
    return sum
}
sum1(1,2,3,4)

// 函数重载
// ts中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的
// es5为了兼容es5以及es6重载的方法和Java中有区别
// es5中出现同名方法，下面的会替换上面的方法
// function css(config){

// }
// function css(config){

// }
// ts中的重载
function getInfo(name:string):string; //注意只是定义函数名，没有方法体
function getInfo(age:number):string;
// 再定义一个同名方法
function getInfo(str:any):any{  
    if(typeof str==='string'){
        return '我叫'+str 
    }else{
        return '我的年龄是'+str
    }
}
getInfo('zs') //找到string第一个函数，然后会走到最后一个函数。 function getInfo(name:string):string;
getInfo(20)

// getInfo(true)//错误的写法，因为找不到参数匹配的


// ts中的重载2
function getInfo(name:string):string;
function getInfo(name:string,age:number):string;
function getInfo(name:string,age?:any):any{
    if(age){
        return '我叫'+name+'我的年龄'+age
    }else{
        return '我叫'+name
    }
}
getInfo('zs') //找到string第一个函数，然后会走到最后一个函数。 function getInfo(name:string):string;
// getInfo('李四',false) 写法错误，重载的方法里面找不到

// 3.6 ES6箭头函数
setTimeout(function (){
 console.log('es5写法');
 
},100)
setTimeout(()=>{
    console.log('es6写法');
    
})
