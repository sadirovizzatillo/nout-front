<template>
    <div class="p-5 border border-b-0 border-gray-200">
        <div class="grid gap-4 grid-cols-6">
            <div class="col-span-1">
                <img :src="product.url" width="120" height="80" alt="product image"/>
            </div>
            <div class="col-span-5">
                <div>
                    <div class="mb-4">
                        <p>{{ product?.name }}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <div>
                            <p>Количество</p>
                            <p>{{ product.amount?.toLocaleString("RU-ru") }}</p>
                        </div>
                        <div>
                            <p>{{ product?.price?.toLocaleString('RU-ru') }} so'm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

defineProps({
    product:{
        type:[Object, Array]
    },
    // hasComment:{
        //     type: Boolean,
        //     default: true
        // }
    })
</script>