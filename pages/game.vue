<script setup>
import { useIndexStore } from '~/stores/index'
const indexStore = useIndexStore()
const { politicalParty, money, voters, integrity, points } = storeToRefs(indexStore)

const state = reactive({
  elections: false,
  electionsVoting: false,
  electionWon: false,
  currentQuestionIndex: 0,
  completed: false,
  hideAnswers: false,
  justification: '',
  moneyDown: false,
  moneyUp: false,
  integrityDown: false,
  integrityUp: false,
  votersUp: false,
  votersDown: false,
  isFirstElection: true
})

// Initialize game values
money.value = 50
voters.value = 0
integrity.value = 70

const allQuestions = computed(() => {
  const questions = getAllQuestions(politicalParty.value)
  const additionalQuestions = politicalParty.value === 'right' || politicalParty.value === 'far-right'
    ? [...firstQuestionsRight(politicalParty.value), ...secondQuestionsRight(politicalParty.value)]
    : [...firstQuestionsLeft(politicalParty.value), ...secondQuestionsLeft(politicalParty.value)]
  
  questions.splice(3, 0, ...additionalQuestions.slice(0, 5))
  questions.splice(8, 0, ...additionalQuestions.slice(5))
  return questions
})

watch(() => state.currentQuestionIndex, (newValue) => {
  state.elections = newValue === 5 || newValue === 10
  state.completed = newValue > 10
})

const handleStartVoting = () => {
  state.electionsVoting = true
}

const handleShowPostElection = () => {
  if (!state.isFirstElection) {
    continueFromPostElection()
  }
}

const continueFromPostElection = () => {
  state.elections = false
  state.electionsVoting = false
  if (state.currentQuestionIndex === 5) {
    state.isFirstElection = false
  }
  changeQuestions()
}

const changeQuestions = () => {
  Object.assign(state, {
    moneyDown: false,
    moneyUp: false,
    integrityDown: false,
    integrityUp: false,
    votersDown: false,
    votersUp: false,
    justification: '',
    hideAnswers: false
  })

  points.value = Math.floor(voters.value * integrity.value / partyVoters[politicalParty.value].neededToWin * 1000)
  state.electionWon = points.value >= 5000

  state.currentQuestionIndex++
  if (state.currentQuestionIndex > 10) {
    navigateTo('/complete')
  }
}

const selectAnswer = (answer) => {
  money.value += answer.followup.money
  voters.value = Math.max(0, voters.value + answer.followup.voters)
  integrity.value = Math.min(100, integrity.value + answer.followup.integrity)

  state.moneyUp = answer.followup.money > 0
  state.moneyDown = answer.followup.money < 0
  state.integrityUp = answer.followup.integrity > 0
  state.integrityDown = answer.followup.integrity < 0
  state.votersUp = answer.followup.voters > 0
  state.votersDown = answer.followup.voters < 0
  state.hideAnswers = true
  state.justification = answer.justification
}
</script>

<template>
  <div class="px-6 pt-5 lg:pt-10 lg:px-8">
    <div class="mx-auto max-w-2xl">
      <div class="text-center">
        <InfoDisplay
          v-if="!state.completed"
          :political-party="politicalParty"
          :money="money"
          :voters="voters"
          :integrity="integrity"
          v-bind="state"
        />

        <template v-if="state.elections">
          <ElectionsComponent
            :elections="state.elections"
            :elections-voting="state.electionsVoting"
            :election-won="state.electionWon"
            :political-party="politicalParty"
            :current-question-index="state.currentQuestionIndex"
            :is-first-election="state.isFirstElection"
            @start-voting="handleStartVoting"
            @show-post-election="handleShowPostElection"
            @continue-from-post-election="continueFromPostElection"
          />
        </template>

        <template v-else-if="!state.completed">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl my-5">
            {{ $t(`game.${allQuestions[state.currentQuestionIndex].topic}`) }}
          </h1>
          
          <ThinkingImage :index="state.currentQuestionIndex % 4" v-show="!state.hideAnswers" />

          <transition name="slide-fade" mode="out-in">
            <p v-if="!state.justification" class="text-gray-600 mx-auto mt-10 text-lg text-left bg-gray-100 max-w-xs px-3 py-4 rounded-md leading-5">
              {{ $t(`game.${allQuestions[state.currentQuestionIndex].title}`) }}
            </p>
          </transition>

          <AnswerOptions
            v-if="!state.hideAnswers"
            :options="allQuestions[state.currentQuestionIndex].options"
            :current-money="money"
            @select="selectAnswer"
          />

          <JustificationDisplay
            v-if="state.justification"
            :justification="state.justification"
            :image="allQuestions[state.currentQuestionIndex].image"
            @continue="changeQuestions"
          />
        </template>
      </div>
    </div>
  </div>
</template>
