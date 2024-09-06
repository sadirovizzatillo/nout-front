import { defineStore } from "pinia";

export const useProduct = defineStore('product', {
    state:() => ({
        product:0
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