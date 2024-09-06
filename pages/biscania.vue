<template>
    <div class="relative isolate px-6 pt-5 lg:px-8">
        <div class="mx-auto max-w-2xl ">
            <div class="text-center">
                <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{ $t('biscania.title') }}</h1>
                <p class="text-gray-600 max-w-xs mx-auto text-xl my-6">{{ $t('biscania.description') }}</p>

                <!-- <img src="/Survey.png" > -->
                <!-- https://www.youtube.com/embed/?playsinline=1&disablekb=1&enablejsapi=1&iv_load_policy=3&cc_load_policy=0&controls=0&rel=0&autoplay=1&mute=1&origin=https%3A%2F%2Fytch.xyz&widgetid=1 -->

                <iframe width="315" height="560" class="mx-auto rounded-md"
                    src="https://www.youtube.com/embed/q4ywxNHuYCM?controls=0&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3&cc_load_policy=0"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen />

                <div class="mt-10 mb-8 flex items-center justify-center gap-x-6">
                    <NuxtLink to="/goal"
                        class="rounded-md uppercase bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-6 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ $t('biscania.continue') }}
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

const isLoaded = ref(false)
const isPlaying = ref(false)
const video = ref()
function play() {
    video.value?.player.playVideo()
}
function stateChange(state) {
    isPlaying.value = state.data === 1
}

</script>