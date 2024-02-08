<template>
  <div>
    <div class="flex justify-content-between mb-2">
      <div class="flex align-items-center">
        <font-awesome-icon :icon="['fas', 'shirt']" class="mr-2" />
        <div class="text-color">
          {{ match.teamA }}
        </div>
      </div>
      <div class="font-bold">
        {{ ("scoreA" in match && match.scoreA) || "-" }}
      </div>
    </div>
    <div class="flex justify-content-between mb-2">
      <div class="flex align-items-center">
        <font-awesome-icon :icon="['fas', 'shirt']" class="mr-2" />
        <div class="text-color">
          {{ match.teamB }}
        </div>
      </div>
      <div class="font-bold">
        {{ ("scoreB" in match && match.scoreB) || "-" }}
      </div>
    </div>
    <small class="text-color-secondary">
      {{ `${(match.dateUtc && formatDate(match.dateUtc)) || "Da definire"}, ${match.location || "-"}` }}
    </small>
  </div>
</template>

<script lang="ts" setup>
import { formatDate } from "@/utils/date";

interface Props {
  match: {
    teamA: string;
    teamB: string;
    score?: string;
    date?: string;
    time?: string;
    dateUtc?: string;
    scoreA?: number;
    scoreB?: number;
    location?: string;
    matchCompleted?: boolean;
    week?: string;
  };
}

defineProps<Props>();
</script>
