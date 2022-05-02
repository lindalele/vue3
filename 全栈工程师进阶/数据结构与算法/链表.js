// 节点类
var Node = function (data) {
  this.data = data
  this.next = null
}
var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(5)
node1.next = node2
node2.next = node3

// 无头链表

// 有头链表
// 头节点     首节点     中间节点       尾节点
// 空  next-- > data next--》data next-- > data next
// ↑                                  ↑
// head                             tail

// 定义链表类
function LinkList() {
  // 定义节点
  var Node = function (data) {
    this.data = data
    this.next = null
  }
  var length = 0 //长度
  var head = null //头节点
  var tail = null //尾节点
  // append在链表的末尾添加元素
  this.append = function (data) {
    // 创建新节点
    var new_node = new Node(data)
    if (head == null) {
      // 只有一个节点的时候，那么这个节点既是首节点又是尾节点
      head = new_node
      tail = new_node
    }
    // new_node是最后一个节点
    // tail永远指向最后一个节点
    else {
      tail.next = new_node
      tail = new_node
    }
    length += 1
    return true
  }
  // 打印方法
  this.print = function () {
    var curr_node = head
    // 一直打印下一个
    while (curr_node) {
      console.log(curr_node.data)
      curr_node = curr_node.next
    }
  }
var get_node=function(index){ 
  if(index<0||index>=length) return null;
  var curr_node=head
  var node_
}
  // insert在指定位置插入
  this.insert = function (index, data) {
    if (index < 0 || index > length) {
      return false
    }
    //最后一个
    else if (index == length) {
      return this.append(data)
    } else {
      var new_node = new Node()
      // new_node成为新的节点
      if (index == 0) {
        new_node.next = head
        head = new_node
      } else {
        //验证边界条件index=1的时候
        var insert_index = 1
        var curr_node = head
        // curr_node是要找到插入位置的前一个节点

        while (insert_index < index) {
          insert_index += 1
          curr_node = curr_node.next
        }
        // 当循环结束
        // curr_node: 2|next      9|next->
        //                ↓       ↑
        //               new_node:  8|next
        var next_node = curr_node.next //9
        curr_node = new_node //8
        new_node.next = next_node //8的下一个指向原来curr_node的下一个节点9
      }
    }
  }
  36
  this.remove = function (index) {
    if (index < 0 || index >= length) {
      //大于等于长度
      return null
    } else {
      var del_node = null
      if (index == 0) {
        del_node = head
        head = head.next
        if(!head) tail=null
      } else {
        var del_node = 0
        var pre_node = null //被删除节点的前一个节点
        var curr_node = head //curr_node就是要被删除的节点
        while (del_node < index) {
          del_node += 1
          pre_node = curr_node
          curr_node = curr_node.next
        }
        del_node = curr_node
        // 被删除节点的前一个节点指向被删除节点的后一个节点
        pre_node.next = curr_node.next
        // 如果被删除节点是尾节点
        if (curr_node.next == null) {
          // tail永远指向尾节点，尾节点被删了以后，需要重新指一下
          tail = pre_node
        }
      }
      length -= 1
      del_node.next = null
      return del_node.data
    }
  }
}
var link = new LinkList()
link.append(2)
link.append(4)
link.append(8)
// 定义了head和tail，当链表为空时，他们都是null，新增节点后，head指向首节点，tail指向尾节点

// 面试题
// 反转链表
function reverse_iter(head) {
  if (!head) return null
  var pre_node = null //前一个节点
  var curr_node = head //当前要翻转的节点
  // 只要有curr_node,假设它现在是最后一个节点，最后一个节点的next_node是null，
  // 当null过来的时候，循环不成立。此时pre_node是最后一个节点，然后return出来
  while (curr_node) {
    var next_node = curr_node.next //下一个节点
    curr_node.next = pre_node //对当前节点进行翻转
    pre_node = curr_node //pre_node向后滑动
    curr_node = next_node //curr_node向后滑动
  }
  // 最后要返回pre_node,当循环结束时，pre_node指向翻转前列表的最后一个节点
  return pre_node
}
// print(reverse_iter(node1))

// 用递归的方式进行反转链表

function reverse_digui(head) {
  if (!head) return null
  // 当遇到尾节点时，终止
  if (head.next == null) return head
  // 把头给下一个节点，等到所有的反转完得到的new_head就是反转后的头节点
  var new_head = reverse_digui(head.next)

  head.next.next = head //把head当前节点连接到 新链表下下一个上，下一个节点的连接断开
  head.next = null
  return new_head
}
// print(reverse_digui(node1))
// 题：从尾到头打印 41
function reverse_print(head) {
  // 递归终止条件
  if (head == null) return
  else {
    console.log('head', head.data)
    reverse_print(head.next) //甩锅，让下一个去打印
    console.log('head', head)
    console.log('head.data', head.data) //后面的都打印了，该打印自己了
  }
}
reverse_print(node1)
