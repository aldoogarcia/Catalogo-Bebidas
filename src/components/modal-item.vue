<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

import {useModalStore} from '../stores/modal'
import { useBebidasStore } from '@/stores/bebidas';
import { useFavoritosStore } from '@/stores/favoritos';

const moda= useModalStore()
const bebid = useBebidasStore()
const favoritos = useFavoritosStore()

const muestraIngredientesExistentes=()=>{
  
  const ingrdientesDiv= document.createElement('DIV')

  for(let i=1;i<=15;i++){
    if(bebid.ingredientes[`strIngredient${i}`]){
      const ingredientes= bebid.ingredientes[`strIngredient${i}`]
      const cantidad = bebid.ingredientes[`strMeasure${i}`]
      

      const parrafo = document.createElement('P')
      parrafo.classList.add('text-lg')
      parrafo.textContent=`${ingredientes}: ${cantidad}`

      ingrdientesDiv.appendChild(parrafo)

    }
  }

  return ingrdientesDiv
}


</script>

<template>
    <TransitionRoot as="template" :show="moda.modal" >
      <Dialog as="div" class="relative z-10" @close="moda.handleSubmit">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                <div>
                  <div class="mt-3">
                    <DialogTitle as="h1"
                    class="font-semibold text-2xl text-center mb-9">
                      {{ bebid.ingredientes.strDrink }}
                    </DialogTitle>

                    <img 
                    class="rounded-full w-72 mx-auto"
                    :src="bebid.ingredientes.strDrinkThumb" alt="img bebida">

                    <DialogTitle  class="text-2xl font-extrabold my-5">
                      ingredientes y Cantidades
                    </DialogTitle>
                    <div v-html="muestraIngredientesExistentes().outerHTML"></div>

                    <DialogTitle  class="text-2xl font-extrabold my-5">
                      Intrucciones de Bebida
                    </DialogTitle>

                    <div>
                      <p>
                        {{ bebid.ingredientes.strInstructionsES == null ? bebid.ingredientes.strInstructions : bebid.ingredientes.strInstructionsES}}
                      </p>
                    </div>

                  </div>
                </div>
                <div class="mt-5 sm:mt-6 flex justify-between gap-10">
                  <button
                  class="w-full p-1 bg-slate-400 text-white"
                  @click="moda.handleSubmit">
                    Cerrar
                  </button>

                  <button
                  class="w-full p-1 bg-orange-400 text-white"
                  @click="favoritos.handleFavoritos()"  >
                    {{ moda.textBoton }}
                  </button>
                </div> 
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>