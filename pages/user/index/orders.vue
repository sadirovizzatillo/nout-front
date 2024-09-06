<template>
    <div>
        <div class="mb-4 border-b border-gray-200">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center">
                <li class="mr-2" v-for="(item, index) in tabList" :key="index" @click="handleTabClick(item)">
                    <button class="inline-block p-4 border-2 border-transparent rounded-t-lg">{{ item.title }}</button>
                </li>
            </ul>
        </div>
        <div>
            <TheOrderCard 
            v-for="(order, index) in purchasedProducts" 
            :key="index" 
            :order="order" 
            @handle-write-comment="handleWriteComment"
            v-if="activeTab === 'all-orders'"
            />
            <div v-if="activeTab === 'unfinished'"><TheEmptyCard /></div>
            <div v-if="activeTab === 'current'"><TheEmptyCard /></div>
        </div>
    </div>
    
    
    <TheModal 
    @handle-modal-close="handleCloseModal" 
    :class="[isCommentModal ? 'block' : 'hidden']"
    @handle-send-comment="handleSendComment"
    />
</template>

<script setup>
import { useToast } from "@/stores/toast"

const router = useRouter();
const purchasedProducts = ref(null);
const productId = ref(null);
const isCommentModal = ref(false);
const activeTab = ref('all-orders');
const tabList = reactive([
{
    name:"all-orders",
    title:"Все заказы"
},
{
    name:"unfinished",
    title:"Неоплаченные"
},
{
    name:"current",
    title:"Активные"
},
]);

const handleSendComment = async (comment) => {
    const { data } = await useAPIFetch("comment", {
        method:"POST",
        body: {
            text: comment,
            senderId: 1,
            productId: productId.value,
            rate: 4
        }
    })
    console.log(data.value);
    if(data.value?.success){
        useToast().setToast({
            type: "success",
            message:"Mahsulotga izoh qoldirildi."
        });
        isCommentModal.value = false;
        productId.value = null;
    }
}

const getUserPurchasedProducts = async () => {
    const { data: purchasedProduct } = await useAPIFetch(`purchased-product/user/${1}`, {
        method:"GET"
    })
    purchasedProducts.value = purchasedProduct.value?.data;
}

const handleCloseModal = () => {
    isCommentModal.value = !isCommentModal.value;
}

const handleWriteComment = (product) => {
    productId.value = product?.product?.id;
    isCommentModal.value = true;
}

const userOrders = reactive([
{
    id: 7700944,
    price: 69000,
    delivery:{
        address:"г. Ташкент, Юнусабадский район, улица Богишамол, дом 3 (ТУИТ)",
    },  
    orderStatus:{
        status:"Выдан покупателю"
    },
    orderItems: [
    {
        id:1,
        count:2,
        title:"Микрофон петличка XO-MKF01, для смартфона, планшета, jack 3.5 мм, 2 м",
        schedule:"10:00-20:00",
        purchasePrice:69000,
        status:"Выдан покупателю"
    },
    {
        id:2,
        count:7,
        title:"Микрофон петличка XO-MKF01, для смартфона, планшета, jack 3.5 мм, 2 м",
        schedule:"10:00-20:00",
        purchasePrice:436000,
        status:"Выдан покупателю"
    }
    ]
},
{
    id: 3394012,
    price: 1637000,
    delivery:{
        address:"г. Ташкент, Юнусабадский район, улица Богишамол, дом 3 (ТУИТ)",
    },  
    orderStatus:{
        status:"Выдан покупателю"
    },
    orderItems: [
    {
        id:1,
        count:2,
        title:"Микрофон петличка XO-MKF01, для смартфона, планшета, jack 3.5 мм, 2 м",
        schedule:"10:00-20:00",
        purchasePrice:69000,
        status:"Выдан покупателю"
    },
    {
        id:2,
        count:7,
        title:"Микрофон петличка XO-MKF01, для смартфона, планшета, jack 3.5 мм, 2 м",
        schedule:"10:00-20:00",
        purchasePrice:436000,
        status:"Выдан покупателю"
    },
    {
        id:3,
        count:3,
        title:"Микрофон петличка XO-MKF01, для смартфона, планшета, jack 3.5 мм, 2 м",
        schedule:"10:00-20:00",
        purchasePrice:436000,
        status:"Выдан покупателю"
    }
    ]
}
])

const handleTabClick = (tab) => {
    activeTab.value = tab.name;
    
    router.push({ name: router.currentRoute.value.name, query: { filter: tab?.name } })   
}


getUserPurchasedProducts()

</script>