<template>
    <div class="flex sm:flex-col md:flex-row md:justify-between lg:justify-between items-start gap-8 md:gap-5">
        <div class="sm:w-full md:w-[60%] lg:w-[60%]">
            <div class="flex gap-8  lg:flex-row sm:flex-col md:flex-col">
                <div class="sm:w-full lg:w-[40%]">
                    <img :src="product.data.url" :alt="product.data.name">
                </div>
                <div class="sm:w-full lg:w-[60%]">
                    <h3 class="text-2xl">{{ products.name }}</h3>
                    <div class="flex">
                        <div class="flex items-center space-x-1 mr-[36px]">
                            <div v-for="item in 4" :key="item">
                                <IconsIconRate />
                            </div>
                            <p>4.8</p>
                        </div>
                        <p>Sold :  {{ products.count }}</p>
                    </div>
                    <div class="mb-[24px]">
                        <p class="text-[#656565]">{{ products.description }}</p>
                    </div>
                    
                    <div>
                        <div class="flex flex-col mb-[18px]">
                            <div class="flex items-center mr-[25px] mb-[12px]">
                                <h4 class="font-bold text-md mr-[18px]">Processor :</h4>
                                <p class="text-sm">Ryzen 5-5500U</p>
                            </div>
                            <ul class="flex gap-[12px]">
                                <li>
                                    <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required>
                                    <label for="hosting-small" class="inline-flex text-sm items-center justify-between py-2 px-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">                           
                                        Ryzen 5-5600U
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer">
                                    <label for="hosting-big" class="inline-flex text-sm items-center justify-between py-2 px-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                        Ryzen 5-5600U
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-col mb-[18px]">
                            <div class="flex items-center mr-[25px] mb-[12px]">
                                <h4 class="font-bold text-md mr-[18px]">RAM :</h4>
                                <p class="text-sm">DDR4 8GB</p>
                            </div>
                            <ul class="flex gap-[12px]">
                                <li>
                                    <input type="radio" id="DDR48GB" name="RAM" value="8GB" class="hidden peer" required>
                                    <label for="DDR48GB" class="inline-flex text-sm items-center justify-between py-2 px-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">                           
                                        DDR4 8GB
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="DDR416GB" name="RAM" value="DDR4" class="hidden peer">
                                    <label for="DDR416GB" class="inline-flex text-sm items-center justify-between py-2 px-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                        DDR4 16GB
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="16GB" name="RAM" value="DDR5" class="hidden peer">
                                    <label for="16GB" class="inline-flex text-sm items-center justify-between py-2 px-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                        16GB
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex items-center mr-[25px] mb-[12px]">
                                <h4 class="font-bold text-md mr-[18px]">GPU :</h4>
                                <p class="text-sm">RTX 3060 4GB</p>
                            </div>
                            <ul class="flex gap-[12px]">
                                <li>
                                    <input type="radio" id="4GB" name="GPU" value="4GB" class="hidden peer" required>
                                    <label for="4GB" class="inline-flex text-sm items-center justify-between py-2 px-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">                           
                                        RTX 3060 4GB
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="2GB" name="GPU" value="2GB" class="hidden peer">
                                    <label for="2GB" class="inline-flex text-sm items-center justify-between py-2 px-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                        Ryzen Vega 8 Pro 2GB
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="DDR516GB" name="GPU" value="DDR516GB" class="hidden peer">
                                    <label for="DDR516GB" class="inline-flex text-sm items-center justify-between py-2 px-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                        DDR5 - 16GB
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="mb-4 border-b border-gray-200">
                    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li v-for="(tab, index) in tabs" :key="index" class="mr-2" role="presentation">
                            <button class="inline-block p-4 border-b-2 rounded-t-lg" :class="[activeTab === tab.key ? 'border-b-indigo-500' : '']" type="button" @click="handleTabClick(tab.key)">{{ tab.name }}</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <div v-if="activeTab === 'config'">
                        <p class="mb-4">Here are the configurations of this laptop. If you want to know all the information about this laptop, please click here</p>
                        <div class="flex flex-col items-start">
                            <div>
                                <h4 class="text-xl mb-2">Display</h4>
                                <ul class="flex flex-col">
                                    <li v-for="config in 4" :key="config" class="text-[#585858]">
                                        <p class="mr-2">Frame frequency </p>
                                        <p>-----------------------------</p>
                                        <p class="ml-2">120 Hz</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div v-if="activeTab === 'feedback'">
                        <div class="flex gap-[40px] mb-8">
                            <div class="flex flex-col w-[45%]">
                                <h3 class="text-xl mb-4">Total Reviews</h3>
                                <div class="flex items-start w-full">
                                    <div class="p-4 mr-6">
                                        <p class="text-5xl mb-2">4.8</p>
                                        <div class="flex mb-2">
                                            <IconsIconRate v-for="item in 4" :key="item"/>
                                        </div>
                                        <p>{{ products?.comments.length }} reviews</p>
                                    </div>
                                    <div class="flex flex-col flex-grow">
                                        <div class="flex flex-grow items-center">
                                            <p class="mr-3">3</p>
                                            <div class="bg-gray-200 flex-grow rounded-full h-2.5">
                                                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
                                            </div>
                                        </div>
                                        <div class="flex flex-grow items-center">
                                            <p class="mr-3">4.8</p>
                                            <div class="bg-gray-200 flex-grow rounded-full h-2.5">
                                                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 95%"></div>
                                            </div>
                                        </div>
                                        <div class="flex flex-grow items-center">
                                            <p class="mr-3">3.7</p>
                                            <div class="bg-gray-200 flex-grow rounded-full h-2.5">
                                                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 70%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[65%]">
                                <h3 class="text-xl mb-4">Photos</h3>
                                <div class="grid gap-3 grid-cols-3">
                                    <img src="../../assets/images/product1.png" alt="product">
                                    <img src="../../assets/images/product2.png" alt="product">
                                    <img src="../../assets/images/product2.png" alt="product">
                                    <img src="../../assets/images/product2.png" alt="product">
                                    <img src="../../assets/images/product2.png" alt="product">
                                    <img src="../../assets/images/product2.png" alt="product">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-6">
                            <h3 class="text-lg">Feedbacks</h3>
                            <div class="flex flex-col mb-16" v-for="comment in products?.comments" :key="comment.id">
                                <header class="flex mb-4 justify-between">
                                    <div class="flex">
                                        <img class="mr-3" src="../../assets/images/comment-img.png" alt="comment img" width="40" height="40">
                                        <div class="flex">
                                            <div class="flex flex-col">
                                                <h5 class="mb-1">{{ comment.user?.name }} {{ comment.user?.surname}}</h5>
                                                <div class="flex">
                                                    <IconsIconRate v-for="item in comment.rate" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>{{ new Date(comment.updatedAt).toLocaleDateString() }}</p>
                                </header>
                                <div>
                                    <h3 class="text-xl mb-1">Dont think. Just buy it !</h3>
                                    <p class="text-[#292828]">{{ comment.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="activeTab === 'overview'">
                        <div>
                            <p class="text-[#292828]">Whether at work or play, ASUS VivoBook 15 is the compact laptop that immerses you in whatever you set out to do. Its new frameless four-sided NanoEdge display boasts an ultraslim 5.7mm bezel, giving an amazing 88% screen-to-body ratio for supremely immersive visuals. The new ErgoLift hinge design also tilts the keyboard up for more comfortable typing. VivoBook 15 is powered by up to the latest Intel® Core™ i7 processor with discrete NVIDIA® graphics and dual storage drives to help you get things done with the least amount of fuss. What's more, it's available in four unique finishes to suit your style.</p>
                            <div class="grid gap-4 grid-cols-3">
                                <img src="../../assets/images/overview-product.png" alt="product">
                                <img src="../../assets/images/overview-product.png" alt="product">
                                <img src="../../assets/images/overview-product.png" alt="product">
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <h4 class="text-2xl mb-4">When less means more</h4>
                            <p>The new frameless four-sided NanoEdge display keeps dimensions down to a minimum, giving VivoBook 15 a footprint that's appreciably smaller than its predecessor. It takes up less space on your desk, leaving more room for you.</p>
                            <div class="grid gap-4 grid-cols-3">
                                <img src="../../assets/images/overview-product.png" alt="product">
                                <img src="../../assets/images/overview-product.png" alt="product">
                                <img src="../../assets/images/overview-product.png" alt="product">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="single-product__sidebar flex flex-col  sm:items-end sm:flex sm:w-full sm:justify-around md:w-[30%] lg:w-[30%]">
            <div class="single-product__sidebar-items rounded p-[25px] mb-[28px]">
                <div>
                    <div class="flex items-baseline mb-[8px]">
                        <h4>930$</h4>
                        <p class="text-sm text-slate-300">1100$</p>
                    </div>
                    <div class="mb-[21px]">
                        <p>$5.10 delivery March 17 - April 3.</p>
                        <p class="text-[#3E4AFF]">See other plans..</p>
                    </div>
                    <div class="mb-[28px]">
                        <p class="text-[#136A0D]">Available at the moment</p>
                        <p>On sail 40 pcs.</p>
                    </div>
                    <div class="mb-[28px]">
                        <TheInputCount />
                    </div>
                    <div class="flex flex-col">
                        <button class="bg-[#3E4AFF] border-2 text-[#fff] rounded p-3 mb-[16px] hover:bg-[#fff] hover:text-[#3E4AFF] hover:border-[#3E4AFF]">Add to card</button>
                        <button class="border-2 text-[#3E4AFF] border-[#3E4AFF] rounded p-3">Compare product</button>
                    </div>
                </div>
            </div>
            <div class="single-product__sidebar-items rounded p-[25px]">
                <p class="mb-[18px] text-xl">Available delivery plans</p>
                <div class="flex flex-col mb-[18px]">
                    <p class="text-lg">Lappc.uz Delivery Service</p>
                    <p class="text-[#656565]">Delivery takes 10 to 15 days</p>
                    <p>Free</p>
                </div>
                <div class="flex flex-col mb-[18px]">
                    <p class="text-lg">FedEx Delivery Plan</p>
                    <p class="text-[#656565]">Delivery takes 7 to 9 days</p>
                    <p>From $5.10 to $7.5 </p>
                </div>
                <div class="flex flex-col">
                    <p class="text-lg">NOK Delivery Service</p>
                    <p class="text-[#656565]">Delivery takes 1 to 3 days</p>
                    <p>From $10 to $13</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const activeTab = ref('config');
const router = useRouter();
const products = ref(null);
const { data: product } = await useAPIFetch(`product/${router.currentRoute.value.params.id}`, {
    method:"GET",
})
products.value = product.value.data


const tabs = [
{
    id:1,
    name:"Laptop configurations",
    key:"config"
},
{
    id:2,
    name:"Customers feedbacks",
    key:"feedback"
},
{
    id:3,
    name:"Laptop overview",
    key:"overview"
}
];

// const comments = ref([
// {
//     id:1,
//     username:"Izzatillo",
//     surname:"Sadirov",
//     date:"02-09-2023",
//     title:"Dont think. Just buy it !",
//     rate:4,
//     comment:"I bought this laptop in October 2021 with the prices that were then. I took a version with 5 5600 and 1650 for 25k at a discount. According to the reviews, I realized that most gaming laptops in this price category are either too hot or do not fit the characteristics and are not available. Here I’ll say right away that they reject purchases with the Intel version of the processor, since this is just a hellish stove of Lucifer in your room. As for the version with RTX, such a coolness suits her so-so. The most optimal cooling for this is the version with ryazan and 1650.",
// },
// {
//     id:2,
//     username:"Noel",
//     surname:"Silva",
//     date:"02-09-2023",
//     title:"Not bad. But price is a litl bit high or this configurations.",
//     rate:2,
//     comment:" I realized that most gaming laptops in this price category are either too hot or do not fit the characteristics and are not available. Here I’ll say right away that they reject purchases with the Intel version of the processor, since this is just a hellish stove of Lucifer in your room. As for the version with RTX, such a coolness suits her so-so. The most optimal cooling for this is the version with ryazan and 1650.",
// }
// ])

const handleTabClick = (key) => {
    activeTab.value = key
}
</script>

<style>
.single-product__sidebar-items{
    border: 1px solid #F9F9F9;
    box-shadow: 0px 4px 15px -6px rgba(0, 0, 0, 0.25);
}
</style>