// 自定义渲染器自定义渲染器
import { createRenderer } from "vue";
import { Container, Sprite, Texture } from "pixi.js";

const renderer = createRenderer({
  createElement(type) {  //这些方法都在运行时运行
    let element;
    switch (type) {
      case "container":
        element = new Container();
        break;
      case "sprite":
        element = new Sprite();
        break;
    }

    return element;
  },

  insert(el, parent) { 
    if (el) {
      parent.addChild(el);
    }
  },
// 渲染时需要用到的
  patchProp(el, key, prevValue, nextValue) {
//     console.log(key);
    switch (key) {
      case "texture": //文本渲染
        el.texture = Texture.from(nextValue);
        break;
      case "onClick": //点击开始游戏按钮，处理。如果是一个点击事件，这里被渲染的是onClick
        el.on("pointertap", nextValue);

        break;

      default:
        el[key] = nextValue;
        break;
    }
  },
  parentNode(node) {
    return node&&node.parent;
  },
  remove(el) {
    if (el && el.parent) {
      el.parent.removeChild(el);
    }
  },
  createText() {},
  createComment(){}, //注意这里需要写上，否则报错
  nextSibling() {}, 
  // 这个是设计模式了，里面的逻辑会用这个名字的函数，只要传入不同的函数就实现了不同的逻辑，ssr用不同的，dom用不同的。那自定义肯定也少不了的，因为里面调用了这个名字的函数，空就会报错
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
