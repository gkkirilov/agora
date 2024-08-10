<script setup>
const isOpen = ref(false)
</script>

<template>
    <div class="relative isolate px-6 pt-5 lg:pt-14 lg:px-8">

        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog as="div" @close="closeModal" class="relative z-10">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black/25" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left text-xl align-middle shadow-xl transition-all">
                                <div class="mt-2">
                                    <div class="text-xl text-gray-500 font-lighter">
                                        {{ $t('tutorial.popupText') }}
                                    </div>
                                </div>

                                <div class="mt-4 text-center">
                                    <button type="button" @click="isOpen = false"
                                        class="rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-10 py-3 text-xl uppercase font-semibold text-white shadow-sm hover:bg-indigo-500 ">
                                        {{ $t('tutorial.popupButton') }}
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <div class="mx-auto max-w-2xl">
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl px-14">{{ $t('tutorial.title') }}
                </h1>
                <p class="text-gray-600 max-w-xs mx-auto px-6 mt-2">{{ $t('tutorial.description') }}</p>

                <div class="mx-auto text-start mt-14 text-xl">
                    {{ $t('tutorial.intro') }}
                </div>
                <img src="/goal.png" class="mx-auto  lg:max-w-96 h-auto mt-10 px-16">

                <div class="mx-auto text-start mt-14 text-xl mb-10">
                    {{ $t('tutorial.intro2') }}
                    <span class="underline text-indigo-800 font-bold" @click="isOpen = true">
                        {{ $t('tutorial.majority') }}
                    </span>
                </div>

                <div class="mb-10">
                    <NuxtLink to="/tutorialQuestion"
                        class="rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-10 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">
                        {{ $t('tutorial.continue') }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>