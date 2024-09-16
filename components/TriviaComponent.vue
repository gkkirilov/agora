<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  title: String,
})

const emit = defineEmits(['trivia-complete'])

const randomTrivia = ref('')
const randomImage = ref('')

const getRandomTrivia = () => {
  const randomIndex = Math.floor(Math.random() * trivia.length)
  randomTrivia.value = trivia[randomIndex]
}

const getRandomImage = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1
  randomImage.value = `/trivia${randomNumber}.png`
}

onMounted(() => {
  getRandomTrivia()
  getRandomImage()
})

const handleComplete = () => {
  emit('trivia-complete')
}
</script>

<template>
  <div class="trivia-container">
    <h2 class="text-3xl font-bold mb-4 mt-6">{{ $t('trivia.title') }}</h2>
    <p class="text-gray-600 max-w-xs mx-auto text-xl mt-2">{{ $t('trivia.description') }}</p>

    <img :src="randomImage" :alt="title" class="mb-4 max-w-xs mt-8 px-4">
    <p class="text-lg mb-6">{{ $t(`trivia.${randomTrivia}`) }}</p>
    <button @click="handleComplete" class="rounded-md uppercase bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-6 py-2 text-xl font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      {{ $t('trivia.continue') }}
    </button>
  </div>
</template>
