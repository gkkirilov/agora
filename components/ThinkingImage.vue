<script setup>
import { computed } from 'vue'

const props = defineProps({
  index: {
    type: Number,
    required: true
  }
})

const imageSources = [
  '/thinking.png',
  '/thinking2.png',
  '/thinking3.png',
  '/thinking4.png'
]

const imageSource = computed(() => imageSources[props.index % imageSources.length])
</script>

<template>
  <div class="my-8">
    <img 
      :src="imageSource" 
      alt="Thinking politician" 
      class="mx-auto w-64 h-64 object-cover"
    />
  </div>
</template>
