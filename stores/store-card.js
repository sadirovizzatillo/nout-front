import { defineStore } from "pinia";

export const useStoreCard = defineStore('store-card', {
    state:() => ({
        savedProducts:[],
        productItems:[],
        userId: 1,
        tags: [],
        checkboxValues: [],
        checkbox: []
    }),
    actions:{
        saveProduct(product){
            const hasProduct = this.savedProducts.find(p => p.id === product.id);
            if(hasProduct !== undefined){
                this.savedProducts.forEach(items => {
                    if(items.id === product.id){
                        items.amount += 1
                    }
                })
            }else{
                this.productItems.push({
                    productId: product?.id,
                    amount: 1,
                    price: product?.price
                })
                this.savedProducts.push(product);
            }
        },
        countChange(productId, count){
            const product = this.productItems?.findIndex((p) => p.productId === productId);
            this.productItems[product].amount = count;
        },
        removeProductFromCard(id){
            const productIndex = this.savedProducts.indexOf(product => product.id === id);
            const productSavedIndex = this.productItems.indexOf(product => product.productId === id);
            if(productIndex){
                this.savedProducts.splice(productIndex, 1)
            }
            if(productSavedIndex){
                this.productItems.splice(productSavedIndex, 1)
            }
        },
        increment(productId, count){
            const product = this.productItems?.findIndex((p) => p.productId === productId);
            this.productItems[product].amount = count;
        },
        decrement(productId, count){
            const product = this.productItems?.findIndex((p) => p.productId === productId);
            this.productItems[product].amount = count
        },
        addCheckbox(attr){
            const checkboxIndex = this.checkboxValues.find((checkbox) => checkbox?.id === attr?.id);
            if(checkboxIndex){
                this.checkboxValues.splice(checkboxIndex, 1);
                return
            }
            this.checkboxValues.push({
                name: attr?.name,
                id: attr?.id
            })
        },
        addTag(tag){
            const tagIndex = this.tags.find(t => t.id === tag.id);
            if(!tagIndex){
                this.tags.push(tag);
            }
        }
    }
})