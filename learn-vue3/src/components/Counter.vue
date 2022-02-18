<template>
  <div>count: {{ count }}</div>
  <el-button type="primary" @click="plusCount">plusCount</el-button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    // this -> this.$store
    const store = useStore();
    function plusCount() {
      store.commit("plusCount");
    }

    const count = computed(() => store.state.count);

    return {
      count,
      plusCount,
    };
  },
};
</script>

<style></style>
