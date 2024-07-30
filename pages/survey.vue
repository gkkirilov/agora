<template>
    <div class="relative isolate px-6 pt-5 lg:pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl">
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{ $t('survey.question'+ currentQuestion + 'title') }}</h1>
                <p class="text-gray-600 max-w-xs mx-auto text-xl mt-2">{{ $t('survey.question' + currentQuestion) }}</p>

                <div v-if="!completed" class="flex flex-initial justify-center mt-6 gap-x-3">
                    <div class="bg-indigo-600 px-6 py-1 rounded">
                    </div>
                    <div :class="{
                        'px-6 py-1 rounded': true,
                        'bg-indigo-300': currentQuestion == 1,
                        'bg-indigo-600': currentQuestion != 1
                    }">
                    </div>
                </div>

                <div v-if="!completed">
                    <div 
                        class="mt-10 mb-4 flex flex-col gap-4 items-center justify-center">
                        <div v-for="n in 4"
                            :key="currentQuestion + '-' + index" @click="selectAnswer"
                            class="rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-10 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase cursor-pointer">
                            {{ $t('survey.question'+ currentQuestion + 'answer' + n) }}
                        </div>
                    </div>
                </div>
                <div v-else-if="completed" class="text-4xl mt-20">
                    <div>
                        <img src="/disco.png" class="mx-auto  lg:max-w-96 h-auto mt-6 p-6">
                    </div>
                    <div>
                        <NuxtLink to="/compassintro" @click="changeQuestions()"
                            class="rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-10 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase mt-4">
                            {{ $t('survey.continue') }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
var currentQuestion = ref(1)
const completed = ref(false)

function selectAnswer() {
    if (currentQuestion.value == 2) {
        completed.value = true
    }

    currentQuestion.value += 1
}

</script>