<template>
  <div>
    baz  判断八
    <input type="text" ref="input" />
    <div>
      <ul>
        <!-- 获取多个ref zai vue2直接ref="users"会把所有的放在users数组里面，vue3的写法稍显复杂-->
        <li
          v-for="(user, i) in users"
          :key="i"
          :ref=" //注意写法 是一个函数的写法
            (el) => {
              if (el) lis[i] = el;
            }
          "
        >
          {{ user.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import {
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount, //销毁前的钩子函数
  onUnmounted, //销毁钩子函数
  inject, //依赖注入
  ref,
  watchEffect,
  reactive,
} from "vue";
export default {
  setup() { //生命周期钩子 beforeCreate created,现在使用setup()
    //     onBeforeMount(() => {
    //       console.log("before-mount");
    //     });
    //     onMounted(() => {
    //       console.log("mounted");
    //     });
    //     onBeforeUpdate(() => {
    //       console.log("update");
    //     });
    //     onUpdated(() => {
    //       console.log("updated");
    //     });
    //     onBeforeUnmount(() => {
    //       console.log("before-unmount");
    //     });
    //     onUnmounted(() => {
    //       console.log("un - mounted");
    //     });

    function handleKeydown() {
      console.log("keydown");
    }

    onMounted(() => {
      console.log("mounted 1");
      window.addEventListener("keydown", handleKeydown);
    });

    //     onMounted(() => {
    //       console.log("mounted 2");
    //     });
    onUnmounted(() => {
      console.log("unmounted");
      window.removeEventListener("keydown", handleKeydown);
    });
//取值 ，第二个参数是设置默认值。注意取值的时候依赖提供的值，现在App.vue提供的是字符串，这里是不会转换成响应式的
    const app = inject("app", "app.vue - baz.vue");
    console.log("inject", app);

    // 获取单个ref    const input = ref(null); //初始化给一个null 获取input实例

    //     onMounted(() => { //挂载完成之后，拿到input的值
    //       console.log(input.value);
    //     });
    //     watchEffect( //还可以用watchEffect来获取值，调用时机是在末班渲染之前，所以还没有render,所以一开始是null。
    //       () => {
    //         console.log("watch- effect- baz.vue");
    //         console.log(input.value); //null
    //       },
    //       {
    //         flush: "pre", //flush:post 在渲染之后获取值，默认是pre渲染前获取值
    //       }
    //     );

    const users = reactive([
      {
        name: "xiaohong",
      },
      {
        name: "xiaoli",
      },
    ]);
    const lis = ref([]); // 获取多个ref
    onMounted(() => { //
      console.log("lis value");
      console.log(lis);
    });

    return {
      users,
      lis,
      input,
    };
  },
};
</script>

<style></style>
