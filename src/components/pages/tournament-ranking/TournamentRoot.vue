<template>
  <div class="pb-4">
    <DataTable scrollable scrollHeight="flex" class="w-full" :value="getTeamsRanking" dataKey="name">
      <Column frozen>
        <template #body="{ index }">
          {{ index + 1 }}
        </template>
      </Column>
      <Column
        field="name"
        frozen
        sortable
        header="Squadra"
        style="width: 180px; max-width: 180px"
        class="white-space-nowrap overflow-x-hidden text-overflow-ellipsis"></Column>
      <Column field="points" sortable header="PT" class="font-bold" dataType="numeric"></Column>
      <Column field="matches" sortable header="G" dataType="numeric"></Column>
      <Column field="won_matches" sortable header="V" dataType="numeric"></Column>
      <Column field="drawn_matches" sortable header="PA" dataType="numeric"></Column>
      <Column field="lost_matches" sortable header="PE" dataType="numeric"></Column>
      <Column field="goals_scored" sortable header="GF" dataType="numeric"></Column>
      <Column field="goals_conceded" sortable header="GS" dataType="numeric"></Column>
      <Column field="fair_play" sortable header="CD" dataType="numeric"></Column>
    </DataTable>
  </div>
  <div class="grid ml-1" v-for="(value, key) in standingsLegend" :key="key">
    <label for="firstname3" class="col-fixed" style="width: 40px"
      ><strong>{{ key }}</strong></label
    >
    <div class="col">
      {{ value }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/store/main";
import { standingsLegend } from "@/constants";
import { storeToRefs } from "pinia";

const { getTeamsRanking } = storeToRefs(useStore());
</script>

<style scoped></style>
