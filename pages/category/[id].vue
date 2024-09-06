<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="col-span-3">
            <CategoryFilter 
            :filterData="attributes"
            @handle-attribute-change="handleAttributeChange"
            /> 
        </div>
        <div class="col-span-9">
            <div class="flex items-center justify-between mb-8">
                <h4 class="text-xl">Founded {{ productsList?.data?.length }} laptops</h4>
                <select 
                v-model="filterProducts"
                @change="handleFilterCategories"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg border-l-2 p-2">
                <option selected value="bestSeller">Ko'p sotilgan</option>
                <option value="expensive">Qimmatroq</option>
                <option value="cheap">Arzonroq</option>
                <option value="new">Yangi qo'shilgan</option>
            </select>
        </div>
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
                <span v-for="(tag, index) in tags" :key="index" class="flex items-center cursor-pointer bg-blue-100 text-blue-800 text-sm  font-medium mr-2 px-4 py-1 rounded-xl">
                    {{ tag.name }} 
                </span>
            </div>
            <div class="flex items-center">
                <button class="mr-4" :class="[productType === 'grid' ?  'text-[#656EFF]' : '']" @click="productType = 'grid'"><IconsIconGrid /></button>
                <button :class="[productType === 'list' ?  'text-[#656EFF]' : '']" @click="productType = 'list'"><IconsIconList /></button>
            </div>
        </div>
        <div>
            <div class="grid grid-cols-3 gap-6" v-if="productType === 'grid'">
                <TheProduct v-for="(product, index) in productsList?.data" :key="index" :product="product"/> 
            </div>
            <div v-if="productType === 'list'">
                <TheListProduct v-for="(product, index) in productsList?.data" :key="index" :product="product" />
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { useStoreCard } from '@/stores/store-card';

const productType = ref('grid');

const router = useRouter();
const filterProducts = ref("bestSeller");
const productsList = ref(null);
const attributes = ref(null);
const filterTypes = {
    bestSeller: "ASC",
    expensive: "DESC",
    cheap: "ASC",
    new: "ASC",
}

const categoryId = ref(router.currentRoute.value.params.id)

const tags = computed(() => {
    return useStoreCard().checkboxValues.map((tag => {
        return tag
    }))
})

const getProductById = async () => {
    const { data: productsById } = await useAPIFetch(`product/category/${categoryId.value}`, {
        method:"GET"
    })
    productsList.value = productsById.value
}

const getAttributes = async () => {
    const { data } = await useAPIFetch(`attribute/category/${categoryId.value}`, {
        method:"GET"
    });
    attributes.value = data.value?.data
}

const handleFilterCategories = async () => {
    const { data: sortedProducts } = await useAPIFetch(`product/category/${categoryId.value}`, {
        method:"GET",
        params: {
            sort: filterProducts.value,
            type: filterTypes[filterProducts.value]
        }
    })
    productsList.value = sortedProducts.value
}
 
const handleAttributeChange = async (attributes) => {
    if(attributes?.values?.length === 0){
        getProductById();
        router.replace({ query: null })
        return
    }
    const paramsObj = {};
    
    const param = attributes?.values?.map((item) => {
        return item?.id
    })
    if(attributes?.values){
        for(let i = 0; i < attributes?.values?.length; i++){
            paramsObj[attributes?.values[i]?.name] = attributes?.values[i]?.id;
        }
    }
    
    
    const { data: products } = await useAPIFetch(`attribute-product`, {
        method:"GET",
        params: param
    })
    productsList.value = products.value;
    router.push({ query:  { ...paramsObj } });
    }
    
    getProductById();
    getAttributes();
    
    const products = reactive([
    {
        id:1,
        title:"ProArt Studiobook 16 3D OLED (H7604)",
        price:1750000,
        discountPrice:1500000
    },
    {
        id:2,
        title:"ProArt Studiobook 16 3D OLED (H7604)",
        price:4750000,
        discountPrice:3900000
    },
    {
        id:3,
        title:"ProArt Studiobook 16 3D OLED (H7604)",
        price:1750000,
        discountPrice:1500000
    }
    ])
</script>