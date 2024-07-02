<script setup>
import BebidasItem from "../components/bebidas-item.vue"
import { useBebidasStore } from '../stores/bebidas.js'

const bebidas=useBebidasStore()



</script>

<template>
    <h1 class="container text-center mx-auto font-extrabold text-6xl">Recetas</h1>
    <br>

        <div class="text-center text-2xl mt-10 text-orange-400 mb-10" 
    v-if="bebidas.noRecetas">
        <p>No Hay Resultados intenta una busqueda</p>
    </div>

<div v-else class=" md:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 gap-10 container">
    <BebidasItem 
    
v-for="receta in bebidas.recetas"
:key="receta.idDrink"
:receta="receta"
/>


</div>
</template>

<style lang="scss" scoped>

</style>