import { createApp } from "./runtime-canvas";
import { getRootContainer } from "./game";
import App from "./App.vue";

// pixijs
// canvas renderer

console.warn = () => {};
// mount时候是需要一个根容器的
createApp(App).mount(getRootContainer());
