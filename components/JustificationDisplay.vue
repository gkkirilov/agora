<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  justification: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['continue'])

const { t } = useI18n()
</script>

<template>
  <div class="mt-8">
    <img v-if="image" :src="image" alt="Justification image" class="mx-auto mb-4 max-w-full h-auto rounded-lg" />
    <p class="text-gray-600 mb-4 max-w-xs mx-auto">{{ t(`game.${justification}`) }}</p>
    <button
      @click="emit('continue')"
      class="inline-block rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-10 py-2 text-xl font-extrabold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase mt-4"
    >
      {{ t('game.continue') }}
    </button>
  </div>
</template>
