// 已知有n个整数，范围是[0,100],请设计一种数据结果，使用数组存储这些数据，并提供两种方法，
// 分别是addMember和isExist,下面是这种数据结果的类的定义
function FindClass() {
  var datas = [] //存储数据
  // 加入一个整数member
  this.addMember = function (member) {
    datas.push(member)
  }
  // 判断member是否存在
  this.isExist = function (member) {
    // for (let i = 0; i < datas.length; i++) {
    //   if (datas[i] == member) {
    //     return true
    //   }
    // }
    if (datas.indexOf(member) >= 0) {
      return true
    }
    return false
  }
}
var fc = new FindClass()
var arr = [0, 3, 5, 6, 9, 34, 23, 78, 99]
for (let i = 0; i < arr.length; i++) {
  fc.addMember(arr[i])
}
console.log(fc.isExist(3))
console.log(fc.isExist(7))
// 更快的方法***
// 无论是使用for循环查找，还是indexOf方法，时间复杂度都是O(n),加入的元素越多，
// isExist方法越慢，如果有一个时间复杂度是O(1)的算法，不论向里面增加了多少书，isExist的执行速度都是常量时间

// 通过索引***操作数据，时间复杂度就是O(1),题目说明这些数在0-100之间，那么就用每个数自身的值
// 作为索引，比如对于3这个数，可以让data[3]=1;就表示把3添加进来了，data[2]=0,
// 表示2没有添加进来，那么这样一来，isExist方法就可以用索引来判断member是否存在
// 也就是有一个二维数组，数组中的每一个元素可以存的数据是32位，如果进来一个数据%32等于1，说明他的位置应该在datas[1]里面
function BitMap(size) {
  var bit_arr = new Array(size)
  // 数组初始化0
  for (let i = 0; i < arr.length; i++) {
    bit_arr[i] = 0
  }
  this.addMember = function (member) {
    var arr_index = Math.floor(member / 32) //决定在数组中的索引
    var bit_index = member % 32 //决定在整数的32个bit的哪一位
    // 100个数字%32=4，计算出来 arr一共4个元素，比如31就在arr[0]=arr[0] | 1<<31，就是1左移31位
    bit_arr[arr_index] = bit_arr[arr_index] | (1 << bit_index)
  }
  this.isExist = function (member) {
    var arr_index = Math.floor(member / 32)
    var bit_index = member % 32
    //  这里开始不一样，前面是按位或，这里用按位与
    var value = bit_arr[arr_index] & (1 << bit_index)
    if (value != 0) {
      //如果在对应的位置不是0，就说明在这个位置上没有存储过这个数据
      return true
    }
    return false
  }
}

//2按位与 3&7
// 二进制   整数
//  0 1 1    3
//  1 1 1    7
// =按位与 1和1等于1  0和1=1
// 0 1 1     3

// 3按位或两个整数按位或运算，系统二进制位的数字如果有一个为1，则结果为1，
// 都为0，结果才是0，
// 5 | 8的计算过程：
//  二进制     整数
//  0 1 0 1    5
//  1 0 0 0    8
//  =
//  1 1 0 1    13

//4 左移：二进制向左移动n位，在后面添加n个0
// 举例 ：3<<1 也就是3往左移动1位
// 二进制  整数
//   1 1    3
// 1 1 0    6
// 往左移动以后 1 1  空缺一个位置补上0，就是 1 1 0

// 题目：3、 9、19、20代表有值用1来占位表示
var value = 0
value = value | (1 << 3) //需要在第3个位置占位1，所以也就是往左移动3位，其他的位置默认都是0
value = value | (1 << 9)
value = value | (1 << 19)
value = value | (1 << 20)
console.log(value)
// 分析：32位 能存的最大数字是99
// 00000000 00000000 00000000 00000001   1<<3
// 00000000 00000000 00000000 00001000   往左移动了3位  换算十进制=2^3=8

// 5.1判断这个数是否存在：首先由用户存进来一个数
// 分析：比如：
// 存进来一个0，add(0) ，进来一个0，我们保存1的位置在0位置
// 0 0 0 0 0 0 0 0   这代表十进制0
// 1<<0 | 0；--》1左移0位 或 0
// 0 0 0 0 0 0 0 1

// 再来一个1 add(1)
// 1<<1 |1；--》1左移1位，
// 00000010  移动1位的结果
// 00000001  1的二进制表示方法
// 00000011  最后他们用 按位或| ，就等于3 ，看到0 1位置都是1，也就是0 1位置都存在

// 判断5.2是否存在,3代表我们上一次存的数据，然后这一次是用户拿着2来判断
// 1<<2 & 3
//   00000100   1<<2
//   00000011   3
// = 00000000

//6 bitmap可以做大数据排序，但是如果中间有重复的数，就排不了
// 传统排序算法都不可逆解决这个这个排序问题，即使内存允许，其计算时间也是漫长的
// 排序：
156
var arr = [0, 6, 88, 7, 73, 34, 10, 99, 22]
var sort_arr = []
var bit_map = new BitMap(4)

for (let i = 0; i < arr.length; i++) {
  bit_map.addMember(arr[i])
}
// bit_map能存的数字是0-99
for (let i = 0; i < 99; i++) {
  if (bit_map.isExist(i)) {
    sort_arr.push(i)
  }
}
console.log(sort_arr)
// 缺点不能有重复的数据，而且必须是整数，因为字符串不能除以数字32

// 科普：00001001二进制换算十进制
// 1*2^0=1*1=1
// 0*2^1=0
// 0*2^2=0
// 1*2^3=8
// 相加等于9
