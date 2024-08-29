<template>
    <div class="relative isolate px-6 pt-5 lg:pt-10 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <div class="text-4xl">
                <span class="font-black">
                    {{ $t('game.youdidit') }}
                </span>
                <br> <span class="font-thin text-lg"> {{ $t('game.readyforscore') }}
                </span>
                <img src="/win.png" class="mx-auto  lg:max-w-96 h-auto mt-10 px-16" />
                <div class="my-14 font-black text-indigo-600 text-5xl">
                    {{ points }} {{ $t('game.points') }}
                </div>
                <div v-if="goal != ''" class="text-2xl my-16 max-w-xs mx-auto">
                    {{ $t('results.yourgoal')}} <span class="font-extrabold">{{ goal }}</span>
                </div>
                <div class="max-w-xs mx-auto mb-4">
                    <NuxtLink to="/joinLeaderboard"
                        class="inline-block uppercase rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-5 pt-2 pb-1.5 text-2xl font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ $t('game.joinLeaderboard') }}
                    </NuxtLink>
                </div>
                <div class="max-w-xs mx-auto mb-10">
                    <NuxtLink to="/"
                        class="inline-block self-center uppercase rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-5 pt-2 pb-1.5 text-2xl font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ $t('game.playagain') }}
                    </NuxtLink>
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
const indexStore = useIndexStore()
const { points, goal } = storeToRefs(indexStore)
</script>