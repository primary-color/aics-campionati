<template>
  <TournamentsPageTemplate>
    <AppSpinnner v-if="isFetchingData" />
    <TournamentsRoot @select:tournament="onSelectTournament" v-else />
  </TournamentsPageTemplate>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { useStore } from "@/store/main";
import router from "@/router";
import TournamentsPageTemplate from "@/components/layout/TournamentsPageTemplate.vue";
import TournamentsRoot from "@/components/pages/tournaments/TournamentsRoot.vue";
import AppSpinnner from "@/components/shared/AppSpinner.vue";
import type AppDialogVue from "@/components/shared/AppDialog.vue";

const mainStore = useStore();

function onSelectTournament(id: number) {
  router.push({ name: "TournamentHome", params: { id } });
}

const isFetchingData = ref(false);

onBeforeMount(async () => {
  isFetchingData.value = true;
  await mainStore.fecthTournaments();
  isFetchingData.value = false;
});
</script>

<style scoped></style>
