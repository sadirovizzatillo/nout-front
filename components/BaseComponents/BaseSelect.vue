<template>
    <label v-if="label">{{ label }}</label>
    <select 
    :value="modelValue"
    v-bind="{
        $attrs,
        onChange: ($event) => {
            $emit('update:modelValue', $event.target.value)
        }
    }"
    >
    <option 
    v-for="(option, index) in options"
    :key="index"
    :label="option"
    :selected="option === modelValue"
    :value="option"
    >
</option>
</select>
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
    },
    options:{
        type: Array
    }
})
</script>