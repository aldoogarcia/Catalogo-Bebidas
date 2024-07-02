import {ref,computed} from 'vue'
import { defineStore } from "pinia";
import { useFavoritosStore } from './favoritos';
import { useBebidasStore } from './bebidas';


export const useModalStore = defineStore('Modal', ()=>{
    const fav = useFavoritosStore()
    const bebid = useBebidasStore()
    const modal=ref(false)

    function handleSubmit(){
        modal.value=!modal.value
    }

    const textBoton = computed(()=>{
        return fav.existeDuplicado(bebid.ingredientes.idDrink) ? "Eliminar de Favoritos" : "Agregar a favoritos"
    })


    return{
        modal,
        handleSubmit,
        textBoton
    }
})