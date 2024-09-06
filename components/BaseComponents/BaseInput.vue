<template>
    <label class="block mb-2 text-sm font-medium text-gray-900">{{ label }}</label>
    <input 
    :placeholder="label"
    :value="modelValue"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script setup>
defineProps({
    modelValue:{
        type: [String, Number],
        default: ''
    },
    label:{
        type:String,
        default: ''
    }
})
</script>