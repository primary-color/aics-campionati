<template>
  <DataTable scrollable scrollHeight="flex" class="w-full" :value="playersStats" dataKey="team">
    <Column frozen>
      <template #body="{ index }">
        {{ index + 1 }}
      </template>
    </Column>
    <Column sortable header="Nome" class="white-space-nowrap" style="max-width: 20rem">
      <template #body="{ data }">
        {{ `${data.firstName} ${data.lastName}` }}
      </template>
    </Column>
    <Column field="goal" sortable header="G" class="font-bold"></Column>
    <Column field="team" sortable header="Squadra" style="max-width: 20rem" class="white-space-nowrap overflow-x-hidden text-overflow-ellipsis"></Column>
    <Column field="warningsCount" sortable header="W" class="font-bold"> </Column>
  </DataTable>
</template>
<script lang="ts" setup>
import { useStore } from "@/store/main";
import { storeToRefs } from "pinia";

const { playersStats } = storeToRefs(useStore());
</script>

<style scoped></style>
