<template>
  <container
    ><Map></Map>

    <Plane :x="planeInfo.x" :y="planeInfo.y"></Plane>
  </container>
</template>

<script>
import Map from "../components/Map.vue";
import Plane, { usePlane } from "../components/Plane.vue";
export default {
  components: {
    Map,
    Plane,
  },

  setup() {
    // planeInfo是函数返回的
    const { planeInfo } = usePlane();

    return {
      planeInfo,
    };
  },
};
</script>

<style></style>
