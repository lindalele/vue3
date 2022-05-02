// 哈希函数就是给他一个字符串，他返还一个整数
// hash函数对url进行处理，转成整数，但是bitMap能够映射的最大值是M，一个url的hash值需要对M 求模，这样就会产生冲突，
// 而且随着存储数据的增多，冲突率重复率也会越来越大。

// 布隆过滤器的思想：因为bitmap只能存整数，如果遇到字符串就不行，那么布隆过滤器就是把字符串转成整数
// 布隆过滤器也有重复率，比如说可以设置百分之多少是可以接受的范围，大数据适合，小的数据差一个就关系比较大，影响大。比如10个差一个就不行

// 关于降低冲突率，可以用到布隆过滤器：
// github上找到了一个 ****murmurhash  key是要存进来的url，hash是hash函数
// 因为会有比如8个种子，也就是hash算法，那么同一个需要存进来的key，进行了8次hash算法，那么他的冲突率就会降下来
// 重复率是指布隆过滤器说不存在就是不存在，如果判定存在，可能有误判，因为万一别的值占位了变了1，然后输出说有的情况

// 设置位的值
var set_bit=function (bit){
  var arr_index=Math.floor(bit/32)
  var bit_index=Math.floor(bit%32)
  bitMap[arr_index] | =(1<<bit_index)
}

// 读取位的值
var get_bit=function(bit){
  var arr_index=Math.floor(bit/32)
  var bit_index=Math.floor(bit%32)
  return bitMap[arr_index] &=(1<<bit_index)
}
// isExist方法
this.isExist=function(key){
  for (let i = 0; i < hash_ount; i++) {
    var hash_value=murmurhash3_32_gc(key,i)
    if(!get_bit(Math.abs(Math.floor(haash_value % (bit_size))))){
      return false
    }
  }
  return true
}

