<template>
  <PageTemplate>
    <template #header>
      <PageHeader title="Informazioni" :show-back-button="true" @on-back="router.go(-1)" />
    </template>
    <div class="surface-ground p-4 h-full">
      <Card class="mb-4">
        <template #content>
          <div class="flex flex-column align-items-center justify-content-center p-4">
            <Image :src="image" alt="logo" style="width: 100%" class="mb-6" />
            <div class="text-xl font-bold text-color-secondary">Versione App: {{ appVersion }}</div>
          </div>
        </template>
      </Card>
    </div>
  </PageTemplate>
</template>
<script setup lang="ts">
import PageTemplate from "@/components/layout/PageTemplate.vue";
import PageHeader from "@/components/PageHeader.vue";
const image = "assets/logo_aicslucca.png";
import { useStore } from "@/store/main";
import { storeToRefs } from "pinia";
import router from "@/router";

const { appVersion } = storeToRefs(useStore());
</script>
