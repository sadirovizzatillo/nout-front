<template>
    <div class="flex flex-col p-3 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100">
        <img class="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" :src="product?.url" alt="product image" width="120" height="80">
        <div class="w-full p-4">
            <div class="flex justify-between mb-2">
                <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">{{ product?.name }}</h5>
                <button class="cursor-pointer" @click="handleRemoveStoreProduct(product?.id)">
                    <IconDelete :size="18"/>
                </button>
            </div>
            <div class="flex justify-between items-start">
                <div class="flex flex-col">
                    <p class="mb-1 font-normal text-gray-700">{{ product?.description }}</p>
                    <p class="mb-1 font-normal text-gray-700">Here are of 2021 so far, in order.</p>
                </div>
                <TheInputCount :productId="product?.id" :hasLabel="false" :max="product?.count"/>
                <div class="flex flex-col items-end">
                    <p class="text-lg">{{ (product?.price)?.toLocaleString("RU-ru") }} сум</p>
                    <p class="text-sm line-through">25 116 000</p>
                </div>
            </div>
        </div>
    </div> 
</template>

<script setup>
import IconDelete from "@/components/Icons/IconDelete.vue"


const emit = defineEmits(['handleDeleteProduct']);

defineProps({
    product: {
        type: Object
    }
})

const handleRemoveStoreProduct = (id) => {
    emit('handleDeleteProduct', id)
}

</script>