<template>
  <Teleport to="body" v-if="getVisible || visbleDebounced">
    <div class="fixed top-0 surface-card w-full h-full" style="z-index: 2000">
      <div class="p-4 flex justify-content-center align-items-center h-full text-center">
        <div class="flex flex-column align-items-center justify-content-center h-full">
          <img :src="image" style="width: 65%" class="mb-4" />
          <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="4" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const image = "logo_aicslucca.png";
import { computed } from "vue";
import { useDebounce } from "@vueuse/core";

interface Props {
  visible?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  visible: false,
});
const getVisible = computed(() => props.visible);
const visbleDebounced = useDebounce(getVisible, 500);
</script>
