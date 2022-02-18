import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 1,
  },
  mutations: {
    plusCount(state) {
      state.count++;
    },
  },
});

export default store;
