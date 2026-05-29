import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
export function useOrientation() {
    const WINDOW_SIZE = useWindowSize();

    const WIDTH = computed(() => WINDOW_SIZE.width.value);
    const HEIGHT = computed(() => WINDOW_SIZE.height.value);

    const IS_LANDSCAPE = computed(() => HEIGHT.value < WIDTH.value);
    const IS_PORTRAIT = computed(() => HEIGHT.value >= WIDTH.value);

    return {
        IS_LANDSCAPE,
        IS_PORTRAIT,
        WIDTH,
        HEIGHT,
    };
}
