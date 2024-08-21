<script setup>
import {
    ArrowUturnLeftIcon,
} from '@heroicons/vue/24/outline'

const indexStore = useIndexStore()
const { goal } = storeToRefs(indexStore)
const willWrite = ref(false)
</script>

<template>
    <div class="relative isolate px-6 pt-5 lg:pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl">
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{ $t('goal.title') }}</h1>
                <p class="text-gray-600 max-w-xs mx-auto px-6 mt-2">{{ $t('goal.description') }}</p>


                <img src="/goal.png" class="mx-auto  lg:max-w-96 h-auto mt-6 p-6">

                <div v-if="!willWrite">
                    <div class="mt-10 mb-4 flex flex-col gap-4 items-center justify-center">
                        <NuxtLink to="/tutorial" v-for="n in 3" :key="'-' + index" @click="selectAnswer"
                            class="rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-10 py-2 text-2xl font-extrabold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase cursor-pointer">
                            {{ $t('goal.goal' + n) }}
                        </NuxtLink>
                        <div class="rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-10 py-2 text-2xl font-extrabold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase cursor-pointer"
                            @click="willWrite = true">
                            {{ $t('goal.write') }}
                        </div>
                    </div>
                </div>
                <div v-else-if="willWrite" class="text-4xl">
                    <div @click="willWrite = false"
                    class="text-center flex justify-center gap-x-3 group mb-4 text-gray-500 items-center">
                    <ArrowUturnLeftIcon class="size-5 group-hover:stroke-indigo-500 group-hover:stroke-2" />
                    <span class="text-lg pt-1">{{ $t('compassPicker.back') }}</span>
                </div>
                    <div>
                        <div class="mt-2">
                            <textarea 
                            v-model="goal"
                            :placeholder="$t('goal.textareaPlaceholder')" rows="2" name="comment" id="comment"
                                class="inline-block w-full max-w-xs rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-sm p-2 py-2 sm:leading-6" maxlength="70" />
                        </div>
                    </div>
                    <div class="mt-4">
                        <NuxtLink to="/tutorial"
                            class="inline-block rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-10 py-2 text-2xl font-extrabold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase mt-4">
                            {{ $t('goal.continue') }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>