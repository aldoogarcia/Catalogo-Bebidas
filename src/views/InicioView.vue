<script setup>
import BebidasItem from "../components/bebidas-item.vue"
import { useBebidasStore } from '../stores/bebidas.js'

const bebidas=useBebidasStore()



</script>

<template>
    <h1 class="text-3xl text-left ml-10 mt-10 font-semibold ">Recetas</h1>

<div class=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 gap-10 container">
    <BebidasItem 
    
v-for="receta in bebidas.recetas"
:key="receta.idDrink"
:receta="receta"
/>


</div>
</template>

<style lang="scss" scoped>

</style>