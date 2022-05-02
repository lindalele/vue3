// vscode插件Code Runner可以直接用于运行js
// 工具类构造函数
function Stack() {
  var items = []
  // 从栈顶添加元素，也叫压栈
  this.push = function (item) {
    items.push(item)
  }
  // 弹出栈顶元素
  this.pop = function () {
    // 弹出一个元素，也就是删一个元素需要知道是谁被删了，删的对不对，所以return
    return items.pop()
  }
  // 判断栈是否为空
  this.isEmpty = function () {
    return items.length == 0
  }
  // 返回栈的大小
  this.size = function () {
    return items.length
  }
  // 清空栈
  this.clear = function () {
    items = []
  }
}

// 注意构造函数中用var ,不用this,因为如果用this，外部元素就能去改变这个元素，
// 用var就变成了构造函数的私有变量，只能在构造函数中自己使用

// 例子：合法括号
// 左括号和右边括号个数一样 成对出现
/**
 *sdf(ds(ew(we)rw)rwqq)qwewe 合法
 *(sd(qwqw)sd(sd)) 合法
 * ()()sd(sd()fw))( 不合法
 */
// 括号存在嵌套关系，也存在并列关系，如果是用数组存储这些括号，
// 然后再想办法一对一对的

// 判断字符串的括号是否合法
// function is_leagl_brackets(string) {
//   let arr = []
//   for (let i = 0; i < string.length; i++) {
//     const element = string[i]
//     arr.push(element)
//     if (element === ')' && arr.includes('(')) {
//       arr.pop()
//       const index = arr.lastIndexOf('(')
//       console.log(index)
//       arr.splice(index, 1)
//     }
//   }
//   console.log('arr', arr)
//   return arr.includes('(') || arr.includes(')')
// }
function is_leagl_brackets(string) {
  var stack = new Stack()
  for (let i = 0; i < string.length; i++) {
    const item = string[i]
    if (item === '(') {
      stack.push(item)
    } else if (item == ')') {
      if (stack.isEmpty()) {
        return false
      } else {
        stack.pop()
      }
    }
  }
  return stack.isEmpty()
}
console.log(is_leagl_brackets('()()sd(sd()fw))('))
console.log(is_leagl_brackets('sdf(ds(ew(we)rw)rwqq)qwewe'))
// 阮一峰关于class的3种方法

// 中缀表达式
// 1 + 2
// 2 + 4 + 5
// 后缀表达式
// 1 2 +
// 2 4 5 + +

// 默认表达式是正确的 数字 数字 运算符号
// 题目：从中缀表达式到后缀表达式也是用栈来实现
// ['4','13','5','/','+'] 等价于 (4+(13/5)) =6
// 过程'13','5','/'=2
//   ['4','2','+']
//   ['6']
// 分析：
//   4入栈
//   13入栈
//   5入栈
//   遇到/ 连续两次弹出栈顶元素 a=5 b=13; b/a=c;  c=2入栈
//  4 2
//   遇到+ 连续两次弹出栈顶元素 e f  e+f=6  6入栈

let arr = ['4', '13', '5', '/', '+']
console.log(calc_exp(arr))
function calc_exp(arr) {
  var stack = new Stack()
  for (let i = 2; i < arr.length; i++) {
    const item = arr[i]
    if (['+', '-', '*', '/'].indexOf(item) >= 0) {
      var value_1 = stack.pop()
      var value_2 = stack.pop()
      // 字符串连接 4+2
      var exp_str = value_2 + item + value_1
      // 计算并取整
      // eval用于计算字符串表达式
      var res = parseInt(eval(exp_str))
      // 计算结果压入栈中
      stack.push(res.toString())
    } else {
      stack.push(item)
    }
  }
  return stack.pop()
}

// 题目3：实现一个有min方法的栈，模拟数组的push pop方法
// 除常见的push,pop方法以外，提供一个min方法，返回栈里最小的元素，且时间复杂度为o(1)
function MinStack() {
  //存储数据
  var data_stack = new Stack.Stack()
  //存储最小值
  var min_stack = new Stack.Stack()

  // push方法
  this.push = function (item) {
    data_stack.push(item)
    //min_stack为空或者栈顶元素大于item
    if (min_stack.isEmpty() || item < min_stack.top()) {
      min_stack.push(item)
    } else {
      // 再放一次最小值
      min_stack.push(min_stack.top())
    }
  }
  //弹出栈顶元素
  this.pop = function () {
    data_stack.pop()
    min_stack.pop()
  }
  // 返回栈的最小值
  this.min = function () {
    return min_stack.top()
  }
}
// 栈没法冒泡，一次只能取一个数据，只能从上面取
minstack = new MinStack()
minstack.push(3)
minstack.push(6)
minstack.push(8)
console.log(minstack.min())
minstack.push(2)
console.log(minstack.min())
// 如果删了一个，那么只是存储了最小的话，最开始的3就没有了
minstack.pop()
console.log(minstack.min())
