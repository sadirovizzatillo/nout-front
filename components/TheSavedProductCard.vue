<template>
    <ul role="list" class="divide-y flex flex-col divide-gray-200 w-96 absolute top-7 -right-7 p-2 bg-white rounded-lg shadow-lg">
        <li class="p-3 w-full cursor-pointer" v-for="(product, index) in storedProducts" :key="index">
            <div class="flex items-center w-full">
                <div class="flex-shrink-0 mr-3" @click="handleProductClick(product.id)">
                    <img class="w-8 h-8 rounded-full" :src="product.url" alt="Neil image">
                </div>
                <div class="flex flex-col w-full">
                    <div class="flex justify-between items-center" @click="handleProductClick(product.id)">
                        <p class="text-base font-medium text-gray-900 truncate">
                            {{ product.name }}
                        </p>
                        <span @click="handleRemoveStoreProduct(product.id)">
                            <IconDelete :size="16"/>
                        </span>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                        </p>
                        <div class="inline-flex items-center text-xs font-semibold text-gray-900 self-end" @click="handleProductClick(product.id)">
                            {{ (product.price).toLocaleString('RU-ru') }} so'm
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { useStoreCard } from '@/stores/store-card';
import IconDelete from "@/components/Icons/IconDelete.vue"

const router = useRouter();

const storedProducts = computed(() => {
    return useStoreCard().savedProducts
})

const handleRemoveStoreProduct = (id) => {
    useStoreCard().removeProductFromCard(id)
}

const handleProductClick = (id) => {
    router.push({ name: "product-id", params: { id: id }})
}
</script>