<template>
  <div>
    <div>
      {{ count }}
      double : {{ double }}
      <button @click="handleCount">click</button>
    </div>

    <div>
      age: {{ user.age }} readOnlyUser age : {{ readOnlyUser.age }}
      <button @click="handleChangeAge">change age</button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
// reactive readonly包裹复杂数据类型
import { ref, reactive, readonly, computed, watch } from "vue";
export default {
  //   data() {
  //     return {
  //       count: 1,
  //     };
  //   },
  props: ["title"],
  setup(props) { //接收参数进来，在里面打印
    //   props
    // setup -> not this ****在setup里面没有this
    // this.$props
    console.log(props); //打印props
    // eslint-disable-next-line vue/no-mutating-props
    // props.title = "hhaa";//props是不可以被修改的

    // count
    // 1 false "" -> 值类型
    let count = ref(1);
    console.log(count);

    // ref -> 也可以包裹引用类型的值 -> 最后会包裹成reactive 调用的时候还得是.value
    let info = ref({
      val: "heihei",
    });
    console.log(info);

    function handleCount() {
      // vue3 eslint
      count.value++;
    }

    // {} -> []  reactive中传入对象 数组等引用数据类型。，
    // 最后吧user这个对象返回出去即可
    const user = reactive({ 
      name: "xiaohong",
      age: 19,
    });
    console.log(user); //打印出的是代理proxy,因为是引用类型，所以直接是用了proxy,而不用像值类型用ref

// readonly应用场景：provide/inject不希望子组件修改值的话，就可以用readonly
    const readOnlyUser = readonly({ //readonly只能读
      name: "xiaohong",
      age: 19,
    });

    function handleChangeAge() {
      user.age++; //这里直接就使用了user。ref的值还需要用的是.value。我们在页面上使用的时候是直接用ref包裹的count值，不需要.value是因为vue3在return的时候自动给他解构了

      // 依赖注入的话，子组件
      // provide / inject
      readOnlyUser.age++; //readonly创建出来的对象只能读取
    }

    // ref vs reactive
    //     const obj = {
    //       name: "xiaohong",
    //       age: 18,
    //     };

    //     const name = "xiaohong";
    //     const age = 18;

    const double = computed(() => {
      return count.value * 2;
    });
    console.log(double);//计算属性也是ref的实现，使用时加上.value
//     console.log("lodash",_.cloneDeep);

    watch(
      count, // ref
      (newVal, oldVal) => {
        console.log("count - watch", newVal, oldVal);
      },
      {
        immediate: true,
      }
    );

    //watch对象的某一个属性用函数 object -> user
    watch(
      () => user.age,
      (newVal, oldVal) => {
        console.log("user age - watch", newVal, oldVal);
      }
    );

    watch(
      ()=> _.cloneDeep(user),
      (newVal, oldVal) => { //监听对象需要对复杂数据类型进行深拷贝
        // 引用类型的问题
        console.log("user - watch", newVal, oldVal);
      }
    );

    return {
      double,
      readOnlyUser,
      user,
      count,
      handleCount,
      handleChangeAge,
    };
  },
};
</script>

<style></style>
