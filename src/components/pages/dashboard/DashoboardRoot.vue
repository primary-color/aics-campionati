<template>
  <div class="surface-ground text-color">
    <div class="text-xl font-bold px-4 pt-4 flex align-items-center">
      <font-awesome-icon icon="fa-solid fa-trophy" class="mr-4"></font-awesome-icon>
      <div class="">Classifica</div>
    </div>
    <FirstTeams :teams="getTeamsRanking" :max-teams-visible="4" class="m-4" @goToRankingPage="emit('goToRankingPage')" />
    <div class="text-xl font-bold px-4 pt-4 flex align-items-center">
      <font-awesome-icon icon="fa-solid fa-people-group" class="mr-4"></font-awesome-icon>
      <div>Classifica marcatori</div>
    </div>
    <FirstPlayers :players="playersStats" :max-players-visible="4" class="m-4" @go-to-ranking-page="emit('goToPlayersPage')" />
    <div v-if="getLatestMatchResults.length" class="p-4 surface-card mb-4">
      <div class="text-2xl font-bold text-color border-bottom-1 surface-border pb-4 mb-4">Ultimi risultati</div>
      <MatchItem v-for="(match, idx) in getLatestMatchResults" :match="match" :key="idx" class="mb-4 pb-4 border-bottom-1 surface-border"></MatchItem>
    </div>
    <div v-if="getNextMatches.length" class="p-3 surface-card">
      <div class="text-2xl font-bold text-color border-bottom-1 surface-border pb-4 mb-4">Prossime partite</div>
      <MatchItem v-for="(match, idx) in getNextMatches" :match="match" :key="idx" class="mb-4 pb-4 border-bottom-1 surface-border"></MatchItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useStore } from "@/store/main";
import FirstPlayers from "./FirstPlayers.vue";
import FirstTeams from "./FirstTeams.vue";
import MatchItem from "../../shared/MatchItem.vue";

const { playersStats, getLatestMatchResults, getNextMatches, getTeamsRanking } = storeToRefs(useStore());

const emit = defineEmits<{
  (e: "goToRankingPage"): void;
  (e: "goToPlayersPage"): void;
}>();
</script>
