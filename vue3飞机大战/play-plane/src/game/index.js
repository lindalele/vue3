import { Application } from "pixi.js";

export const game = new Application({
  width: 780,
  height: 1080,
});

document.body.append(game.view);
// 导出根容器
export function getRootContainer() {
  return game.stage;
}
