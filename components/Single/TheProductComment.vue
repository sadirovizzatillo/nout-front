<template>
    <div class="flex flex-col mb-16">
        <header class="flex mb-4">
            <img src="../../assets/images/comment-img.png" alt="comment img">
            <div class="flex justify-between items-baseline">
                <div class="flex flex-col">fasfasfass
                    <h3>{{ props.comment.username }}</h3>
                    <IconsIconRate v-for="item in props.comment.rate" />
                </div>
                <p>{{ props.comment.date }}</p>
            </div>
        </header>
        <div>
            <h3 class="text-4xl">{{ props.comment.title }}</h3>
            <p>{{ props.comment.text }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'nuxt/dist/app/compat/capi';

const props = defineProps({
    comment:{
        type:Object
    }
})
</script>