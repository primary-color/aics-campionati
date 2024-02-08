<template>
  <PageTemplate>
    <template #header>
      <slot name="header" />
    </template>
    <slot />
  </PageTemplate>
</template>

<script lang="ts" setup>
import PageTemplate from "./PageTemplate.vue";
</script>
