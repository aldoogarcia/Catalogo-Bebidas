<script setup>
</script>

<template>
    <div class="mx-auto container px-5 py-16">
        <div>

        </div>
        <form 
            class="md:w-1/2 2xl:w-1/3 bg-orange-400 py-31 p-10 drop-shadow-xl space-y-4"
        >
        <div class="space-y-2">
            <label for="ingrediente"
                class="block text-white text-lg uppercase ">
                Nombre o Ingrediente
            </label>
            <input 
                class="rounded-lg focus:outline-none w-full"
            type="text">
        </div>

        <div class="space-y-2">
            <label for="ingrediente"
                class="block text-white text-lg uppercase ">
                Categoria
            </label>
            <select class="rounded-lg focus:outline-none w-full text-center" name="" id="">
                <option value="">-- Selecciona --</option>
            </select>
        </div>

        <input 
        class="bg-orange-800 hover:bg-orange-900 w-full text-white py-1 rounded-2xl"
        type="submit"
        value="Buscar Bebida"
        >
        </form>

    </div>
</template>