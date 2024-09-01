<template>
    <div class="relative isolate px-6 pt-5 lg:px-8">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="mx-auto max-w-2xl ">
            <div class="text-center">
                <NuxtLink to="/compassintro"
                    class="text-center flex justify-center gap-x-3 group mb-4 text-gray-500 items-center">
                    <ArrowUturnLeftIcon class="size-5 group-hover:stroke-indigo-500 group-hover:stroke-2" />
                    <span class="text-lg pt-1">{{ $t('compassPicker.back') }}</span>
                </NuxtLink>
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ $t('compassPicker.title') }}</h1>
                <p class="text-gray-600 max-w-xs px-4 mt-4 font-light text-lg mx-auto">{{ $t('compassPicker.description') }}
                </p>

                <img src="/pickParty.png" class="mx-auto lg:max-w-96 h-auto mt-10 px-16">
                <div v-if="showAnswers" class="mt-10 mb-4 flex flex-col items-center justify-center gap-y-5">
                    <button v-for="party in parties" @click="changeParty(party)"
                        class="rounded-md uppercase bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-4 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ $t('compass.' + party.name) }}
                    </button>
                </div>
                <div v-if="!showAnswers"
                    class="mt-10 mb-4 flex flex-col items-center justify-center gap-y-6 max-w-xs mx-auto text-xl font-light text-gray-700">
                    <div class="text-2xl font-semibold capitalize">
                        {{ $t('compass.' + politicalParty) }}
                    </div>
                    {{ $t('compass.' + politicalParty + 'Explanation') }}

                    <NuxtLink to="/biscania"
                        class="cursor-pointer rounded-md uppercase bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-6 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ $t('compassPicker.continue') }}
                    </NuxtLink>
                    <button @click="showAnswers = true"
                        class="cursor-pointer mb-10 rounded-md uppercase bg-gradient-to-tr from-[#E3D4ED] to-[#6E74C2] px-6 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ $t('compassPicker.back2') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import {
    ArrowUturnLeftIcon,
} from '@heroicons/vue/24/outline'
const indexStore = useIndexStore()
const { politicalParty } = storeToRefs(indexStore)

const showAnswers = ref(true)
const explanation = ref('')

const parties = [
    { name: 'far-left', },
    { name: 'left', },
    { name: 'centrist', },
    { name: 'right', },
    { name: 'far-right', }
]

function changeParty(party) {
    politicalParty.value = party.name

    showAnswers.value = false
    explanation.value = party.explanation
}
</script>