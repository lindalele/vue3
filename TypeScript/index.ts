let num:number=100;//ts可以设置类型
num=100;
let a:number=10;
let b:number=NaN;
let c:number=Infinity;
let d:number=0xA12;//16进制
let e:number=0b1010101;//二进制
let f:number=0o75
//string
let str:string="这是双引号字符串"
let str1:string='单引号字符串'
let str2:string=`hello 这是一个模板字符串${a}`
//boolean
let flag:boolean=true;
let flag1:boolean=false;
// 数组 Array<数据类型>
let arr:Array<number>=[1,2,3,4]; //数组声明中数组成员之只能是数字
// 数据类型【】
let arr1:number[]=[1,2,3,4];//规定了数组成员全部是数字
//元组（Tuple）允许表示一个已知元素的数量和类型
let arr2:[number,string]=[1,'a'];//第一个元素是数字，第二个元素是字符串

arr2[0]=1000;
// 如果越界的话，因为只规定了2个元素。是可以访问的
// 空值void undefined或者null都属于void
let res:void=null; //用处不大，只能赋值为null后者undefined
let res2:void=undefined;

// any任意值表示任意类型
let somevar:any=10;
somevar='abc';

let o2:object={}
let o1:object=[]
//对象类型 定义了o必须是对象，且不能是空对象，必须有两个键，一个是name，一个是age
let o:{name:string,age:number}={name:'张学友',age:18};

// 枚举类型
enum Gender{
    male=1, //也可以赋默认值
    female=0,
    unknown=-1
}
// let gender:Gender=1;//let gender:number=1;
 let gender:Gender=Gender.male;
let obj={ 
    gender:Gender.male //枚举类型为数据赋予好看的名称
}
//类型断言
let stri:any='abc';
let len:number=(<string>stri).length;  //因为stri是any,xyz都可能，所以.length会报错，给他一个类型断言就不会报错

