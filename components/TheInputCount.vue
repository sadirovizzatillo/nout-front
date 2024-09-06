<template>
    <div class="flex items-center justify-between">
        <p v-if="props?.hasLabel">Quantity</p>
        <div class="flex flex-row h-[34px] border-2 rounded-lg w-[150px]">
            <button @click="decrement" class=" bg-gray-50 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                <span class="m-auto text-2xl font-thin">−</span>
            </button>
            <input v-model="num" min="1" @input="handleCountChange" :max="props?.max" type="number" class="outline-none focus:outline-none text-center w-full bg-gray-50 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700" name="custom-input-number" />
            <button @click="increment" class="bg-gray-50 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                <span class="m-auto text-2xl font-thin">+</span>
            </button>
        </div>
    </div>
</template>


<script setup>
import { useProduct } from "~/stores/product";
import { useStoreCard } from '@/stores/store-card';

const num = ref(1);

const props = defineProps({
    hasLabel:{
        type: Boolean,
        default: true
    },
    max:{
        type:[String, Number]
    },
    productId:{
        type: [String, Number]
    }
})

const handleCountChange = () => {
    if(props?.max && props?.max <= num.value){
        num.value = props?.max;
        useStoreCard().countChange(props?.productId, num.value)
        return
    }else{
        useStoreCard().countChange(props?.productId, num.value)
    }
}

const increment = () => {
    if(props?.max && props?.max <= num.value){
        num.value = props?.max;
        return
    }
    num.value = num.value + 1
    useStoreCard().increment(props?.productId, num.value)
}

const decrement = () => {
    if(1 >= num.value){
        num.value = 1;
        return
    }
    num.value = num.value - 1
    useStoreCard().decrement(props?.productId, num.value)
}
</script>
