<script setup>
import BebidasItem from "../components/bebidas-item.vue"
import { useBebidasStore } from '../stores/bebidas.js'

const bebidas=useBebidasStore()
console.log(bebidas)


</script>

<template>
    <h1 class="text-3xl text-left ml-10 mt-10 font-semibold ">Recetas</h1>
<div class=" mx-auto  space-x-7 space-y-7 font-bold  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">


    <BebidasItem 
    
v-for="receta in bebidas.recetas"
:key="receta.strDrink"
:receta="receta"
/>


</div>
</template>

<style lang="scss" scoped>

</style>