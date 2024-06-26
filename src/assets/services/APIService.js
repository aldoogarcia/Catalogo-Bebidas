import api from '../lib/axios'

export default {
    obtenerCategorias(){
        return api.get("/list.php?c=list")
    },
    buscarReceta({categoria,nombre}){
        return api.get(`/filter.php?c=${categoria}&i=${nombre}`)
    },
    buscarID(id){
        return api.get(`/lookup.php?i=${id}`)
    }
}