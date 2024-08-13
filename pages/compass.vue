<template>
    <div class="relative isolate px-6 pt-5 lg:pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl">
            <div class="text-center">
                <h1 v-if="!completed" class="text-lg font-medium tracking-tight text-gray-600">{{ $t('compass.title') }}
                    {{ currentQuestion + 1 }}/6
                </h1>
                <div v-if="!completed" class="flex flex-initial justify-center mt-2 gap-x-3">
                    <div v-for="n in 6" class="px-6 py-1 rounded bg-indigo-300" :class="{
                        'bg-indigo-600': currentQuestion + 1 >= n
                    }">
                    </div>
                </div>
                <!-- Start banner -->
                <!-- <div class="flex justify-center items-center gap-x-6 bg-gray-200 py-2.5 rounded-lg px-3">
               <div class="text-sm leading-6 text-gray-900">
                  <strong class="font-semibold">Current Score: {{ politicalScore }}</strong>
                  <div>-4 and below = Far-Left</div>
                  <div>-4 to -2  = Left</div>
                  <div>-2 to +2  = Centrist</div>
                  <div>+2 to +4 = Right</div>
                  <div>4 and above = Far-Right</div>
               </div>
            </div> -->
                <!-- End banner -->

                <div v-if="!completed && selectedQuestions.length">
                    <transition v-if="!justification" name="slide-fade" mode="out-in">
                        <p class="text-gray-600 mx-auto mt-10 text-xl" :key="currentQuestion">
                            {{ $t('compass.' + selectedQuestions[currentQuestion].question) }}
                        </p>
                    </transition>

                    <transition-group v-if="!hideAnswers" name="list" tag="div"
                        class="mt-10 mb-4 flex flex-col gap-4 items-center justify-center">
                        <div v-for="(answer, index) in shuffledAnswers[currentQuestion]"
                            :key="currentQuestion + '-' + index" @click="selectAnswer(answer)"
                            class="rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-10 py-2 text-lg font- text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            {{ $t('compass.' + answer.answer) }}
                        </div>
                    </transition-group>
                    <div v-if="justification" class="text-gray-600 mx-auto mt-10 text-xl">
                        {{ $t('compass.' + justification) }}
                        <div @click="changeQuestions()"
                            class="mt-4 rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-10 py-2 text-lg font- text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            {{ $t('compass.continue') }}
                        </div>
                    </div>
                </div>
                <div v-else-if="completed" class="text-4xl mt-20">
                    <div class="font-bold mt-4">
                        {{ $t('compass.' + party) }}</div>
                    <div>

                    <img src="/profile.png" class="mx-auto  lg:max-w-96 h-auto mt-6 p-6">

                    <div class="text-lg mb-10 mx-auto mt-4 max-w-xs">
                        {{ $t('compass.' + party + 'Explanation') }}
                    </div>

                    <NuxtLink to="/biscania" @click="changeQuestions()"
                        class="inline-block mb-6 mt-4 rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-5 py-2 text-lg font-bold uppercase text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ $t('compass.continue') }}
                    </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
const indexStore = useIndexStore()
const { politicalParty } = storeToRefs(indexStore)

const user = useSupabaseUser()
const politicalScore = ref(0)
const currentQuestion = ref(0)
const completed = ref(false)
const selectedQuestions = ref([])
const shuffledAnswers = ref([])
const justification = ref('')
const hideAnswers = ref(false)


var party = computed(() => {
    var party = ''
    if (politicalScore.value >= 4) {
        party = 'far-right'
    } else if (politicalScore.value >= 2 && politicalScore.value < 4) {
        party = 'right'
    } else if (politicalScore.value > -2 && politicalScore.value < 2) {
        party = 'centrist'
    } else if (politicalScore.value > -4 && politicalScore.value <= -2) {
        party = 'left'
    } else if (politicalScore.value <= -4) {
        party = 'far-left'
    }

    politicalParty.value = party
    return party
})


var allQuestions = [
    {
        "topic": "Social Welfare",
        "question": "question1title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer1left",
                "justification": "justification1left"
            },
            {
                "position": "Moderate",
                "answer": "answer1moderate",
                "justification": "justification1moderate"
            },
            {
                "position": "Right",
                "answer": "answer1right",
                "justification": "justification1right"
            }
        ]
    },
    {
        "topic": "Social Welfare",
        "question": "question2title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer2left",
                "justification": "justification2left"
            },
            {
                "position": "Moderate",
                "answer": "answer2moderate",
                "justification": "justification2moderate"
            },
            {
                "position": "Right",
                "answer": "answer2right",
                "justification": "justification2right"
            }
        ]
    },
    {
        "topic": "Healthcare",
        "question": "question3title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer3left",
                "justification": "justification3left"
            },
            {
                "position": "Moderate",
                "answer": "answer3moderate",
                "justification": "justification3moderate"
            },
            {
                "position": "Right",
                "answer": "answer3right",
                "justification": "justification3right"
            }
        ]
    },
    {
        "topic": "Healthcare",
        "question": "question4title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer4left",
                "justification": "justification4left"
            },
            {
                "position": "Moderate",
                "answer": "answer4moderate",
                "justification": "justification4moderate"
            },
            {
                "position": "Right",
                "answer": "answer4right",
                "justification": "justification4right"
            }
        ]
    },
    {
        "topic": "Foreign policy",
        "question": "question5title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer5left",
                "justification": "justification5left"
            },
            {
                "position": "Moderate",
                "answer": "answer5moderate",
                "justification": "justification5moderate"
            },
            {
                "position": "Right",
                "answer": "answer5right",
                "justification": "justification5right"
            }
        ]
    },
    {
        "topic": "Immigration",
        "question": "question6title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer6left",
                "justification": "justification6left"
            },
            {
                "position": "Moderate",
                "answer": "answer6moderate",
                "justification": "justification6moderate"
            },
            {
                "position": "Right",
                "answer": "answer6right",
                "justification": "justification6right"
            }
        ]
    },
    {
        "topic": "Immigration",
        "question": "question7title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer7left",
                "justification": "justification7left"
            },
            {
                "position": "Moderate",
                "answer": "answer7moderate",
                "justification": "justification7moderate"
            },
            {
                "position": "Right",
                "answer": "answer7right",
                "justification": "justification7right"
            }
        ]
    },
    {
        "topic": "Role of the State",
        "question": "question8title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer8left",
                "justification": "justification8left"
            },
            {
                "position": "Moderate",
                "answer": "answer8moderate",
                "justification": "justification8moderate"
            },
            {
                "position": "Right",
                "answer": "answer8right",
                "justification": "justification8right"
            }
        ]
    },
    {
        "topic": "Role of the State",
        "question": "question9title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer9left",
                "justification": "justification9left"
            },
            {
                "position": "Moderate",
                "answer": "answer9moderate",
                "justification": "justification9moderate"
            },
            {
                "position": "Right",
                "answer": "answer9right",
                "justification": "justification9right"
            }
        ]
    },
    {
        "topic": "Policy and International Relations",
        "question": "question10title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer10left",
                "justification": "justification10left"
            },
            {
                "position": "Moderate",
                "answer": "answer10moderate",
                "justification": "justification10moderate"
            },
            {
                "position": "Right",
                "answer": "answer10right",
                "justification": "justification10right"
            }
        ]
    },
    {
        "topic": "Policy and International Relations",
        "question": "question11title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer11left",
                "justification": "justification11left"
            },
            {
                "position": "Moderate",
                "answer": "answer11moderate",
                "justification": "justification11moderate"
            },
            {
                "position": "Right",
                "answer": "answer11right",
                "justification": "justification11right"
            }
        ]
    },
    {
        "topic": "Corporate Governance",
        "question": "question12title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer12left",
                "justification": "justification12left"
            },
            {
                "position": "Moderate",
                "answer": "answer12moderate",
                "justification": "justification12moderate"
            },
            {
                "position": "Right",
                "answer": "answer12right",
                "justification": "justification12right"
            }
        ]
    },
    {
        "topic": "Corporate Governance",
        "question": "question13title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer13left",
                "justification": "justification13left"
            },
            {
                "position": "Moderate",
                "answer": "answer13moderate",
                "justification": "justification13moderate"
            },
            {
                "position": "Right",
                "answer": "answer13right",
                "justification": "justification13right"
            }
        ]
    },
    {
        "topic": "Police Affairs",
        "question": "question14title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer14left",
                "justification": "justification14left"
            },
            {
                "position": "Moderate",
                "answer": "answer14moderate",
                "justification": "justification14moderate"
            },
            {
                "position": "Right",
                "answer": "answer14right",
                "justification": "justification14right"
            }
        ]
    },
    {
        "topic": "Police Affairs",
        "question": "question15title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer15left",
                "justification": "justification15left"
            },
            {
                "position": "Moderate",
                "answer": "answer15moderate",
                "justification": "justification15moderate"
            },
            {
                "position": "Right",
                "answer": "answer15right",
                "justification": "justification15right"
            }
        ]
    },
    {
        "topic": "National Defense",
        "question": "question16title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer16left",
                "justification": "justification16left"
            },
            {
                "position": "Moderate",
                "answer": "answer16moderate",
                "justification": "justification16moderate"
            },
            {
                "position": "Right",
                "answer": "answer16right",
                "justification": "justification16right"
            }
        ]
    },
    {
        "topic": "Youth Employment",
        "question": "question17title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer17left",
                "justification": "justification17left"
            },
            {
                "position": "Moderate",
                "answer": "answer17moderate",
                "justification": "justification17moderate"
            },
            {
                "position": "Right",
                "answer": "answer17right",
                "justification": "justification17right"
            }
        ]
    },
    {
        "topic": "Education",
        "question": "question18title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer18left",
                "justification": "justification18left"
            },
            {
                "position": "Moderate",
                "answer": "answer18moderate",
                "justification": "justification18moderate"
            },
            {
                "position": "Right",
                "answer": "answer18right",
                "justification": "justification18right"
            }
        ]
    },
    {
        "topic": "Education",
        "question": "question19title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer19left",
                "justification": "justification19left"
            },
            {
                "position": "Moderate",
                "answer": "answer19moderate",
                "justification": "justification19moderate"
            },
            {
                "position": "Right",
                "answer": "answer19right",
                "justification": "justification19right"
            }
        ]
    },
    {
        "topic": "Environmental Regulations",
        "question": "question20title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer20left",
                "justification": "justification20left"
            },
            {
                "position": "Moderate",
                "answer": "answer20moderate",
                "justification": "justification20moderate"
            },
            {
                "position": "Right",
                "answer": "answer20right",
                "justification": "justification20right"
            }
        ]
    },
    {
        "topic": "Environmental Regulations",
        "question": "question21title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer21left",
                "justification": "justification21left"
            },
            {
                "position": "Moderate",
                "answer": "answer21moderate",
                "justification": "justification21moderate"
            },
            {
                "position": "Right",
                "answer": "answer21right",
                "justification": "justification21right"
            }
        ]
    },
    {
        "topic": "Public Transportation",
        "question": "question22title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer22left",
                "justification": "justification22left"
            },
            {
                "position": "Moderate",
                "answer": "answer22moderate",
                "justification": "justification22moderate"
            },
            {
                "position": "Right",
                "answer": "answer22right",
                "justification": "justification22right"
            }
        ]
    },
    {
        "topic": "Public Transportation",
        "question": "question23title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer23left",
                "justification": "justification23left"
            },
            {
                "position": "Moderate",
                "answer": "answer23moderate",
                "justification": "justification23moderate"
            },
            {
                "position": "Right",
                "answer": "answer23right",
                "justification": "justification23right"
            }
        ]
    },
    {
        "topic": "Youth Employment",
        "question": "question24title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer24left",
                "justification": "justification24left"
            },
            {
                "position": "Moderate",
                "answer": "answer24moderate",
                "justification": "justification24moderate"
            },
            {
                "position": "Right",
                "answer": "answer24right",
                "justification": "justification24right"
            }
        ]
    },
    {
        "topic": "Civic Freedom",
        "question": "question25title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer25left",
                "justification": "justification25left"
            },
            {
                "position": "Moderate",
                "answer": "answer25moderate",
                "justification": "justification25moderate"
            },
            {
                "position": "Right",
                "answer": "answer25right",
                "justification": "justification25right"
            }
        ]
    },
    {
        "topic": "Civic Freedoms/Affairs",
        "question": "question26title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer26left",
                "justification": "justification26left"
            },
            {
                "position": "Moderate",
                "answer": "answer26moderate",
                "justification": "justification26moderate"
            },
            {
                "position": "Right",
                "answer": "answer26right",
                "justification": "justification26right"
            }
        ]
    },
    {
        "topic": "Technology and Privacy",
        "question": "question27title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer27left",
                "justification": "justification27left"
            },
            {
                "position": "Moderate",
                "answer": "answer27moderate",
                "justification": "justification27moderate"
            },
            {
                "position": "Right",
                "answer": "answer27right",
                "justification": "justification27right"
            }
        ]
    },
    {
        "topic": "Technology and Privacy",
        "question": "question28title",
        "answers": [
            {
                "position": "Left",
                "answer": "answer28left",
                "justification": "justification28left"
            },
            {
                "position": "Moderate",
                "answer": "answer28moderate",
                "justification": "justification28moderate"
            },
            {
                "position": "Right",
                "answer": "answer28right",
                "justification": "justification28right"
            }
        ]
    }
]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

onMounted(() => {
    selectedQuestions.value = shuffle(allQuestions).slice(0, 6);
    selectedQuestions.value.forEach(question => {
        shuffledAnswers.value.push(shuffle([...question.answers]));
    });
})

function changeQuestions() {
    justification.value = ''
    hideAnswers.value = false


    if (currentQuestion.value + 1 >= selectedQuestions.value.length) {
        completed.value = true
    } else {
        currentQuestion.value += 1
    }
}

function selectAnswer(answer) {
    if (answer.position === 'Left') {
        politicalScore.value -= 1
    } else if (answer.position === 'Right') {
        politicalScore.value += 1
    }
    // else if (answer.position === 'Moderate') {
    //     if (politicalScore.value > 0) {
    //         politicalScore.value -= 0.5
    //     } else if (politicalScore.value < 0) {
    //         politicalScore.value += 0.5
    //     }
    // }

    hideAnswers.value = true
    justification.value = answer.justification
}

</script>