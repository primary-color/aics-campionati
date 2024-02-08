<template>
  <TabMenu
    :active-index="activeItemIdx"
    @tab-change="onTabChange"
    :model="items"
    :pt="{
      menu: {
        class: 'bg-primary-50 justify-content-evenly',
      },
      menuitem: {
        class: 'w-full',
      },
    }">
    <template #item="{ item, props }">
      <a v-ripple v-bind="props.action" class="flex flex-column align-items-center gap-2 bg-primary-50 py-4 px-2 border-none w-full">
        <font-awesome-icon :icon="item.icon" />
        <span v-bind="props.label">{{ item.label }}</span>
      </a>
    </template>
  </TabMenu>
</template>

<script lang="ts" setup>
import type { MenuItem } from "primevue/menuitem";
import type { TabMenuChangeEvent } from "primevue/tabmenu";
interface Props {
  items: MenuItem[];
  activeItemIdx: number;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "tab:change", value: MenuItem): void;
}>();

function onTabChange(evt: TabMenuChangeEvent) {
  emit("tab:change", props.items[evt.index]);
}
</script>
