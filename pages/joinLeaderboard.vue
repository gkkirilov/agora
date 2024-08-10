<template>
    <div class="relative isolate px-6 pt-5 lg:pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl ">
            <div class="text-center">
                <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{ $t('joinLeaderboard.title')
                    }}</h1>
                <p class="text-gray-600 max-w-xs mx-auto text-xl mt-2">{{ $t('joinLeaderboard.description') }}</p>

                <img src="/leaderboard.png" class="mx-auto max-w-80 lg:max-w-96 h-auto mt-10 p-6">
                <div class="mt-10 mb-8 flex items-center justify-center gap-x-6">
                    <div class="mt-2 flex items-center justify-center gap-x-6">
                        <input v-model="newNickname" type="text" name="nickname" id="nickname"
                            class="max-w-xs rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 text-center font-black text-6xl uppercase"
                            maxlength="4"
                            placeholder="JOJO" />
                    </div>
                    </div>
                <div class="mt-10 mb-8 flex items-center justify-center gap-x-6">
                    <div @click="submitToLeaderboard" :class="{
                        'opacity-50 cursor-not-allowed': !active,
                        'cursor-pointer ': active
                    }"
                        class=" rounded-md uppercase bg-gradient-to-tr from-indigo-500 to-indigo-800 px-6 py-3 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ $t('joinLeaderboard.continue') }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const supabase = useSupabaseClient()
const indexStore = useIndexStore()
const { points, nickname } = storeToRefs(indexStore)

const newNickname = ref(nickname.value || '')

const active = computed(() => {
    return newNickname.value.length >= 4
})

async function submitToLeaderboard() {
    const { error } = await supabase
      .from('leaderboard')
      .insert({ nickname: newNickname.value.toUpperCase(), points: points.value || 1000 })

      return navigateTo('/leaderboard')
}
</script>