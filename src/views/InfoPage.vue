<template>
  <PageTemplate>
    <template #header>
      <PageHeader title="Informazioni" :show-back-button="true" @on-back="router.go(-1)" />
    </template>
    <div class="surface-ground p-4 h-full">
      <Card class="mb-4">
        <template #content>
          <div class="flex flex-column align-items-center justify-content-center p-4 mb-6">
            <img :src="image" style="width: 100%" class="mb-4" />
            <div class="text-xl font-bold text-color-secondary">Versione App: {{ appVersion }}</div>
          </div>

          <div class="flex align-items-center justify-content-center w-full">
            <form action="https://www.paypal.com/donate" method="post" target="_top">
              <input type="hidden" name="business" value="6GTDV7EJ83LR6" />
              <input type="hidden" name="currency_code" value="EUR" />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/IT/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_IT/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
        </template>
      </Card>
    </div>
  </PageTemplate>
</template>
<script setup lang="ts">
import PageTemplate from "@/components/layout/PageTemplate.vue";
import PageHeader from "@/components/PageHeader.vue";
const image = "logo_aicslucca.png";
import { useStore } from "@/store/main";
import { storeToRefs } from "pinia";
import router from "@/router";

const { appVersion } = storeToRefs(useStore());
</script>
