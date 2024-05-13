<template>
    <div class="relative isolate px-6 pt-5 lg:pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl ">
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Political Compass!</h1>

                <div v-if="!completed">
                     
                  <p class="text-gray-600 mx-auto mt-10 text-xl">
                     {{ questions[currentQuestion].title }}
                  </p>
                  
                  <div class="mt-10 mb-4 flex flex-col gap-4 items-center justify-center gap-x-6">
                     <a href="#"
                     @click="changeQuestions"
                           class="rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-10 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                           
                           {{ questions[currentQuestion].answers[0].title }}
                     </a>
                     <a href="#"
                     @click="changeQuestions"
                           class="rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-10 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                           
                           {{ questions[currentQuestion].answers[1].title }}
                     </a>
                     <a href="#"
                     @click="changeQuestions"
                           class="rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-10 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                           
                           {{ questions[currentQuestion].answers[2].title }}
                     </a>
                  </div>
                
               </div>
               <div v-else class="text-4xl mt-20">
                  Well done! <br> <span class="font-bold mt-4">You are ....</span>
               </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const user = useSupabaseUser()

var currentQuestion = ref(0)
var completed = ref(false)

function changeQuestions() {
    if (currentQuestion.value + 1 >= questions.length) {
        completed.value = true
    } else {
        currentQuestion.value += 1
    }
}

var questions = [
   {
      "title": "Your friend has lost their job due to their company shutting down and they are about to lose their home to the bank. What should they do?",
      "answers": [
         {
            "title": "Apply for a welfare program to cover the cost of their home.",
            "score": "5"
         },
         {
            "title": "Take out a government-funded loan to keep themselves afloat while they look for a good replacement job.",
            "score": "5"
         },
         {
            "title": "Pick themselves up and go to all the job interviews they can find.",
            "score": "5"
         }
      ]
   },
   {
      "title": "You find out that your local community center, which provides meals and support for the homeless, is facing funding cuts and may have to close down. What do you do?",
      "answers": [
         {
            "title": "Campaign for increased government funding and support for social programs that directly aid the homeless and vulnerable populations in your community.",
            "score": "5"
         },
         {
            "title": "Support a partnership between the government, non-profits, and private businesses to create a sustainable funding model for the community center.",
            "score": "5"
         },
         {
            "title": "Encourage local businesses and community members to donate to the center and volunteer their time, emphasizing self-reliance and community-driven solutions.",
            "score": "5"
         }
      ]
   },
   {
      "title": "You fall and break your finger - unfortunate, happens to the best of us. You know that you can go to the emergency room in your local hospital, but there's likely going to be a long wait. What do you do?",
      "answers": [
         {
            "title": "Go to the emergency room and wait for your turn.",
            "score": "5"
         },
         {
            "title": "Visit an urgent care clinic or hop on a quick video call with a doctor.",
            "score": "5"
         },
         {
            "title": "Shift through some reviews of nearby doctors online and pick one that you can afford.",
            "score": "5"
         }
      ]
   },
   {
      "title": "“Wasted money!” complains your uncle, while reading a newspaper. A contribution in there claims that the EU just pledged 50 million euros to combat famine and improve sanitation in the Horn of Africa. What do you think?",
      "answers": [
         {
            "title": "People in Africa deserve these funds and more. All humans on the planet deserve decent living standards. We have a moral and historical obligation to help out.",
            "score": "5"
         },
         {
            "title": "Fifty million euros is not enough to change the situation in Africa but may help enough to prevent the worst. It is an amount EU member states can afford.",
            "score": "5"
         },
         {
            "title": "The EU is being too generous to other nations while we are struggling domestically. We should support our own people first, and not distant countries.",
            "score": "5"
         }
      ]
   },
   {
      "title": "You see a poster on a railway station. A boat with black migrants from Africa is depicted with the text “This land is ours, all migrants must return back to Africa!”. What are your thoughts about this?",
      "answers": [
         {
            "title": "Migrants benefit our society and economy as there are many jobs available and integration is inevitable. Europe is rich and can help people from all over Earth.",
            "score": "5"
         },
         {
            "title": "We do need some restrictions. Europe can help refugees escape war but must be more strict with economic migrants as they do not always benefit our society.",
            "score": "5"
         },
         {
            "title": "There are indeed too many migrants in Europe now. They burden our society, hardly find work, and may become a security problem when coming in large numbers.",
            "score": "5"
         }
      ]
   },
   {
      "title": "The government is planning to increase taxes on cigarettes and alcohol, and decrease value-added tax on fruits and vegetables. Do you agree with this intervention?",
      "answers": [
         {
            "title": "Yes, I do. I believe that things that harm people and our society should be restricted by the state, and helping people buy vital goods such as fruit is good.",
            "score": "5"
         },
         {
            "title": "I'm not sure I can agree or disagree with government intervention in general, as I support it in about as many cases as I reject it.",
            "score": "5"
         },
         {
            "title": "No, I don't. I believe in freedom of choice. It's our personal responsibility to avoid bad things, not the prerogative of the state.",
            "score": "5"
         }
      ]
   },
   {
      "title": "The prime minister announces sweeping reforms related to transportation. All drivers will need to pay a special fee when using all roads, not just highways. Whether you are a driver or not, what is your stance on this?",
      "answers": [
         {
            "title": "Reinforcing the state’s budget can lead to better road maintenance and create new jobs. I would take more fees over privatization, which almost never works.",
            "score": "5"
         },
         {
            "title": "Fees should remain as they are for roads because the reforms sound too excessive. I would prefer if the state taxed entertainment or something not so vital.",
            "score": "5"
         },
         {
            "title": "I think it would be better if private companies were managing fee collection on the road network, as they would more competently and competitively maintain it.",
            "score": "5"
         }
      ]
   },
   {
      "title": "Your government is launching a referendum months ahead of a general UN vote. How do you vote and why, if the question asked is: “Should we join a new UN Declaration on international representation of minorities?”",
      "answers": [
         {
            "title": "I vote yes. We must ensure that the rights of all minorities are respected, and all members of society are well represented both domestically and abroad.",
            "score": "5"
         },
         {
            "title": "I would vote yes. I think there is enough representation of minorities, but it’s always possible to improve and discussions with others can inspire us.",
            "score": "5"
         },
         {
            "title": "I vote no. Our laws and NGOs are enough to protect the rights and freedoms of minorities. We are a sovereign country and need no further international controls.",
            "score": "5"
         }
      ]
   }
]
</script>
<style>
</style>