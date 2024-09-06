import { defineStore } from "pinia";

export const useToast = defineStore('toast', {
    state:() => ({
        active: false,
        message: null,
        type: 'error'
    }),
    actions:{
        setToast({type="", message=""}){
            this.active = true;
            this.type = type;
            this.message = message;
            this.setToastTime();
        },
        cancelToast(){
            this.active = false;
        },
        setToastTime(){
            setTimeout(() => {
                this.active = false;
            }, 4000);
        }
    }
})