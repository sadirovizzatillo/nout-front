<template>
  <TheToast :message="message" :type="type" v-if="useToast().active"/>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>



<script setup>
import { useToast } from "@/stores/toast"

const message = computed(() => {
  return useToast().message
});

const type = computed(() => {
  return useToast().type
});

</script>