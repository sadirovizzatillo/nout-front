<template>
  <div>
    <MainHero />
    <div class="mb-[60px]">
      <div class="flex justify-between mb-4">
        <h4>Best Selling product</h4>
        <p class="text-[#1252F4]">See all</p>
      </div>
      
      <div class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <!-- <TheProductSkeleton v-if="pending" v-for="skeleton in 10" :key="skeleton"/> -->
        
        <TheProduct v-for="(product, index) in products?.data" :key="index" :product="product"/> 
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

const { data: products, pending, error } = await useAPIFetch("product", {
  method:"GET",
});


</script>
