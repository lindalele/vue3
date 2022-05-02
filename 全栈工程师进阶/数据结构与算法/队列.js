// 队列就像排队，先进先出
// 队列是一种特殊的线性表，期特殊之处在于，它只允许你在队列的头部删除元素，在队列的末尾添加新的元素

// 入队1《-2
// 1 2 《--3
// 1 2 3
// 出队：谁先进，先出 不可以插队
// 1先出来

// 队列的实现：用数组的方式来实现 保证先进先出的队列特点
// 队列的方法如下：enqueue从队列尾部添加一个元素（新来一个排队的人，文明礼貌，站在了队伍末尾）
// dequeue从队列头部删除一个元素（排队伍最前面的人刚办理完登机手续，离开了队伍）
// head返回头部的元素，注意，不是删除（只是看一下，谁排在最前面）
// size返回队列大小（数一数有多少人在排队）
// clear清空队列
// isEmpty 判断队列是否为空
// tail返回队列尾节点
function Queue() {
  var items = [] //存储数据
  // 向队列尾部添加一个元素
  this.enqueue = function (item) {
    items.push(item)
  }
  // 移除队列头部的元素
  this.dequeue = function () {
    return items.shift()
  }
  // 返回队列头部的元素
  this.head = function () {
    return items[0]
  }
  // 返回队列尾部的元素
  this.tail = function () {
    return items[items.length - 1]
  }
  // 返回队列大小
  this.size = function () {
    return items.length
  }
  // clear
  this.clear = function () {
    items = []
  }
  // isEmpty判断是否为空队列
  this.isEmpty = function () {
    return items.length == 0
  }
}
19
// 题目：约瑟夫环（普通模式）
// 有一个数组a[100]存放0-99；要求每个两个数删掉一个数，到末尾时循环至开头继续进行，
// 求最后一个被删掉的数
function del_ring(arr_list) {
  // 把数组里的元素都放入到队列中
  var queue = new Queue()
  for (let i = 0; i < arr_list.length; i++) {
    queue.enqueue(arr_list[i])
  }
  //思路： 每三个删一个，index来计数，index是每一个数目都算进去了。队列中前两个数都会被排在最后，等待重新开始删除
  var index = 0
  while (queue.size() != 1) {
    // 弹出一个元素，判断是否需要删除
    var item = queue.dequeue()
    index += 1
    // 每个两个就删掉一个，那么不是被删的元素就放回到队列尾部
    if (index % 3 != 0) {
      queue.enqueue(item)
    }
  }
  return queue.head()
}
// 准备好数据
var arr_list = []
for (let i = 0; i < 100; i++) {
  arr_list.push(i)
}
console.log(del_ring(arr_list))

// 题目2：斐波那契数列  1 1 此后的每一项都是该项前面两项之和，即f(n)=f(n-1)+f(n-2)
// 先将两个1添加到队列中，之后使用while循环，用index计数，循环终止的条件是index<n-2
function fibonacci(n) {
  queue = new Queue()
  var index = 0
  // 先放入斐波那契数列的前两个数值
  queue.enqueue(1)
  queue.enqueue(1)
  while (index < n - 2) {
    // 出队列一个元素
    var del_item = queue.dequeue()
    // 去队列头部元素
    var head_item = queue.head()
    var next_item = del_item + head_item
    // 将计算结果放入队列
    queue.enqueue(next_item)
    index += 1
  }
  queue.dequeue()
  return queue.head()
}
34
// 队列的特点是只能从头部拿元素
// push：把队列的元素放到另一个区，知道剩下最后一个
// top两个队列，或者都为空，或者有一个不为空，只需要返回不为空的队列的尾部元素即可
/**
 * pop方法要弹出栈顶元素，这个栈顶元素，其实就是queue的队尾元素，但是由于使用队列实现，队尾元素不能删除，可以把data_queue里的元素（出了队尾元素）都移除到empty_queue中
 * 最后移除data_queue的队尾元素并返回
 * data_queue和empty_queue交换了身份
 */
function QueueStack() {
  var queue_1 = new Queue()
  var queue_2 = new Queue()
  var data_queue = null //放数据的队列
  var empty_queue = null //空队列，备份使用
  var init_queue = function () {
    if (queue_1.isEmpty() && queue_2.isEmpty()) {
      data_queue = queue_1
      empty_queue = queue_2
    } else if (queue_1.isEmpty()) {
      data_queue = queue_1
      empty_queue = queue_2
    } else {
      data_queue = queue_1
      empty_queue = queue_2
    }
  }
  // push方法
  this.push = function (item) {
    // 由于空队列和数据队列一直会互相倒数据，所以需要有一个函数来判断谁现在是空的队列
    init_queue()
    // 只要知道data_queue释放数据的
    data_queue.enqueue(item)
  }
  this.top = function () {
    init_queue()
    return data_queue.tail()
  }
  this.pop = function () {
    init_queue()
    // 只有一个元素的时候终止
    while (data_queue.size() > 1) {
      data_queue.enqueue(data_queue.dequeue())
    }
    return data_queue.dequeue()
  }
}
