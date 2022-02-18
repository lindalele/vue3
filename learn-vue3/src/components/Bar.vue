<template>
  <div>count: {{ count }}</div>
  <div>age: {{ age }}</div>
  <button @click="plusCount">plusCount</button>
  <button @click="plusAge">plusAge</button>
  <button @click="stopWatch">stop</button>
</template>

<script>
/* eslint-disable no-unused-vars */
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const count = ref(0);
    const age = ref(18);

    function plusCount() {
      count.value++;
    }

    function plusAge() {
      age.value++;
    }

    const stop = watchEffect((onInvalidate) => {
      onInvalidate(() => {
        // 1. 重新触发watch 的
        // 2. 组件销毁的时候
        console.log("reset");
        //       window.removeEventListener("keydown",this.xxx)
      });
      // get -> 依赖收集
      //       window.addEventListener("keydown",this.xxx)
      // 可以观察多个值
      console.log("watch-effect", count.value + age.value);
      // set
    });

    const stopWatch = () => {
      stop && stop();
    };

    // watch vs watchEffect
    // 1. 可以明确的知道你观察的是谁
    // 2. 我们可以获取到之前的值，而watchEffect没有之前的值
    //     watch([count,age], (newVal, oldVal) => {});

    // watchEffect 一上来就会立即调用。而watch需要写immediate:true


    return {
      plusAge,
      age,
      stopWatch,
      count,
      plusCount,
    };
  },
};
</script>

<style></style>
