// import * as PIXI from 'pixi.js'
import {
  Application,
  Graphics,
  Sprite,
  Texture,
  Text,
  Container,
} from "pixi.js";
import logo from "./assets/logo.png";
// Application初始化  4 15
const game = new Application({
  width: 500,
  height: 500,
});
// 可以自己创建一个容器Container
const box1 = new Container();
game.stage.addChild(box1); //stage就是一个容器的概念，Container也是需要放进stage中的
// 创建矩形 pixi.js插件的一个方法
const rect = new Graphics();
rect.beginFill(0xff0000);//填充
rect.drawRect(0, 0, 50, 50);
rect.endFill();
// interactive允许点击
rect.interactive = true;
// 点击事件
rect.on("pointertap", () => {
  console.log("click");
// 清除画布handleTicker是一个函数，让移动停下来
  game.ticker.remove(handleTicker);
});
//stage是 canvas的根容器，需要渲染出来，需要这一步
game.stage.addChild(rect);

// 创建一个图片
const img = new Sprite();
//Texture创建纹理 img-> url
img.texture = Texture.from(logo);
game.stage.addChild(img); //添加到容器内
box1.addChild(img);

//Text创建文本 const text = new Text("hello pixi.js")
let text = new Text("This is a PixiJS text", {
  fontFamily: "Arial",
  fontSize: 24,
  fill: 0xff1010,
  align: "center",
});
// game.stage.addChild(text); //最后都需要添加到容器内
box1.addChild(text);

box1.x = 100;
box1.y = 100;

function handleTicker() {
  box1.x++;
}
// ticker是每一帧都渲染的。这里的x++是往右移动
game.ticker.add(handleTicker);

// remove

// game.view是canvas
document.body.append(game.view);
