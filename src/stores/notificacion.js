import { defineStore } from "pinia"
import { ref } from "vue"
export const useNotificacionStores=defineStore('notificacionStore',()=>{

    const muestra= ref(false)
    const error = ref(false)
    const exito= ref(false)
    const texto = ref("")

    return{
        error,
        exito,
        texto,
        muestra
    }
})