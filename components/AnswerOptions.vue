<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  currentMoney: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['select'])

const { t } = useI18n()

const isDisabled = (cost) => props.currentMoney + cost < 0
</script>

<template>
  <div class="my-8 space-y-4  max-w-xs mx-auto">
    <button v-for="(option, index) in options" :key="index" @click="emit('select', option)"
      :disabled="isDisabled(option.followup.money)" :class="isDisabled(option.followup.money) ? 'cursor-not-allowed bg-gray-500' :
        'bg-gradient-to-tr from-[#6E74C2] to-[#5744A8]'"
      class="w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
      {{ t(`game.${option.option}`) }}
      <small class="" v-show="isDisabled(option.followup.money)">
        <br>Not enough money
      </small>
    </button>
  </div>
</template>
