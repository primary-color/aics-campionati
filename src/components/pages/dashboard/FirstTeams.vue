<template>
  <AppCard>
    <div class="content">
      <div class="gradient-text">
        <div class="grid grid-nogutter surface-border border-bottom-1 pb-3">
          <div class="col-1"></div>
          <div class="col-10">
            <div class="font-bold">Squadra</div>
          </div>
          <div class="col-1">
            <div class="font-bold">PT</div>
          </div>
        </div>
        <div class="grid grid-nogutter pt-3 font-bold" v-for="(t, idx) in teamsFiltered" :key="t.name">
          <div class="col-1">{{ idx + 1 }}</div>
          <div class="col-10">{{ t.name }}</div>
          <div class="col-1">{{ t.points }}</div>
        </div>
      </div>

      <div class="flex justify-content-end">
        <Button
          class="px-0 pb-0 mt-3 text-primary"
          icon="pi pi-arrow-right"
          iconPos="right"
          label="Classifica completa"
          link
          @click="emit('goToRankingPage')"></Button>
      </div>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ITeamRanking } from "@/api/interfaces";
import AppCard from "@/components/shared/AppCard.vue";
interface Props {
  teams: ITeamRanking[];
  maxTeamsVisible: number;
}

const props = defineProps<Props>();

const teamsFiltered = computed(() => props.teams.filter((t, idx) => idx < props.maxTeamsVisible));

const emit = defineEmits(["goToRankingPage"]);
</script>

<style scoped>
.content {
  position: relative;
  z-index: 1;
}

.gradient-text {
  position: relative;
}

.gradient-text::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0.7) 100%);
  z-index: 2;
  pointer-events: none;
}
</style>
