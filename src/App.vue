<script setup>
import { RouterView } from 'vue-router';
import modalItem from './components/modal-item.vue';
import alertaItem from './components/alerta-item.vue';

import headerItem from './components/header-item.vue';
</script>

<template>
   <div>
      <headerItem class="sticky top-0"/>
   </div>
 <main class=" container mx-auto mt-10">
    <RouterView
    />
 </main>

 <modalItem/>

<alertaItem/>
</template>
