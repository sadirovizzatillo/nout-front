import { defineStore } from "pinia";

export const useCategories = defineStore('categories', {
    state:() => ({
        categories: null
    }),
    actions:{
        increment(){
            this.product++
        },
        decrement(){
            this.product--
        }
    }
})