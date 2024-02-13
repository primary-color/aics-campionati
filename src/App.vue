<script setup lang="ts">
import AppLongSpinner from "@/components/shared/AppLongSpinner.vue";
import { useStore } from "@/store/main";

const mainStore = useStore();
</script>

<template>
  <AppLongSpinner :visible="mainStore.longLoading" />
  <RouterView />
</template>
