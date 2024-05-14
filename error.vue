<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div>
    <Header/>
    <div class="text-center">
        <h1 class="text-4xl">{{ error.statusCode }}</h1>
        <div class="text-2xl" v-if="error.statusCode === 404">
            Page not found!
        </div>
        <div class="text-2xl" v-else>
            System error!
        </div>
        <div class=" mt-10">
            
            <NuxtLink to="/" class="rounded-md bg-white px-2.5 py-1.5 text-xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Go back home</NuxtLink>
        </div>
    </div>
    </div>
</template>