<template>
  <DashoboardRoot @go-to-players-page="goToPlayersPage" @go-to-ranking-page="goToRankingPage" />
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import router from "@/router";
import DashoboardRoot from "@/components/pages/dashboard/DashoboardRoot.vue";

const id = useRoute().params.id as string;

function goToPlayersPage() {
  router.push({ name: "PlayersStatsPage", params: { id } });
}

function goToRankingPage() {
  router.push({ name: "TournamentRankingPage", params: { id } });
}
</script>
