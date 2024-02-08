<template>
  <div class="flex flex-column h-full p-4">
    <div class="surface-border border-bottom-1 pb-4 mb-4">
      <span class="p-input-icon-left w-full mb-4">
        <i class="pi pi-search" />
        <InputText v-model="searchTerm" placeholder="Es: Amatori/dilettanti..." class="w-full" />
      </span>
      <Dropdown v-model="selectedCategory" :options="categories" placeholder="" />
    </div>

    <div class="overflow-auto">
      <div
        v-ripple
        v-for="tournament in tournamentsFiltered"
        :key="tournament.id"
        @click="onClickTournament(tournament)"
        class="p-ripple surface-ground hover:surface-hover cursor-pointer w-full py-3 px-4 surface-border border-1 border-round mb-2">
        <div class="flex justify-content-between align-items-center gap-6">
          <div class="flex flex-column">
            <small class="mb-2 text-color-secondary" v-if="tournament.location">
              {{ tournament.location }}
            </small>
            <div class="font-bold">{{ tournament.name }}</div>
          </div>
          <div>
            <i class="pi pi-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from "@/store/main";
import { storeToRefs } from "pinia";
import { watchDebounced } from "@vueuse/core";

const mainStore = useStore();
const { tournaments } = storeToRefs(mainStore);
const emit = defineEmits<{
  (e: "select:tournament", id: number): void;
}>();

const searchTerm = ref("");
const searchTermDebounced = ref("");

const selectedCategory = ref("CALCIO A 5");
const categories = ref(["CALCIO A 5", "CALCIO A 7", "CALCIO A 11"]);

watchDebounced(
  searchTerm,
  () => {
    searchTermDebounced.value = searchTerm.value;
  },
  { debounce: 200, maxWait: 1000 }
);

const tournamentsFiltered = computed(() =>
  tournaments.value.filter((t) => t.category === selectedCategory.value && t.path.toLowerCase().includes(searchTermDebounced.value.toLowerCase()))
);

function onClickTournament(t: any) {
  emit("select:tournament", t.id);
}
</script>

<style scoped></style>
