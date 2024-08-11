<template>
    <div class="relative isolate px-6 pt-5 lg:pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <div class="text-4xl">
                <div>
                    <span class="font-black">
                        {{ $t('finalSurvey.title') }}
                    </span>
                    <br> <span class="text-lg"> {{ $t('finalSurvey.description') }}
                    </span>
                    <img src="/winner.png" class="mx-auto  lg:max-w-96 h-auto mt-10 px-16" />
                    <div class="mx-auto mb-4 mt-16">
                        <NuxtLink to="/survey2"
                            class="inline-block rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-3 py-2 text-3xl font-extrabold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">
                            {{ $t('finalSurvey.yes') }}
                        </NuxtLink>
                    </div>
                    <div class="mx-auto">
                        <NuxtLink to="/results"
                            class="cursor-pointer inline-block rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-3 py-2 text-3xl font-extrabold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">
                            {{ $t('finalSurvey.no') }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
            aria-hidden="true">
            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
    </div>
</template>
<script setup>
</script>