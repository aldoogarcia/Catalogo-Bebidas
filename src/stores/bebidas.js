import {ref,onMounted,reactive} from 'vue'
import { useModalStore } from './modal';
import { defineStore } from "pinia";
import APIService from '@/assets/services/APIService';



export const useBebidasStore = defineStore('benidas',()=>{
    const moda = useModalStore()
    const categorias=ref([])
    const recetas=ref([])
    const ingredientes=ref({})
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

    async function obtenerReceta(id){
         const {data:{drinks}} = await APIService.buscarID(id)
         ingredientes.value=drinks[0]
        //  console.log(drinks[0])

         moda.handleSubmit()
    }

    return{
        categorias,
        busqueda,
        obtenerRecetas,
        recetas,
        obtenerReceta,
        ingredientes
    }
})