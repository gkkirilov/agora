<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  elections: Boolean,
  electionsVoting: Boolean,
  electionWon: Boolean,
  politicalParty: String,
  currentQuestionIndex: Number,
  isFirstElection: Boolean,
})

const emit = defineEmits(['startVoting', 'showPostElection', 'continueFromPostElection'])

const { t } = useI18n()

const showPostElectionScreen = ref(false)

const partyResults = computed(() => [
  {
    party: props.politicalParty,
    percentage: props.electionWon ? 33 : 26,
    color: 'indigo-800',
    bgColor: 'indigo-700',
    maxHeight: props.electionWon ? 60 : 48,
  },
  { party: 'far-right', percentage: props.electionWon ? 15 : 17, color: 'yellow-500', bgColor: 'yellow-500', maxHeight: 32 },
  {
    party: 'far-left',
    percentage: props.electionWon ? 28 : 35,
    color: 'red-600',
    bgColor: 'red-600',
    maxHeight: props.electionWon ? 48 : 64,
  },
])

const getBackgroundColor = (color) => ({
  'indigo-700': '#4338ca',
  'yellow-500': '#eab308',
  'red-600': '#dc2626',
}[color] || color)

const handleShowPostElection = () => {
  if (props.isFirstElection) {
    showPostElectionScreen.value = true
  } else {
    emit('showPostElection')
  }
}
</script>

<template>
  <div v-if="elections" class="text-center">
    <!-- Pre-elections screen -->
    <div v-if="!electionsVoting">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 px-4 mt-4">
        {{ t('elections.title') }}
      </h1>
      <p class="text-gray-600 max-w-xs mx-auto px-6 mt-2">{{ t('elections.description') }}</p>
      <div class="mx-auto text-start mt-14 text-xl">
        {{ t('elections.intro') }}
      </div>
      <img src="/elections.png" class="mx-auto lg:max-w-96 h-auto mt-10 px-16" alt="Elections">
      <button @click="$emit('startVoting')" class="my-10 inline-block rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-6 py-1.5 text-xl font-extrabold text-white shadow-sm uppercase">
        {{ t('elections.continue') }}
      </button>
    </div>

    <!-- Ongoing elections screen -->
    <div v-else-if="!showPostElectionScreen">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 px-4 mt-4">
        {{ electionWon ? t('elections.congrats') : t('elections.loss') }}
      </h1>
      <p class="text-gray-600 max-w-xs mx-auto px-6 mt-2">
        {{ electionWon ? t('elections.congratsDescription') : t('elections.lossDescription') }}
      </p>
      
      <div class="flex flex-row justify-around gap-y-4 h-96 mt-8 max-w-xs mx-auto">
        <div v-for="result in partyResults" :key="result.party" :class="`text-${result.color} gap-y-2 flex flex-col justify-end items-center`">
          <div class="text-2xl font-black">{{ result.percentage }}%</div>
          <img :src="`/${result.color.split('-')[0]}.png`" class="h-16 w-16" :alt="result.party">
          <div 
            :style="{
              backgroundColor: getBackgroundColor(result.bgColor),
              maxHeight: `${result.maxHeight}%`
            }"
            class="rounded w-16 animate-rise"
          >
            <img v-show="currentQuestionIndex > 8" :src="`/partyWhite/${result.party}.svg`"
              class="stroke-white size-9 mt-2 mx-auto text-white fill-white" :alt="result.party">
          </div>
        </div>
      </div>

      <button @click="handleShowPostElection" class="my-10 inline-block cursor-pointer rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-4 py-1.5 text-xl font-extrabold text-white shadow-sm uppercase">
        {{ isFirstElection ? t('elections.continue2') : t('elections.continue2') }}
      </button>
    </div>

    <!-- Post-elections screen (only for first election) -->
    <div v-else-if="isFirstElection && showPostElectionScreen">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 px-4 mt-4">
        {{ electionWon ? t('elections.win1title') : t('elections.loss1') }}
      </h1>
      <p class="text-gray-600 max-w-xs mx-auto px-6 mt-2">
        {{ electionWon ? t('elections.win1description') : t('elections.loss1description') }}
      </p>
      
      <img :src="electionWon ? '/electionWon.png' : '/electionLoss.png'" class="mx-auto lg:max-w-96 h-auto mt-10 px-16" alt="Elections">

      <div class="bg-gray-100 py-3 rounded-md mt-10 max-w-xs mx-auto text-left font-medium">
        <p class="text-gray-600 max-w-xs mx-auto px-6 mt-2">{{ t('elections.win1text1') }}</p>
        <p class="text-gray-600 max-w-xs mx-auto px-6 mt-2">{{ t('elections.win1text2') }}</p>
      </div>
      
      <button @click="$emit('continueFromPostElection')" class="my-10 inline-block cursor-pointer rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-4 py-1.5 text-xl font-extrabold text-white shadow-sm uppercase">
        {{ electionWon ? t('elections.letsgo') : t('elections.goback') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes rise {
  0% { height: 0; }
  100% { height: 100%; }
}

.animate-rise {
  animation: rise 2s ease-out forwards;
}
</style>
