<template>
    <div class="flex flex-col">
        <h3 class="mb-8 text-[#12161A] text-2xl">Filter</h3>
        <div class="flex flex-col mb-4">
            <h4 class="text-xl mb-3">Narxi</h4>
            <div class="flex gap-3">
                <div>
                    <label for="fromPrice" class="block mb-2 text-sm font-medium text-gray-900">Dan</label>
                    <input type="number" id="fromPrice" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Minimal summa" required>
                </div>
                <div>
                    <label for="untilPrice" class="block mb-2 text-sm font-medium text-gray-900">Gacha</label>
                    <input type="number" id="untilPrice" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Maksimal summa" required>
                </div>
            </div>
            <div>
                <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
            </div>
        </div>
        <div class="flex flex-col mb-3" v-for="(filter, index) in filterData" :key="index">
            <h4 class="text-xl mb-3">{{ filter?.name }}</h4>
            <div class="flex flex-col">
                <div 
                class="flex items-center mb-4" 
                v-for="(attibute, index) in filter?.children" 
                :key="index">
                <input 
                :id="attibute?.name" 
                type="checkbox" 
                :model-value="useStoreCard().checkbox"
                @change="handleAttributeChange(attibute, filter)"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                <label :for="attibute?.name" class="ml-2 text-sm font-medium text-gray-900">{{ attibute?.name }}</label>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { useStoreCard } from '@/stores/store-card';

const emit = defineEmits('handleAttributeChange');

defineProps({
    filterData:{
        type:Array
    }
})

const handleAttributeChange = (attr, filter) => {
    useStoreCard().addCheckbox(attr);
    emit('handleAttributeChange', { values: useStoreCard().checkboxValues, name: filter });
}
</script>