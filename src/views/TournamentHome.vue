<template>
  <PageTemplate>
    <template #header>
      <PageHeader :title="getTournamentName" :show-back-button="true" :show-menu-button="true" @on-back="router.push({ name: 'TournamentsPage' })"></PageHeader>
    </template>
    <AppSpinnner v-if="isFetchingData" />
    <RouterView v-else></RouterView>
    <template #footer>
      <Tabs :items="items" :active-item-idx="activeItemIdx" @tab:change="onChangeTab" />
    </template>
  </PageTemplate>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref } from "vue";
import PageTemplate from "@/components/layout/PageTemplate.vue";
import { useRoute } from "vue-router";
import router from "@/router";
import { useStore } from "@/store/main";
import { storeToRefs } from "pinia";
import Tabs from "@/components/shared/Tabs.vue";
import PageHeader from "@/components/PageHeader.vue";
import type { MenuItem } from "primevue/menuitem";
import AppSpinnner from "@/components/shared/AppSpinner.vue";

const store = useStore();
const { getTournamentName } = storeToRefs(store);

const route = useRoute();
const id = route.params.id as string;

const items: MenuItem[] = [
  { label: "Dashboard", icon: "fa-solid fa-home", key: "TournamentDashboard" },
  { label: "Classifica", icon: "fa-solid fa-trophy", key: "TournamentRankingPage" },
  { label: "Giocatori", icon: "fa-solid fa-people-group", key: "PlayersStatsPage" },
  { label: "Giornate", icon: "fa-solid fa-calendar", key: "CalendarPage" },
];

const activeItemIdx = computed(() => items.findIndex((i) => i.key === route.name));

function onChangeTab(item: MenuItem) {
  router.push({ name: item.key, params: { id } });
}

const isFetchingData = ref(false);

onBeforeMount(async () => {
  isFetchingData.value = true;
  await store.fecthTournamentDetails(id);
  await store.fetchPlayers(id);
  await store.fetchTournamentCalendar(id, 1);
  isFetchingData.value = false;
});
</script>
