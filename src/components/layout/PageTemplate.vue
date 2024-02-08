<template>
  <div class="h-full overflow-hidden flex flex-column">
    <div ref="elRefHeader" class="surface-card relative shadow-1 z-2">
      <slot name="header" />
    </div>
    <div class="overflow-y-auto overflow-x-hidden h-full surface-card">
      <slot />
    </div>
    <div ref="elRefFooter" class="sticky bottom-0 bg-primary-50 border-top-1 surface-border">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
