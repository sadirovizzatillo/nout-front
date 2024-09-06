<template>
    <div class="flex flex-col cursor-pointer">
        <div class="w-full bg-[#fafafa] rounded-md mb-3 h-[260px]" @click="handleProductClick(props.product.id)">
            <img :src="props.product.url" alt="product img" class="w-full h-[260px]" width="200" height="200">
        </div>
        <div class="flex flex-col">
            <div class="flex flex-col mb-4" @click="handleProductClick(props.product.id)">
                <h3 class="text-lg text-[#12161A] mb-2">{{ props.product.name }}</h3>
                <p class="text-[#2C3641] mb-1 text-sm">Intel® Core™ i9-13980HX processor</p>
                <p class="text-[#2C3641] mb-1 text-sm">NVIDIA® GeForce RTX™ 4070 graphics</p>
                <p class="text-[#2C3641] mb-1 text-sm">Up to 64 GB two SODIMM slots memory</p>
                <p class="text-[#2C3641] mb-1 text-sm">Up to 64 GB two SODIMM slots</p>
            </div>
            
            <div class="flex items-center justify-between">
                <div class="flex flex-col">
                    <p class="text-[#ABAFB3] line-through">{{ props.product.price?.toLocaleString("RU-ru") }} SO'M</p>
                    <p>{{ (props.product.price - 300000)?.toLocaleString("RU-ru") }} SO'M</p>
                </div>
                <button class="border-[#B2B7FF] rounded-xl" type="button" @click="saveToCard(props.product)">Saqlash</button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useStoreCard } from "~/stores/store-card";

const router = useRouter();


const props = defineProps({
    product:{
        type:Object
    }
})

const saveToCard = (product) => {
    useStoreCard().saveProduct(product)
}

const handleProductClick = (id) => {
    router.push({ name: 'product-id', params: { id: id } })
}
</script>