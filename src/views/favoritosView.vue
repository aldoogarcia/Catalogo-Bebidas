<script setup>
import BebidasItem from '@/components/bebidas-item.vue';
import { useFavoritosStore } from '@/stores/favoritos';

const fav = useFavoritosStore()

</script>

<template>
    
<h1 
class="container mx-auto font-extrabold text-6xl">
Favoritos</h1>
    <div class="text-center text-2xl mt-10 text-orange-400" 
    v-if="fav.existenFavoritos">
        <p>No Tienes Favoritos</p>
    </div>
    

    <div class="md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 gap-10 container">
    <BebidasItem 
    
v-for="receta in fav.favoritos"
:key="receta.idDrink"
:receta="receta"
/>


</div>
</template>

<style  scoped>

</style>