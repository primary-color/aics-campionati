<template>
  <div class="surface-ground h-full">
    <div>
      <Dropdown
        @update:modelValue="onUpdateWeek"
        :modelValue="selectedWeek"
        :options="weekOptionList"
        optionLabel="label"
        placeholder="Seleziona una giornata"
        class="m-3" />
      <BlockUI :blocked="isFetchingData" :pt="{ mask: { class: 'border-noround' } }">
        <div class="p-4 surface-card">
          <div class="text-2xl font-bold text-color border-bottom-1 surface-border pb-4 mb-4">Calendario giornata {{ selectedWeek?.week }}</div>
          <MatchItem v-for="(match, idx) in getTournamentCalendarValues" :match="match" :key="idx" class="pb-4 mb-4 surface-border border-bottom-1" />
        </div>
      </BlockUI>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from "@/store/main";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { generateWeekList } from "@/utils/tournament-calendar";
import MatchItem from "@/components/shared/MatchItem.vue";

const id = useRoute().params.id as string;

const store = useStore();
const { getTournamentCalendarValues, tournamentCalendar } = storeToRefs(store);

const week = computed(() => tournamentCalendar.value?.week || 0);
const weekCount = computed(() => tournamentCalendar.value?.weekCount || 0);

const weekOptionList = computed(() => generateWeekList(weekCount.value));
const selectedWeek = computed(() => weekOptionList.value.find((w) => w.week === week.value));

const isFetchingData = ref(false);

async function onUpdateWeek(weekOption: { label: string; week: number }) {
  isFetchingData.value = true;
  await store.fetchTournamentCalendar(id, weekOption.week);
  isFetchingData.value = false;
}
</script>

<style scoped>
.custom-table {
  width: 100%;
}
</style>
