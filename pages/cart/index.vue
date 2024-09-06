<template>
    <div>
        <div class="flex items-center">
            <h3 class="mr-2">Ваша корзина</h3>
            <p class="text-gray-400">{{ storedProducts?.length }} товар</p>
        </div>
        <div class="flex py-4 columns-2 gap-4 items-start">
            <div class="w-[70%] flex flex-col gap-4">
                <div class="flex flex-col gap-3">
                    <TheCardCart 
                    v-if="storedProducts?.length !== 0"
                    v-for="(product, index) in storedProducts" 
                    :key="index" 
                    :product="product" 
                    @handle-delete-product="handleRemoveStoreProduct"
                    />
                    <TheEmptyCard v-else/>
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
                    <button @click="handleOpenDialog" :disabled="!storedProducts?.length" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-slate-400">Перейти к оформлению</button>
                </div>
            </div>        
        </div>
    </div>
    
    <div v-if="isSmsDialog" class="fixed top-[10%] left-0 right-0 z-50 w-full p-4 bg-slate-600 bg-opacity-70 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full">
        <div class="relative w-full my-auto mx-auto max-w-xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t">
                    <h3 class="text-xl font-semibold text-gray-900">
                    </h3>
                    <button 
                    @click="handleModalClose"
                    type="button" 
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div v-if="nextStepper" class="p-6 space-y-6">
                <div>
                    <h3 class="text-lg font-bold mb-4">Kodni kiriting</h3>
                </div>
                <div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Номер телефона</label>
                        <input v-model="verificationCode" type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="99-123-45-67" maxlength="9" pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required>
                    </div>
                </div>
                <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">Anonim qolish</label>
                </div>
            </div>
            
            <div v-else class="p-6 space-y-6">
                <div>
                    <h3 class="text-lg font-bold mb-4">Введите номер телефона</h3>
                    <p class="text-md">Отправим смс с кодом подтверждения</p>
                </div>
                <div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Номер телефона</label>
                        <input v-model="form.phone" type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="99-123-45-67" maxlength="9" pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required>
                    </div>
                </div>
                <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">Anonim qolish</label>
                </div>
            </div>
            
            <!-- Modal footer -->
            <div class="w-full border-t p-6 border-gray-200 rounded-b">
                <button @click="handleSendPhone" data-modal-hide="defaultModal" type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tayyor</button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import TheCardCart from "@/components/cart/TheCartCard.vue"
import TheEmptyCard from "@/components/TheEmptyCard.vue"
import { useStoreCard } from '@/stores/store-card';
import { useToast } from "@/stores/toast"

const router = useRouter();
const isSmsDialog = ref(false);
const nextStepper = ref(false);
const verificationCode = ref(null);
const form = reactive({
    name: null,
    surname: null,
    fatherName: null,
    email: null,
    phone: null,
    date: null,
})

// const canSend = computed(() => {
    //     return [form.name, form.surname, form.phone].includes(null) || [form.name, form.surname, form.phone].includes("")
    // })
    
    definePageMeta({
        layout: "default",
    });
    
    
    
    const handleOpenDialog = () => {
        router.push("/checkout");
        // isSmsDialog.value = true;
    }

    const handleSendPhone = () => {
        if(nextStepper.value){
            verifyPhone()
            // handlePurchaseProducts()
        }else{
            createUser()
        }
    }
    
    const verifyPhone = async () => {
        const { data } = await useAPIFetch("user/phone/verify", {
            method:"POST",
            body: {
                verificationCode: verificationCode.value
            }
        }); 
        
        if(data.value.success){
            isSmsDialog.value = false;
        }
    }
    
    const createUser = async () => {
        const { data } = await useAPIFetch("user", {
            method:"POST",
            body: form
        }); 
        
        if(data.value.success){
            nextStepper.value = true;
            verificationCode.value = data.value.data;
            useToast().setToast({
                type: "success",
                message:`Kod: ${data.value.data}. Bu xabar sms bo'lib keldi deb hisoblang:) `
            })
        }
    }
    
    const handlePurchaseProducts = async () => {
        const form = useStoreCard().productItems?.map((item) => {
            return {
                productId: item?.productId,
                amount: item?.amount
            }
        });
        
        const { data: products } = await useAPIFetch("purchased-product", {
            method:"POST",
            body: { userId: 1,  productItems:  [...form] }
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
    
    const handleModalClose = () => {
        isSmsDialog.value = false;
    }
    
    const totalSum = computed(() => {
        if (useStoreCard().productItems?.length !== 0) {
            return useStoreCard().productItems.reduce((total, product) => total += (product?.amount * product?.price), 0)
        } else {
            return 0
        }
    })
    
    const storedProducts = computed(() => {
        return useStoreCard().savedProducts
    })
    
    const handleRemoveStoreProduct = (id) => {
        useStoreCard().removeProductFromCard(id)
    }
    
</script>