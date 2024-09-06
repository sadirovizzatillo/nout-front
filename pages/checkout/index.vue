<template>
    <div>
        <div>
            <h3>Оформление заказа</h3>
        </div>
        <div class="flex items-baseline justify-between gap-4">
            <div class="w-[70%] max-w-full bg-white border mb-4 border-gray-200 rounded-lg shadow"> 
                <form class="border-2 p-4" v-if="storedProducts?.length !== 0">
                    <h2 class="mb-3">Мои данные</h2>
                    <div class="max-w-[50%] grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <BaseInput 
                            label="Имя"
                            v-model="form.name"
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div>
                            <BaseInput 
                            label="Фамилия"
                            v-model="form.surname"
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div>
                            <BaseInput 
                            label="Номер телефона"
                            v-model="form.phone"
                            type="tel"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                    </div>
                </form>
                <div class="px-4 py-3 border-t border-gray-200" @click="handleAccordion">
                    <h2 id="accordion-open-heading-1">
                        <button type="button" class="flex items-center justify-between w-full font-medium text-left">
                            <span class="flex items-center">
                                {{ storedProducts?.length }} товар
                            </span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                            </svg>
                        </button>
                    </h2>
                </div>
                <div :class="[activeAccordion ? 'block' : 'hidden']">
                    <ThePurchaseProductCard :product="product" v-for="(product, index) in storedProducts" :key="index"/>
                </div>
            </div>
            <div class="w-[30%] bg-white border border-gray-200 rounded-lg shadow">
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Ваш заказ</h5>
                    <div class="flex justify-between items-center mb-3">
                        <p class="font-normal text-gray-700">Товары ({{ storedProducts?.length }})</p>
                        <p class="font-normal text-gray-700">{{ totalSum?.toLocaleString("RU-ru") }} сум</p>
                    </div>
                    <div class="w-full mb-3">
                        <span class="w-full flex justify-center border border-[#7000ff] text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Доставка 26 октября (Сегодня)</span>
                    </div>
                    <div class="flex justify-between items-start mb-4">
                        <p class="font-normal text-gray-700">Итого</p>
                        <div class="flex flex-col items-end">
                            <p class="font-bold  text-lg text-gray-700">{{ totalSum?.toLocaleString("RU-ru") }} сум</p>
                            <p class="text-xs text-green-500">Вы экономите: 4 288 000 сум</p>
                        </div>
                    </div>
                    <button 
                    @click="handlePurchaseProducts" 
                    :disabled="!storedProducts?.length" 
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-slate-400">
                    Sotib olish
                </button>
            </div>
        </div>
    </div>
</div>
</template>


<script setup>
import { useStoreCard } from '@/stores/store-card';
import ThePurchaseProductCard from "@/components/Cart/ThePurchaseProductCard.vue";
import BaseInput from "@/components/BaseComponents/BaseInput.vue";
import { useToast } from "@/stores/toast"
const router = useRouter();

definePageMeta({
    layout: "layout-checkout",
});

// const isSmsDialog = ref(false);
const activeAccordion = ref(false);
// const userId = ref(null);
// const nextStepper = ref(false);
// const verificationCode = ref(null);

const handleAccordion = () => {
    activeAccordion.value = !activeAccordion.value
}

const form = reactive({
    name: null,
    surname: null,
    fatherName: null,
    email: null,
    phone: null,
    date: null,
});

const totalSum = computed(() => {
    if (useStoreCard().productItems?.length !== 0) {
        return useStoreCard().productItems.reduce((total, product) => total += (product?.amount * product?.price), 0)
    } else {
        return 0
    }
});

// const handleSendPhone = () => {
//     if(nextStepper.value){
//         verifyPhone()
//         // handlePurchaseProducts()
//     }else{
//         createUser()
//     }
// }

// const handleOpenDialog = () => {
//     isSmsDialog.value = true;
// }

// const verifyPhone = async () => {
//     const { data } = await useAPIFetch("user/phone/verify", {
//         method:"POST",
//         body: {
//             verificationCode: verificationCode.value
//         }
//     }); 
    
//     if(data.value.success){
//         isSmsDialog.value = false;
//         userId.value = data.value.data?.id
//         localStorage.setItem('noutToken', data.value.token);
//     }
// }

// const createUser = async () => {
//     const { data } = await useAPIFetch("user", {
//         method:"POST",
//         body: form
//     }); 
    
//     if(data.value.success){
//         nextStepper.value = true;
//         verificationCode.value = data.value.data;
//         useToast().setToast({
//             type: "success",
//             message:`Kod: ${data.value.data}. Bu xabar sms bo'lib keldi deb hisoblang:) `
//         })
//     }
// }

// const getOneUser = async () => {
//     const { data } = await useAPIFetch(`user/${userId.value}`, {
//         method: "GET",
//     });
    
//     if(data.value.success){
//         for(let key in form){
//             form[key] = data.value.data[key];
//         }
//     }
// }

const handlePurchaseProducts = async () => {
    const form = useStoreCard().productItems?.map((item) => {
        return {
            productId: item?.productId,
            amount: item?.amount
        }
    });
    
    const { data: products } = await useAPIFetch("purchased-product", {
        method:"POST",
        body: { 
            userId: 1,  
            productItems:  [...form] 
        }
    }); 
    
    if(products.value?.success){
        useToast().setToast({
            type: "success",
            message:"Mahsulot sotib olindi."
        })
        router.push("/");
        useStoreCard().savedProducts = [];
        useStoreCard().productItems = [];
    }
}

const storedProducts = computed(() => {
    return useStoreCard().savedProducts
});
</script>