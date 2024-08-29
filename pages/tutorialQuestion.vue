<script setup>
const showExplanation = ref(false)
</script>

<template>
    <div class="relative isolate px-6 pt-5 lg:pt-10 lg:px-8">
        <div class="mx-auto max-w-2xl">
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl px-14">{{
                    $t('tutorialQuestion.title') }}
                </h1>
                <p class="text-gray-600 max-w-xs mx-auto px-6 mt-2">{{ $t('tutorialQuestion.description') }}</p>

                <img src="/thinking.png" class="mx-auto  lg:max-w-96 h-auto mt-10 px-16">
                <div v-if="!showExplanation"  class="mx-auto text-start mt-14 text-xl">
                    {{ $t('tutorialQuestion.intro') }}
                </div>

                <div v-if="!showExplanation"  class="mx-auto text-start mt-14 text-xl mb-10 text-center justify-center flex flex-col gap-y-5">
                    <button type="button" @click="showExplanation=true"
                        class="text-center bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] rounded-md px-10 py-2 text-base font-medum text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ $t('tutorialQuestion.answer1') }}
                    </button>
                    <button type="button" @click="showExplanation=true"
                        class="text-center bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] rounded-md px-10 py-2 text-base font-medum text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ $t('tutorialQuestion.answer2') }}
                    </button>
                    <button type="button" @click="showExplanation=true"
                        class="text-center bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] rounded-md px-4 py-2 text-base font-medum text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ $t('tutorialQuestion.answer3') }}
                    </button>
                </div>

                <div v-if="showExplanation" class="text-lg">
                    {{ $t('tutorialQuestion.explanation') }}
                </div>
                <div v-if="showExplanation" class="mt-10">
                    <NuxtLink to="/game"
                        class="inline-block mb-6 rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-6 py-2 text-2xl font-extrabold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">
                        {{ $t('tutorialQuestion.continue') }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>