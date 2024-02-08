<template>
  <div>
    <div class="grid grid-nogutter align-items-center p-2">
      <div class="col">
        <Button v-if="showBackButton" icon="pi pi-arrow-left" text rounded severity="secondary" @click="onBack" />
      </div>
      <div class="col-9">
        <div class="text-color font-bold text-overflow-ellipsis overflow-hidden white-space-nowrap">
          {{ title || " " }}
        </div>
      </div>
      <div class="col flex justify-content-end">
        <Button
          v-if="showMenuButton"
          text
          rounded
          severity="secondary"
          type="button"
          icon="pi pi-ellipsis-v"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { MenuItem } from "primevue/menuitem";
import router from "@/router";

defineProps(["title", "showBackButton", "showMenuButton"]);
const emit = defineEmits(["onBack"]);

function onBack() {
  router.push({ name: "TournamentsPage" });
  emit("onBack");
}

const menu = ref();
const items = ref<MenuItem[]>([
  {
    label: "Informazioni",
    icon: "pi pi-info-circle",
    command: () => {
      router.push({ name: "InfoPage" });
    },
  },
]);

const toggle = (event: any) => {
  menu.value.toggle(event);
};
</script>

<style scoped></style>
