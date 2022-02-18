<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->

  <div>
    <p>mixin</p>
<!-- 混入拿到的x y -->
    x:{{ x }} y:{{ y }}
  </div>

  <div>
    <p>slot</p>
    <!-- 组件slot获取插槽内容 -->
    <Mousemove v-slot="{ x, y }"> x:{{ x }} y:{{ y }} </Mousemove>
  </div>

  <div>
    <p>composition api</p>
    <!-- 使用vue3方式 拿到组件数据  -->
    x:{{ XX }} y:{{ YY }}
  </div>

  <Foo title="heihei"></Foo>
  <Bar v-if="showBar"></Bar>
  <button @click="hideBar">hideBar</button>
  <Baz v-if="showBar"></Baz>


  ----
  <div>

    <Counter></Counter>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Foo from "./components/Foo.vue";
import Bar from "./components/Bar.vue";
import Baz from "./components/Baz.vue";
import Counter from './components/Counter.vue'
import Mousemove from "./Mousemove.vue";//vue2slot方式
import { ref, provide, toRefs } from "vue";
import MouseMoveMixin from "./MouseMoveMixin.js"; //vue2混入方式
// vue3的方式 取出函数
import { useMousemove } from "./useMousemove.js";
// npm i vuex@next
export default {
  name: "App",
  //mixin缺点 来源不清晰
  // foo bar other -> x, y
  // 变量重复
  mixins: [MouseMoveMixin],

  components: {
    // HelloWorld,
    Counter,
    Mousemove,
    Foo,
    Bar,
    Baz,
  },
  data() {
    return {
      name: "12",
      username(){
        // 可以拿到setup里面的值
        // data是在setup之后调用的
        // 最好不要混合用
      }
    };
  },
  setup() { //setup是最先调用的，data中的数据还不能拿到
    // this
    console.log(name); //拿不到data中的数据
    let showBar = ref(true);

    function hideBar() {
      showBar.value = false;
    }

    provide("app", "app.vue"); //依赖注入 key,value

    // const { x: XX, y: YY } = useMousemove(); //拿到导出的x y
    // 注意响应式数据丢失 解构position，****x y就不会是响应式了。
    const { position } = useMousemove();
    // 应该用toRef ，解决解构造成的响应式数据丢失问题
    const { x: XX, y: YY } = toRefs(position);
    console.log("----------------");
    console.log(XX, YY);

    return {
      XX,
      YY,
      showBar,
      hideBar,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
