<template>
    <div class="relative isolate px-6 pt-5 lg:pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl">
            <div class="text-center">
                <h1 v-if="!completed" class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{ $t('survey.title') }}</h1>
                <h1 v-else class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{ $t('finalSurvey.title2') }}</h1>
                <p v-if="!completed" class="text-gray-600 max-w-xs mx-auto text-xl mt-2">{{ $t('survey.description') }}</p>
                <p v-else class="text-gray-600 max-w-xs px-10 mx-auto text-xl mt-2">{{ $t('finalSurvey.description2') }}</p>

                <div v-if="!completed" class="flex flex-initial justify-center mt-6 gap-x-3">
                    <div v-for="n in questions.length" class="bg-indigo-300 px-6 py-1 rounded"
                        :class="{ 'bg-indigo-600': currentQuestion + 1 > n - 1 }">
                    </div>
                </div>

                <div v-if="!completed">
                    <div class="mt-10 mb-4 flex flex-col gap-4 items-center justify-center">
                        <span class="text-2xl">
                            {{ $t('survey.question' + currentQuestion) }}
                        </span>
                        <div v-for="answer in questions[currentQuestion].answers" :key="currentQuestion + answer" @click="selectAnswer(answer)"
                            class="rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-6 py-2 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase cursor-pointer">
                            {{ $t('survey.question' + currentQuestion + '' + answer) }}
                        </div>
                    </div>
                </div>
                <div v-else-if="completed" class="text-4xl mt-20">
                    <div>
                        <img src="/exitSurvey.png" class="mx-auto  lg:max-w-96 h-auto mt-6 p-6">
                    </div>
                    <div>
                        <NuxtLink to="/results" @click="changeQuestions()"
                            class="inline-block mb-6 cursor-pointer rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-10 py-2 text-2xl font-extrabold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase mt-4">
                            {{ $t('survey.continue') }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
const supabase = useSupabaseClient()

var currentQuestion = ref(0)
const completed = ref(false)
var answers = []

async function selectAnswer(answer) {
    answers.push(answer)
    if (currentQuestion.value + 1 >= questions.value.length) {
        completed.value = true
        const { error } = await supabase
            .from('surveys')
            .insert({ 
                question0: answers[0] || '',   
                question1: answers[1] || '',   
                question2: answers[2] || '',   
                question3: answers[3] || '',   
                question4: answers[4] || '',   
                question5: answers[5] || '',   
             })
        return
    }

    currentQuestion.value += 1
}

var questions = ref([
    {
        title: 'Does integrity matter in politics?',
        answers: ['yes', 'no', 'sometimes']
    },
    {
        title: 'Does money play a role in politics?',
        answers: ['norole', 'bigrole', 'neither', 'itcouldbeuseful']
    },
    {
        title: 'Being truthful and honest with your voters can lead to losing votes.',
        answers: ['agree', 'itdoesntmatter', 'disagree', 'idontknow']
    },
    {
        title: 'Would you run for political office?',
        answers: ['yes', 'no']
    },
    {
        title: 'How much do you think you know about the election process?',
        answers: ['nothingatall', 'justthebasics', 'quitealot', 'im_an_expert']
    },
    {
        title: 'Do you think your vote matters?',
        answers: ['yes', 'no']
    }
])
// 1) – Yes / No / Sometimes 
// 2) – No role / Big role / Neither / It could be useful 
// 3) – Agree / It doesn’t matter / Disagree / I don’t know 
// 4) – Nothing at all / Just the basics / Quite a lot / I’m an expert 
// 5) – Yes / No 
// 6) – Yes / No

</script>