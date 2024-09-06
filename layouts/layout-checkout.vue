<template>
    <div class="container">
        <TheHeader />
        <div>
            <slot />
        </div>
        <TheFooter />
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

</script>


<style>
</style>