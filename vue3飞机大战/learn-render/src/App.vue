<template>
<!-- 这里作为一个组件在main.js中引用，这里还可以嵌套一个元素 -->
  <rect x="100" y="100"><Circle x="200" y="200"></Circle></rect>
</template>

<script>
// 还可以把圆形作为一个组件
import Circle from './components/Circle.vue'
export default {
  name: "App",
  components: {
    Circle
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
