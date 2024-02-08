<template>
  <div class="p-4 flex justify-content-center align-items-center h-full text-center z-5">
    <div class="flex flex-column align-items-center justify-content-center h-full">
      <img :src="image" style="width: 65%" class="mb-4" />
      <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import router from "@/router";
const image = "logo_aicslucca.png";

onMounted(() => {
  setTimeout(() => {
    router.push({ name: "TournamentsPage" });
  }, 3000);
});
</script>

<style scoped></style>
