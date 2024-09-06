<template>
    <div class="flex gap-4 fixed top-[110%] h-full left-0 right-0 z-40 w-full p-4 transition-transform -translate-y-full bg-white">
        <!-- drawer component -->
        <div 
        class="w-1/4" 
        tabindex="-1" 
        aria-labelledby="drawer-top-label"
        style="border-right: 1px solid hsla(220,4%,48%,.2);"
        >
        <ul class="flex flex-col items-start">
            <li 
            :class="[activeCategory === category?.id ? 'bg-slate-500 text-white' : '']"
            class="flex w-full justify-between gap-3 cursor-pointer p-2" 
            v-for="(category, index) in categories" :key="index" 
            @click="handleCategoryClicked(category.id)">
            <div class="flex justify-between gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11V16H19V11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11V16H3V11Z" fill="currentColor">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 13C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H7C8.10457 21 9 20.1046 9 19V15C9 13.8954 8.10457 13 7 13H5ZM17 13C15.8954 13 15 13.8954 15 15V19C15 20.1046 15.8954 21 17 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13H17Z" fill="currentColor">
                    </path>
                </svg>
                <p>{{ category.name }}</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.64645 6.14455C9.84171 5.94929 10.1583 5.94929 10.3536 6.14456L15.8554 11.6465C16.0507 11.8417 16.0507 12.1583 15.8554 12.3536L10.3536 17.8555C10.1583 18.0507 9.84171 18.0507 9.64645 17.8555C9.45118 17.6602 9.45118 17.3436 9.64645 17.1483L14.7948 12L9.64644 6.85166C9.45118 6.6564 9.45119 6.33981 9.64645 6.14455Z" fill="currentColor">
                </path>
            </svg>
        </li>
    </ul>
</div>

<div class="w-3/4">
    <ul class="items-start grid grid-cols-3 gap-4" v-if="childCategories?.length > 0">
        <li 
        class="flex flex-col items-start"
        v-for="(subCategory, index) in childCategories"
        :key="index"
        >
        <h2 class="mb-3">{{ subCategory.name }}</h2>
        <ul class="flex flex-col self-start items-start">
            <li
            class="text-sm text-gray-500 cursor-pointer mb-1"
            v-for="(child, index) in subCategory?.children"
            :key="index"
            @click="handleClickChildCategory(child)"
            >
            {{ child.name }}
        </li>
    </ul>
</li>
</ul>
<div v-else>
    <TheEmptyCard />
</div>
</div>
</div>
</template>

<script setup>
const props = defineProps({
    categories:{
        type: [Array, Object]
    }
})

const childCategories = ref([]);
const activeCategory = ref(null);

const handleClickChildCategory = async (category) => {
    const { data: products } = await useAPIFetch(`product/category/${category?.id}`, {
        method:"GET",
    })
}

const handleCategoryClicked = async (id) => {
    activeCategory.value = id
    const { data: product } = await useAPIFetch(`products/category/child/${id}`, {
        method:"GET",
    })
    childCategories.value = product.value.data
}
</script>