export default {
  data() {
    return {
      x: 0,
      y: 0,
    };
  },

  methods: {
    handleMousemove(e) {
      this.x = e.pageX;
      this.y = e.pageY;
    },
  },

  mounted() {
    window.addEventListener("mousemove", this.handleMousemove);
  },

  unmounted() {
    window.removeEventListener("mousemove", this.handleMousemove);
  },
};
