<template>
    <div class="container">
        <TheHeader @handleCategoryDrawer="handleDrawerSwitch" />
        <TheDrawerCategory 
        :categories="categories.data"
        v-if="isDrawer"
        />
        <TopCategories :categories="categories.data"/>
        <div class="main">
            <slot />
        </div>
        <TheFooter />
    </div>
</template>

<script setup>
import { useCategories } from '@/stores/categories';
import TopCategories from '@/components/TopCategories.vue';
import { storeToRefs } from 'pinia';

const { data: productCategories } = await useAPIFetch('products/category', {
    method: "GET"
});

const storeCategory = useCategories();
const { categories } = storeToRefs(storeCategory)

categories.value = productCategories.value


const isDrawer = ref(false);


const handleDrawerSwitch = () => {
    isDrawer.value = !isDrawer.value
}

</script>
