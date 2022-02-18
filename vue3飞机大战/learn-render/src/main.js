// import { createApp, createRenderer } from "vue";
import { createRenderer } from "vue";
import App from "./App.vue";
import { Application, Graphics } from "pixi.js";

// template -> render -> vnode(element ,tree)  -> mountElement -> element -> append(#app)
// mountElement不同平台创建元素的方式不通，vue提供了创建元素的api 自定义渲染元素createRenderer
// console.log(App);
// console.log(App.render());

// init game
const game = new Application({
  width: 500,
  height: 500,
});
// game.view添加到视图里 是一个canvas
document.body.append(game.view);

const renderer = createRenderer({
  createElement(type) { //创建元素
    //     console.log(type);
    //     const element = document.createElement(type);
    //     return element;
    let element;
    if (type === "rect") {
      // 创建矩形首先import，
      element = new Graphics();
      element.beginFill(0xff0000);
      element.drawRect(0, 0, 50, 50);
      element.endFill();
    } else if (type === "circle") {
      element = new Graphics();
      element.beginFill(0xffff00);
      element.drawCircle(0, 0, 50);
      element.endFill();
    }

    return element;
  },
  insert(el, parent) { //append 的时候会调用这个
    //     console.log(parent);
    //     console.log(el);
    //     parent.append(el);
    parent.addChild(el); 
  },
  // 渲染接口 key是x y prevValue之前的值，nextValue当前的值
  patchProp(el, key, prevValue, nextValue) {
    console.log("patch");
    console.log(el, key);
    console.log(prevValue, nextValue);
    //     if(key === "x") el.x = nextValue
    //     if(key === "y") el.y = nextValue
    el[key] = nextValue;
  },
  // 设置元素的文字
    setElementText(node, text) {
      node.append(document.createTextNode(text));
    },
});
// console.log(renderer);
// 挂载
// renderer.createApp(App).mount(document.querySelector("#app"));
renderer.createApp(App).mount(game.stage);

// type children props

// createApp(App).mount("#app");
