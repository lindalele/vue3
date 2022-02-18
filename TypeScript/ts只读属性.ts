class Cat{
    // 如果属性加了readonly,则这个属性无法被赋值
    readonly name:string //name属性是只读的，只读属性必须在申明时，设置一个默认值，或者在constructor 里面写this.name='加菲'
    // type:string
    constructor(public type:string){ //构造函数给参数加修饰符public private,protected 等修饰符就相当于申明了一个属性
        // public type:string是类型声明和构造函数中接收参数后赋值过来this.type=type，的一个简写。
        this.name='加菲'
        // this.type=type
    }
}
var cat=new Cat('juzi')
