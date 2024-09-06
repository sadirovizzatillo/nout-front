<template>
    <div class="fixed left-0 right-0 top-4 flex items-center z-[99999] w-full max-w-xs p-4 mb-4 my-0 mx-auto text-gray-500 bg-white rounded-lg shadow" role="alert">
        <div :class="iconClass">
            <IconToastError v-if="props.type === 'error'"/>
            <IconToastSuccess v-if="props.type === 'success'"/>
            <IconToastWarning v-if="props.type === 'warning'"/>
            <span class="sr-only">Check icon</span>
        </div>
        <div class="ml-3 text-sm font-normal">{{ message }}</div>
        <button type="button" v-show="dismissible" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-success" aria-label="Close">
        <span class="sr-only">Close</span>
        <IconCancel @click="handleCancelToast"/>
    </button>
</div>
</template>

<script setup>
import IconToastError from "@/components/Icons/IconToastError.vue";
import IconToastSuccess from "@/components/Icons/IconToastSuccess.vue";
import IconToastWarning from "@/components/Icons/IconToastWarning.vue";
import IconCancel from "@/components/Icons/IconCancel.vue";
import { useToast } from "@/stores/toast"

const values = computed(() => {
    return {
        error: "red",
        success: "green",
        warning: "orange"
    };
});

const props = defineProps({
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const handleCancelToast = () => {
    console.log("sads");
    useToast().cancelToast();
}

const iconClass = computed(() => {
    const type = props.type;
    const color = values.value[type];
    return `inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-${color}-500 bg-${color}-100 rounded-lg`;
});

const dismissible = computed(() => {
    const type = props.type;
    return type === "error" || type === "success" || type === "warning";
});
</script>