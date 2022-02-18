
//     ts中的泛型
//   代码不仅要创建一致的定义良好的API，同时也要考虑可重用性。组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能
//     在像c#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。这样用户就可以自己的数据类型来使用组件

    // 通俗理解:泛型就是解决类、接口 方法的复用性、以及对不特定数据类型的支持 
 
        //只能返回string类型
        function getData1(value:string):string{ 
         return value
        }
        // 新需求：函数同时返回string类型和number类型
        function getData2(value:number):number{
            return value
        }
        // 如果都写any，是可以解决这个问题，但是相当于放弃了类型检查
        

// T表示泛型，具体什么类型，由调用方法时决定 
// 想实现传入什么返回什么的功能
// <T>代表传入的参数是任意类型  :T返回值是泛型，相当于任意传入的类型，所以返回值不能写死，否则报错
function getData<T>(value:T):T{ //可以用任意的大写字母，但是几个值必须要统一起来，都写T或者都写A

    return value
}
getData<number>(123);
// getData<number>('12')错误写法

function getDataAny<T>(value:T):any{ //可以用任意的大写字母，但是几个值必须要统一起来，都写T或者都写A

    return '11'
}
getDataAny<number>(124) //制定了参数必须是number
getDataAny<string>('222')
