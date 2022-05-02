// import { createApp, defineComponent, createRenderer } from "vue";
// esm -> 静态的
// commonjs -> 动态的
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
elementui3引入
import 'element3/lib/theme-chalk/index.css'
import Element3 from 'element3'

// vue
// Vue.prototype
// vue3创建组件
const Foo=defineComponent({
  data(){},
  methods: {
    name() {
      
    }
  },
})

createApp(App)
  .use(store) // vue3 -> 
  .use(Element3)
  .mount("#app");
