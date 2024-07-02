import {ref, watch,onMounted, computed} from 'vue'
import { defineStore } from "pinia";
import { useBebidasStore } from './bebidas';
import { useModalStore } from './modal';
import { useNotificacionStores } from './notificacion';



export const useFavoritosStore = defineStore('favoritos',()=>{
    const bebida= useBebidasStore()
    const favoritos=ref([])
    const modal = useModalStore()
    const notificacion = useNotificacionStores()

    watch(favoritos,()=>{
        saveLocalStorage()
    },
    {
        deep:true
    })

    onMounted(()=>{
        favoritos.value = JSON.parse(localStorage.getItem("favoritos"))?? []
           // Valida si hay favoritos en localStorage
           
        
    })

    const existenFavoritos= computed(()=>{
        return favoritos.value.length == 0
    })
    function saveLocalStorage(){
        localStorage.setItem("favoritos",JSON.stringify(favoritos.value))
    }

    function existeDuplicado(id){
        const existeFavorito = JSON.parse(localStorage.getItem("favoritos"))??[];
        return existeFavorito.some(favorito => favorito.idDrink==id)
    }
    function eliminarFAvorito(){
        favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebida.ingredientes.idDrink)
        notificacion.muestra= true
        notificacion.exito= true
        notificacion.texto= "Se elimino de favoritos"
        
    }
    
    function handleFavoritos(){
        if(existeDuplicado(bebida.ingredientes.idDrink)){
            eliminarFAvorito()
            
            
        }else{
            favoritos.value.push(bebida.ingredientes)
            notificacion.exito= true
            notificacion.muestra= true
            notificacion.texto= "Se agrego a favoritos"
            
        }
        modal.handleSubmit() 
        setTimeout(()=>{
            notificacion.exito= false
            notificacion.muestra= false
            notificacion.texto= ""
        },3000)
    }

    return{
        handleFavoritos,
        favoritos,
        existeDuplicado,
        existenFavoritos
    }
})