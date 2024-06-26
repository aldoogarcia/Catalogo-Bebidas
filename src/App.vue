<script setup>
import { RouterView } from 'vue-router';
import modalItem from './components/modal-item.vue';

import headerItem from './components/header-item.vue';
</script>

<template>
 <headerItem/>
 <main class="container mx-auto mt-10">
    <RouterView
    />
 </main>

 <modalItem/>
</template>
