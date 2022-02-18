<template>
  <div>
    user 737
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import useOne from "./useOne.js";  //可以吧单独的one抽离成一个函数引入
// 可以吧one功能逻辑都写在了函数内
function useTwo() {  
  // one
  const one = ref(1); //写一个响应式数据
  const handleOne = () => { //生成对应的函数
    one.value + 1;
  };

  watch(one, () => {}); //观察一下one
  const plusOne = computed(() => one.value + 1); //计算属性

  return {
    one,
  };
}
export default {
  setup() {
    const { one } = useOne();  //封装的是one
    const { two } = useTwo();
    const { three } = useThree();

    return {
      one,
    };
  },
};

// mixin
// export default {
//   data() {
//     return {
//       one: "1",
//       two: "2",
//       three: "3",
//     };
//   },
//   watch: {
//     one() {},
//     two() {},
//     three() {},
//   },
//   computed: {
//     plusOne() {
//       return this.one;
//     },
//     plusTwo() {
//       return this.two;
//     },
//     plusThree() {
//       return this.three;
//     },
//   },

//   methods: {
//     handleOne() {
//       console.log(this.one);
//     },
//     handleTwo() {
//       console.log(this.two);
//     },
//     handleThree() {
//       console.log(this.three);
//     },
//   },
// };
</script>

<style></style>
