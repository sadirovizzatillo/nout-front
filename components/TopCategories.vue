<template>
    <ul class="category-list mb-[25px]">
        <li 
        v-for="(category, index) in props.categories" 
        :key="index"
        class="text-sm"
        >
        <nuxt-link class="text-gray-400" :to="{ name:'category-id',  params: { id: category.id } }">
            {{ category.name }}
        </nuxt-link>
    </li>
</ul>
</template>

<script setup>
const props = defineProps({
    categories:{
        type:[Array, Object]
    }
})

</script>

<style scoped>
.category-list{
    font-family: "DM-Bold";
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
}
.category-list li a{
    color: #363636;
}
</style>