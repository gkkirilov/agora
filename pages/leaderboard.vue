<template>
    <div class="relative isolate px-6 pt-5 lg:px-8">
        <div class="mx-auto max-w-2xl ">
            <div class="text-center">
                <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{ $t('leaderboard.title') }}
                </h1>
                <p class="text-gray-600 max-w-xs mx-auto text-xl mt-2">{{ $t('leaderboard.description') }}</p>

                <div class="max-w-xs text-center mx-auto">
                    <div v-for="(user, index) in users"
                        class="ring-1 ring-gray-900/10 p-2 px-4 rounded-lg mt-4 flex justify-between">
                        <div class="flex gap-x-2">
                            <div class="text-gray-600 text-base pt-0.5">{{ user.rank }}</div>
                            <div class="text-gray-900 text-xl font-black w-13">{{ user.nickname }}</div>
                        </div>
                        <img v-show="user.political_party" :src="'/party/' + user.political_party + '.svg'" class="inline size-8 mx-auto fill-red-700 w-10 mr-4" alt="">
                        <div class="text-gray-600 text-xl font-black w-15">

                            {{ user.points }}
                        </div>
                    </div>

                </div>

                <div class="mt-10 mb-8 flex items-center justify-center gap-x-6">
                    <NuxtLink to="/"
                        class="rounded-md uppercase bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-6 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ $t('leaderboard.again') }}
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
const supabase = useSupabaseClient()
const indexStore = useIndexStore()
const { points } = storeToRefs(indexStore)

var { data: users } = await supabase.from('leaderboard').select('*').gte('points', points.value).limit(10).order('points', { ascending: false })
console.log(users)
if (users.length < 10) {
    var { data: users2 } = await supabase.from('leaderboard').select('*').lt('points', points.value).limit(10 - users.length).order('points', { ascending: false })
    users = users.concat(users2)
}
</script>