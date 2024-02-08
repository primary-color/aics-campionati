<template>
  <AppCard>
    <div class="content">
      <div class="gradient-text">
        <div class="grid grid-nogutter surface-border border-bottom-1 pb-3">
          <div class="col-1"></div>
          <div class="col-10">
            <div class="font-bold">Giocatore</div>
          </div>
          <div class="col-1">
            <div class="font-bold">G</div>
          </div>
        </div>
        <div class="grid grid-nogutter pt-3 font-bold" v-for="(p, idx) in playersFiltered" :key="idx">
          <div class="col-1">{{ idx + 1 }}</div>
          <div class="col-10">{{ `${p.firstName} ${p.lastName}` }}</div>
          <div class="col-1">{{ p.goal }}</div>
        </div>
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
  </AppCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IPlayerRanking } from "@/api/interfaces";
import AppCard from "@/components/shared/AppCard.vue";
interface Props {
  players: IPlayerRanking[];
  maxPlayersVisible: number;
}

const props = defineProps<Props>();

const playersFiltered = computed(() => props.players.filter((t, idx) => idx < props.maxPlayersVisible));

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
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0.8) 100%);
  z-index: 2;
  pointer-events: none;
}
</style>
