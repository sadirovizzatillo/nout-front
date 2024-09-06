<template>
    <div class="max-w-full bg-white border mb-4 border-gray-200 rounded-lg shadow">
        <div class="border border-gray-200">
            <p class="px-4 py-3">ID заказа {{ order.id }}</p>
        </div>
        <div class="p-6">
            <div class="grid grid-cols-6 items-start mb-2">
                <p class="mr-4 col-span-2">Статус:</p>
                <div class="flex items-center col-span-4">
                    <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Dark</span>
                    <p>{{ new Date(order.createdAt).toLocaleDateString() }}</p>
                </div>
            </div>
            <div class="grid grid-cols-6 items-start mb-2">
                <p class="mr-4 col-span-2">Дата заказа:</p>
                <div class="flex items-center col-span-4">
                    <p>воскресенье, 17 сентября 2023 г. в 21:15</p>
                </div>
            </div>
            <div class="grid grid-cols-6 items-start mb-2">
                <p class="mr-4 col-span-2">Дата доставки:</p>
                <div class="flex items-center col-span-4">
                    <p>понедельник, 18 сентября</p>
                </div>
            </div>
            <div class="grid grid-cols-6 items-start mb-2">
                <p class="mr-4 col-span-2">Пункт выдачи:</p>
                <div class="flex items-center col-span-4">
                    <p>г. Ташкент, Юнусабадский район, улица Богишамол, дом 3 (ТУИТ)</p>
                </div>
            </div>
            <div class="grid grid-cols-6 items-start mb-2">
                <p class="mr-4 col-span-2">Часы работы:</p>
                <div class="flex items-center col-span-4">
                    <p>10:00-20:00</p>
                </div>
            </div>
            <div class="grid grid-cols-6 items-start mb-2">
                <p class="mr-4 col-span-2">Сумма заказа:</p>
                <div class="flex items-center col-span-4">
                    <p>{{ calculateTotalPrice(order.productItems)?.toLocaleString("RU-ru") }} сум</p>
                </div>
            </div>
        </div>
        <div class="px-4 py-3 border-t border-gray-200" @click="handleAccordion">
            <h2 id="accordion-open-heading-1">
                <button type="button" class="flex items-center justify-between w-full font-medium text-left">
                    <span class="flex items-center">
                        {{ order.productItems?.length }} товар
                    </span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
        </div>
        <div :class="[activeAccordion ? 'block' : 'hidden']">
            <div 
            v-for="(item, index) in order.productItems"
            :key="index"
            class="p-5 border border-b-0 border-gray-200">
            <div class="grid gap-4 grid-cols-6">
                <div class="col-span-1">
                    <img :src="item.product?.url" width="120" height="80" alt="product image"/>
                </div>
                <div class="col-span-3">
                    <div>
                        <div class="grid grid-cols-2">
                            <p>Mahsulot nomi</p>
                            <p>{{ item.product?.name }}</p>
                        </div>
                        <div class="grid grid-cols-2">
                            <p>Количество</p>
                            <p>{{ item.amount?.toLocaleString("RU-ru") }}</p>
                        </div>
                        <div class="grid grid-cols-2">
                            <p>Стоимость</p>
                            <p>{{ item.product?.price?.toLocaleString('RU-ru') }} so'm</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-end justify-between col-span-2">
                    <p>{{ item.status }}</p>
                    <button class="text-[#6e00ff]" @click="handeWriteComment(item)">ОСТАВИТЬ ОТЗЫВ</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script setup>

const emit = defineEmits(['handleWriteComment'])

const activeAccordion = ref(false);

const handleAccordion = () => {
    activeAccordion.value = !activeAccordion.value
}

const calculateTotalPrice = (productItems) => {
    let totalPrice = 0;
    productItems.forEach((productItem) => {
        totalPrice += productItem.amount * productItem.product.price;
    });
    return totalPrice;
};

const handeWriteComment = (product) => {
    emit('handleWriteComment', product)
}

defineProps({
    order: {
        type:Object
    }
})
</script>