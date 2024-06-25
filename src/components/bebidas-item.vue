<script setup>
    defineProps({
        receta:{
            type:Object
        }
    })
        
</script>


<template class="space-y-4">
    <div class="border shadow-2xl">
        <div class="overflow-hidden">
            <img 
            class="hover:scale-125 transition-transform"
            :src="receta.strDrinkThumb" alt="">
        </div>

        <div class="p-5 text-center font-extrabold border">
            <h2 class="truncate text-lg mb-3">{{ receta.strDrink }}</h2>
            <button class="block text-center py-1 px-3 w-full text-white rounded-xl bg-orange-400 hover:bg-orange-600">Ver Receta</button>
        </div>

        
    </div>
    
</template>


<style scoped>

</style>