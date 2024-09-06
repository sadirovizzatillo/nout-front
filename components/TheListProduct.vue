<template>
    <div class="flex cursor-pointer" @click="handleProductClick(props.product.id)">
        <div class="bg-[#fafafa] rounded-md mb-3 flex items-center">
            <img :src="props.product?.url" alt="product img" width="200" height="200">
        </div>
        
        
        <div class="flex flex-col p-3">
            <div class="flex flex-col mb-4">
                <h3 class="text-lg text-[#12161A] mb-2">{{ props.product.name }}</h3>
                <p class="text-[#2C3641] mb-1">Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                <!-- <p class="text-[#2C3641] mb-1">NVIDIA® GeForce RTX™ 4070 graphics</p>
                <p class="text-[#2C3641] mb-1">Up to 64 GB two SODIMM slots memory</p>
                <p class="text-[#2C3641] mb-1">Up to 64 GB two SODIMM slots</p> -->
            </div>
            
            <div class="flex items-center justify-between">
                <div class="flex flex-col">
                    <p class="text-[#ABAFB3] line-through">{{ props.product.price?.toLocaleString("RU-ru") }} SO'M</p>
                    <p>{{ (props.product.price - 300000)?.toLocaleString("RU-ru") }} SO'M</p>
                </div>
                <button class="border-[#B2B7FF] rounded-xl" type="button" >Saqlash</button>
            </div>
        </div>
    </div>
</template>


<script setup>
const router = useRouter();


const props = defineProps({
    product:{
        type:Object
    }
})

const handleProductClick = (id) => {
    router.push({ name: 'product-id', params: { id: id } })
}
</script>