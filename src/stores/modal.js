import {ref} from 'vue'
import { defineStore } from "pinia";


export const useModalStore = defineStore('Modal', ()=>{
    const modal=ref(false)

    function handleSubmit(){
        modal.value=!modal.value
    }
    return{
        modal,
        handleSubmit
    }
})