<template>
    <div class="main-header py-[16px]">
        <nuxt-link to="/">
            <IconLogo />
        </nuxt-link>
        <div class="sm:hidden md:hidden lg:flex items-center">
            <button class="border rounded flex items-center px-2 py-1 bg-[#3E6AFF] text-white mr-12" @click="handleCategoryBtnClick">
                <span class="mr-2 text-white text-sm">Categories</span>
                <IconCategory />
            </button>
            
            <div class="flex items-center">
                <input
                    name="search"
                v-model="productSearch" 
                @change="handleInputChange"
                class="border text-sm rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Find laptops, pc, tv’s and more.."
                >
                <button type="submit" class="top-0 right-0 p-2.5 px-4 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </div>
        </div>
        
        <ul class="header-features">
            <li class="header-features__item mr-6 cursor-pointer">
                <IconLike />
                <p class="ml-3 text-sm">Wishlist</p>
            </li>
            <li class="header-features__item mr-6 relative cursor-pointer" @mouseover="handleProductComponent" @click="handleClickCart">
                <IconCard />
                <p class="ml-3 text-sm">Cart</p>
                <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">{{ totalSavedProducts }}</span>
                
                <TheSavedProductCard v-if="isSavedProductModal && totalSavedProducts !== 0"/>
            </li>   
            <li class="header-features__item cursor-pointer" @click="(() => router.push({ name: 'user' }))">
                <IconProfile />
                <p class="ml-3 text-sm">Profile</p>
            </li>
        </ul>
    </div>
</template>


<script setup>
import IconLogo from "@/components/Icons/IconLogo.vue"
import IconCategory from "./Icons/IconCategory.vue";
import IconLike from "./Icons/IconLike.vue";
import IconProfile from "./Icons/IconProfile.vue";
import IconCard from "./Icons/IconCard.vue";
import { useStoreCard } from "~/stores/store-card";
const emit = defineEmits(['handleCategoryDrawer'])
const isSavedProductModal = ref(false);
const router = useRouter();
const productSearch = ref(null);
const products = ref([]);
const handleProductComponent = () => {
    isSavedProductModal.value = !isSavedProductModal.value;
}   

const hanleSearchProducts = async () => {
    const { data: productss } = await useAPIFetch(`product`, {
        method:"GET",
        params: {
            search: productSearch.value.toLowerCase()
        }
    })
    products.value = productss.value
}

const handleClickCart = () => {
    router.push({ name: "cart" })
}

const handleInputChange = () => {
    console.log(products.value?.data[0])
    router.push({ name: "category-id", params: { id: products.value?.data[0].categoryId } })
}

const debouncedFetchProducts = debounce(hanleSearchProducts, 300);

watch(productSearch, debouncedFetchProducts);

const totalSavedProducts = computed(() => {
    return useStoreCard().savedProducts.length
})

const handleCategoryBtnClick = () => {
    emit("handleCategoryDrawer");
}

</script>

<style scoped>
.main-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.main-header__main{
    display: flex;
    align-items: center;
}

.category-btn{
    display: flex !important;
    align-items: center !important;
}
</style>