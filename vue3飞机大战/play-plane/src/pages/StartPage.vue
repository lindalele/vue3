<template>
<!-- 创建容器，容器里面有图片，导入图片路径 -->
  <container>
    <sprite :texture="startPage"></sprite>
    <!-- 开始游戏按钮 :interactive="true"才能跑起来-->
    <sprite :texture="startBtn" x="250" y="520" @click="startGame" :interactive="true"></sprite>
  </container>
</template>

<script>
import startPage from "../assets/start_page.jpg";
import startBtn from "../assets/startBtn.png";
export default {
  setup(props, { emit }) { 
    // 开始游戏按钮
    const startGame = () => { 
      emit("change-page", "GamePage");
    };

    return {
      startGame,
      startPage,
      startBtn,
    };
  },
};
</script>

<style></style>
