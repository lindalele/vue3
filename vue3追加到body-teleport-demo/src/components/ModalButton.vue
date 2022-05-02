<template>
  <div>
    <button @click="modalOpen = true">
      Open full screen modal! (With teleport!)
    </button>
组件指定渲染位置 到body
    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div>
          I'm a teleported modal! (My parent is "body")
          <button @click="modalOpen = false">Close</button>
        </div>
      </div>
    </teleport>

    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div>
          父级是ModalButton
          <Foo></Foo>
          two
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
// teleport 追加的概念
import Foo from './Foo.vue'
export default {
  components: {
    Foo
  },
  data() {
    return {
      modalOpen: false,
    };
  },
};
</script>

<style>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>
