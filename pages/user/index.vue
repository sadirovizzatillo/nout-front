<template>
    <div>
        <h3>Izzatillo</h3>
        <hr>
        <div class="flex py-4">
            <div class="w-1/4 flex flex-col">
                <NuxtLink to="/user/orders">Мои заказы</NuxtLink>
                <NuxtLink to="/user/profile">Настройки</NuxtLink>
            </div>
            <div class="w-2/4">
                <NuxtPage page-key="child" />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "default",
});

// await navigateTo({ name: 'user-orders' })
</script>