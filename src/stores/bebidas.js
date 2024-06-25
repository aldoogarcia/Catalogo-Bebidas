import {ref,onMounted,reactive} from 'vue'
import { defineStore } from "pinia";
import APIService from '@/assets/services/APIService';


export const useBebidasStore = defineStore('benidas',()=>{
    const categorias=ref([])
    const recetas=ref([])
    const busqueda = reactive({
        nombre: '',
        categoria:''
    })

    onMounted(async function(){
        const {data: {drinks}} = await APIService.obtenerCategorias()
        categorias.value=drinks
        
        
    })

    async function obtenerRecetas(){
       const {data:{drinks}} = await APIService.buscarReceta(busqueda)
       recetas.value=drinks
    }

    return{
        categorias,
        busqueda,
        obtenerRecetas,
        recetas
    }
})