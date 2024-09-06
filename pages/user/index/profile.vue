<template>
    <form class="border-2 p-4">
        <h2 class="mb-3">Мои данные</h2>
        <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Имя</label>
                <input v-model="form.name" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Имя" required>
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">Фамилия</label>
                <input v-model="form.surname" type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Фамилия" required>
            </div>
            <div>
                <label for="company" class="block mb-2 text-sm font-medium text-gray-900">Отчество</label>
                <input v-model="form.fatherName" type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Отчество">
            </div>  
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Электронная почта</label>
                <input v-model="form.email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com">
            </div>
            <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Номер телефона</label>
                <input v-model="form.phone" type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="99-123-45-67" maxlength="9" pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required>
            </div>
        </div>
        <div class="mb-6 relative max-w-sm">
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900">Дата рождения</label>
            <input v-model="form.date" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Select date">
        </div> 
        <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
                <input id="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required>
            </div>
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900">I agree with the <a href="#" class="text-blue-600 hover:underline">terms and conditions</a>.</label>
        </div>
        <div class="flex justify-between">
            <button @click="handleLogOut" class="text-black hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Log out</button>
            <button @click="handleSubmitUser" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </div>
    </form>
</template>

<script setup>
import { useToast } from "@/stores/toast"
const userId = ref(1);

const form = reactive({
    name: null,
    surname: null,
    fatherName: null,
    email: null,
    phone: null,
    date: null,
})

const getOneUser = async () => {
    const { data } = await useAPIFetch(`user/${userId.value}`, {
        method: "GET",
    });
    
    if(data.value.success){
        for(let key in form){
            form[key] = data.value.data[key];
        }
    }
}

const handleSubmitUser = async () => {
    const { data } = await useAPIFetch(`user/${userId.value}`, {
        method: "PUT",
        body: {
            ...form,
            id:userId.value,
            password: "a-z123456789"
        }
    });
}

const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
}

getOneUser();
</script>