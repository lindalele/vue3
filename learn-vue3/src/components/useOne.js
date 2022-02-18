import { ref, watch, computed } from "vue";

export default function useOne() {
  // one
  const one = ref(1);
  const handleOne = () => {
    one.value + 1;
  };

  watch(one, () => {});
  const plusOne = computed(() => one.value + 1);

  return {
    one,
  };
}
