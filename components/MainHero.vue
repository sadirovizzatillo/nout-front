<template>
    <div class="main-hero w-full flex gap-8 items-center mb-8">
        <div class="main-hero__left w-[50%] bg-gray-400 h-[400px] flex flex-col justify-end bg-cover">
            <div class="flex flex-col px-6 py-10 text-white">
                <div class="flex flex-col mb-5">
                    <h2 class="text-2xl mb-1">MacBook  Pro M2</h2>
                    <p>Retina display</p>
                </div>
                <div class="flex justify-between items-center">
                    <div class="w-[206px] text-md">
                        <h4>Now its even faster than it looks</h4>
                    </div>
                    <div class="flex flex-col">
                        <p class="mb-2">From : 1250 $</p>
                        <button class="p-1 px-3 border rounded">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-hero__right w-[50%] bg-gray-400 h-[400px] flex flex-col justify-end bg-cover">
            <div class="flex flex-col px-6 py-10 text-white">
                <div class="flex flex-col mb-5">
                    <h2 class="text-2xl mb-1">Asus ZenBook 15</h2>
                    <p>Oled display</p>
                </div>
                <div class="flex justify-between items-center">
                    <div class="w-[206px] text-md">
                        <h4>Packs a large display in small body</h4>
                    </div>
                    <div class="flex flex-col">
                        <p class="mb-2">From : 1250 $</p>
                        <button class="p-1 px-3 border rounded">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
.main-hero{
    font-family: "OpenSans-Regular";
}

.main-hero__left{
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.86) 0%, rgba(0, 0, 0, 0.00) 100%), url('../assets/images/first-hero.png'), lightgray 50% / cover no-repeat;
}

.main-hero__right{
    background: linear-gradient(1deg, #000 0%, rgba(0, 0, 0, 0.00) 100%), url('../assets/images/second-hero.png'), lightgray 50% / cover no-repeat;}
</style>