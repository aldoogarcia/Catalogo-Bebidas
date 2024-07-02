<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import {useBebidasStore} from '../stores/bebidas'
import { useNotificacionStores } from '@/stores/notificacion';

const route = useRoute();
const store = useBebidasStore()
const notificacion= useNotificacionStores();
const paguinaSelect= computed(()=>route.name=='inicio' )

const handleSubmit = () => {
    if(Object.values(store.busqueda).includes("")){
        notificacion.$patch({
            muestra:true,
            error:true,
            texto: "Los campos son obligatorios"
        })
        setTimeout(() => {
            notificacion.$patch({
            muestra:false,
            error:false,
            texto: ""
        })
        }, 3000);
    }
    store.obtenerRecetas()
}
</script>

<template>
<header class="sticky top-0 bg-slate-800 w-full"
        :class="{header:paguinaSelect}">
    <div class="mx-auto container px-5 py-16">
        <div class="mx-auto container px-5 py-5">
            <div class="flex justify-between items-center">
                <div>
                    <RouterLink :to="{name: 'inicio'}">
                        <img class="min-w-28" src="/public/img/logo.svg" alt="Icono-SVG">
                    </RouterLink>
                </div>
                <nav class=" text-white flex space-x-3">
                    <RouterLink
                    class=" text-lg font-semibold"
                    :to="{name:'inicio'}"
                    active-class="text-orange-400"
                    >
                    Inicio
                    </RouterLink>
                    <RouterLink
                    class=" text-lg font-semibold"
                    :to="{name:'favoritos'}"
                    active-class="text-orange-400 "
                    >
                    Favoritos
                    </RouterLink>
                </nav>
                
            </div>

        </div>
        <form 
            @submit.prevent="handleSubmit"
            class="md:w-1/2 2xl:w-1/3 bg-orange-400 py-31 p-10 drop-shadow-xl space-y-4"
            v-if="paguinaSelect"
        >
        <div class="space-y-2">
            <label for="ingrediente"
                class="block text-white text-lg uppercase ">
                Nombre o Ingrediente
            </label>
            <input 
                class="rounded-lg focus:outline-none w-full"
                type="text"
                v-model="store.busqueda.nombre"
            >
        </div>

        <div class="space-y-2">
            <label for="ingrediente"
                class="block text-white text-lg uppercase ">
                Categoria
            </label>
            <select 
            v-model="store.busqueda.categoria"
            class="rounded-lg focus:outline-none w-full text-center" name="" id="">
                <option value="">-- Selecciona --</option>
                <option class="bg-orange-100" 
                v-for="categoria in store.categorias"
                :key="categoria.strCategory"
                :value="categoria.strCategory">
                    {{ categoria.strCategory }}
                </option>
            </select>
        </div>

        <input 
        class="bg-orange-800 hover:bg-orange-900 w-full text-white py-1 rounded-2xl"
        type="submit"
        value="Buscar Bebida"
        >
        </form>

    </div>
</header>
</template>

<style scoped>
    .header {
        background-image: url('/public/img/bg.jpg');
        background-size: cover;
        background-position: center;
    }
</style>