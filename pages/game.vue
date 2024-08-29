<template>
    <div class="px-6 pt-5 lg:pt-10 lg:px-8">
        <div class="mx-auto max-w-2xl">
            <div class="text-center">
                <div v-if="!completed"
                    class="flex max-w-xs mx-auto justify-between gap-x-2 items-center text-lg font-light bg-gray-100 rounded-md min-w-xs">
                    <div class="flex items-center font-medium p-2" :class="{ ' bg-white rounded z-50': infoIndex === 0 }">
                        <svg width="40" height="40" viewBox="0 0 47 47" class="size-9 fill-indigo-900 mb-1" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24.4774 4.89584C20.439 4.89584 17.1337 8.20115 17.1337 12.2396C17.1337 16.278 20.439 19.5833 24.4774 19.5833C28.5159 19.5833 31.8212 16.278 31.8212 12.2396C31.8212 8.20115 28.5159 4.89584 24.4774 4.89584ZM23.4256 21.5417C21.0903 21.5417 18.8955 22.4506 17.2446 24.1005C15.5937 25.7504 14.6838 27.9462 14.6838 30.2815V33.2917H23.0068V31.1268C22.1431 30.7488 21.538 29.8881 21.538 28.8854C21.538 27.5342 22.6347 26.4375 23.9859 26.4375C25.3372 26.4375 26.4338 27.5342 26.4338 28.8854C26.4338 29.8881 25.8287 30.7479 24.9651 31.1268V33.2917H33.288V30.2815C33.288 27.9462 32.3791 25.7514 30.7292 24.1005C29.0773 22.4506 26.8815 21.5417 24.5482 21.5417H23.4256ZM11.2568 35.25C11.0621 35.2473 10.8689 35.2832 10.6883 35.3558C10.5077 35.4284 10.3433 35.5361 10.2047 35.6728C10.0661 35.8094 9.95602 35.9723 9.8809 36.1518C9.80578 36.3314 9.76709 36.5241 9.76709 36.7188C9.76709 36.9134 9.80578 37.1061 9.8809 37.2857C9.95602 37.4652 10.0661 37.6281 10.2047 37.7647C10.3433 37.9014 10.5077 38.0092 10.6883 38.0817C10.8689 38.1543 11.0621 38.1903 11.2568 38.1875H11.7463V43.5729C11.7436 43.7873 11.7878 43.9997 11.8759 44.1951C11.9639 44.3906 12.0937 44.5644 12.2561 44.7044C12.4185 44.8443 12.6095 44.9471 12.8158 45.0053C13.0221 45.0636 13.2387 45.076 13.4503 45.0417H34.5158C34.7278 45.0769 34.945 45.0652 35.152 45.0074C35.3591 44.9495 35.5509 44.847 35.7139 44.7069C35.877 44.5668 36.0073 44.3927 36.0957 44.1967C36.1841 44.0008 36.2284 43.7879 36.2255 43.5729V38.1875H36.7151C36.9097 38.1903 37.103 38.1543 37.2836 38.0817C37.4642 38.0092 37.6286 37.9014 37.7672 37.7647C37.9058 37.6281 38.0158 37.4652 38.0909 37.2857C38.1661 37.1061 38.2048 36.9134 38.2048 36.7188C38.2048 36.5241 38.1661 36.3314 38.0909 36.1518C38.0158 35.9723 37.9058 35.8094 37.7672 35.6728C37.6286 35.5361 37.4642 35.4284 37.2836 35.3558C37.103 35.2832 36.9097 35.2473 36.7151 35.25H34.7568H13.2151H11.2568Z" />
                        </svg>

                        {{ $t('compass.' + politicalParty) }}
                    </div>
                    <div class="flex flex-row gap-x-2">
                        
                        <div class="flex items-center flex-col text-sm font-medium p-2 gap-x-1" :class="{ ' bg-white rounded z-50': infoIndex === 1 }"
                            v-show="infoIndex >= 1">
                            <svg width="30" height="30" viewBox="0 0 30 30"
                            class="size-7  fill-indigo-900"
                            :class="{ '!fill-green-600': moneyUp, '!fill-red-600': moneyDown }" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.75 4.95001C3.06 4.95001 2.5 5.51001 2.5 6.20001V18.7C2.5 19.39 3.06 19.95 3.75 19.95H26.25C26.94 19.95 27.5 19.39 27.5 18.7V6.20001C27.5 5.51001 26.94 4.95001 26.25 4.95001H3.75ZM6.14014 7.45001H23.8599C23.9531 7.71289 24.1039 7.95166 24.3011 8.1489C24.4984 8.34613 24.7371 8.49688 25 8.59015V16.3099C24.7371 16.4031 24.4984 16.5539 24.3011 16.7511C24.1039 16.9484 23.9531 17.1871 23.8599 17.45H6.14014C6.04687 17.1871 5.89612 16.9484 5.69888 16.7511C5.50164 16.5539 5.26288 16.4031 5 16.3099V8.59015C5.26288 8.49688 5.50164 8.34613 5.69888 8.1489C5.89612 7.95166 6.04687 7.71289 6.14014 7.45001ZM15 8.70001C14.0054 8.70001 13.0516 9.0951 12.3483 9.79836C11.6451 10.5016 11.25 11.4555 11.25 12.45C11.25 13.4446 11.6451 14.3984 12.3483 15.1017C13.0516 15.8049 14.0054 16.2 15 16.2C15.9946 16.2 16.9484 15.8049 17.6516 15.1017C18.3549 14.3984 18.75 13.4446 18.75 12.45C18.75 11.4555 18.3549 10.5016 17.6516 9.79836C16.9484 9.0951 15.9946 8.70001 15 8.70001ZM8.75 11.2C8.06 11.2 7.5 11.7588 7.5 12.45C7.5 13.1413 8.06 13.7 8.75 13.7C9.44 13.7 10 13.1413 10 12.45C10 11.7588 9.44 11.2 8.75 11.2ZM21.25 11.2C20.56 11.2 20 11.7588 20 12.45C20 13.1413 20.56 13.7 21.25 13.7C21.94 13.7 22.5 13.1413 22.5 12.45C22.5 11.7588 21.94 11.2 21.25 11.2ZM4.98779 22.45L24.0356 27.4109C24.7044 27.5847 25.3853 27.1825 25.5591 26.515L26.6187 22.45H24.0356L23.7402 23.5755C23.179 23.6243 22.6722 23.9235 22.356 24.3885L14.9097 22.45H4.98779Z" />
                            </svg>
                            {{ money }}
                        </div>
                        <div class="flex items-center flex-col text-sm font-medium p-2 gap-x-1" :class="{ ' bg-white rounded z-50': infoIndex === 2 }"
                            v-show="infoIndex >= 2">
                            <svg width="31" height="30" viewBox="0 0 31 30" class="size-7 fill-indigo-900"
                                :class="{ '!fill-green-600': votersUp, 'fill-red-600': votersDown }" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_213_1754)">
                                    <path
                                        d="M15.5 5C14.3397 5 13.2269 5.46094 12.4064 6.28141C11.5859 7.10188 11.125 8.21468 11.125 9.375C11.125 10.5353 11.5859 11.6481 12.4064 12.4686C13.2269 13.2891 14.3397 13.75 15.5 13.75C16.6603 13.75 17.7731 13.2891 18.5936 12.4686C19.4141 11.6481 19.875 10.5353 19.875 9.375C19.875 8.21468 19.4141 7.10188 18.5936 6.28141C17.7731 5.46094 16.6603 5 15.5 5ZM6.125 8.75C5.2962 8.75 4.50134 9.07924 3.91529 9.66529C3.32924 10.2513 3 11.0462 3 11.875C3 12.2854 3.08083 12.6917 3.23788 13.0709C3.39492 13.45 3.62511 13.7945 3.91529 14.0847C4.50134 14.6708 5.2962 15 6.125 15C6.53538 15 6.94174 14.9192 7.32089 14.7621C7.70003 14.6051 8.04453 14.3749 8.33471 14.0847C8.62489 13.7945 8.85508 13.45 9.01212 13.0709C9.16917 12.6917 9.25 12.2854 9.25 11.875C9.25 11.4646 9.16917 11.0583 9.01212 10.6791C8.85508 10.3 8.62489 9.95547 8.33471 9.66529C8.04453 9.37511 7.70003 9.14492 7.32089 8.98788C6.94174 8.83083 6.53538 8.75 6.125 8.75ZM24.875 8.75C24.0462 8.75 23.2513 9.07924 22.6653 9.66529C22.0792 10.2513 21.75 11.0462 21.75 11.875C21.75 12.2854 21.8308 12.6917 21.9879 13.0709C22.1449 13.45 22.3751 13.7945 22.6653 14.0847C23.2513 14.6708 24.0462 15 24.875 15C25.2854 15 25.6917 14.9192 26.0709 14.7621C26.45 14.6051 26.7945 14.3749 27.0847 14.0847C27.3749 13.7945 27.6051 13.45 27.7621 13.0709C27.9192 12.6917 28 12.2854 28 11.875C28 11.0462 27.6708 10.2513 27.0847 9.66529C26.4987 9.07924 25.7038 8.75 24.875 8.75ZM15.5 16.25C12.58 16.25 6.75 17.7163 6.75 20.625V23.75C6.75 24.44 7.31 25 8 25H23C23.69 25 24.25 24.44 24.25 23.75V20.625C24.25 17.7163 18.42 16.25 15.5 16.25ZM5.37305 17.5659C3.3968 17.8709 0.5 19.2363 0.5 20.8813V23.75C0.5 24.44 1.06 25 1.75 25H4.25V20.625C4.25 19.4237 4.6818 18.4159 5.37305 17.5659ZM25.627 17.5659C26.3182 18.4159 26.75 19.4237 26.75 20.625V25H29.25C29.94 25 30.5 24.44 30.5 23.75V20.8813C30.5 19.2363 27.6032 17.8709 25.627 17.5659Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_213_1754">
                                        <rect width="30" height="30" stroke="currentColor" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            {{ voters }}
                        </div>
                        <div class="flex items-center flex-col text-sm font-medium p-2 gap-x-1"
                            :class="{ ' bg-white rounded z-50': infoIndex === 3 && isOpen }" v-show="infoIndex >= 3">
                            <svg width="30" height="30" viewBox="0 0 30 30" class="size-7 fill-indigo-900"
                                :class="{ '!fill-green-600': integrityUp, 'fill-red-600': integrityDown }" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 5C14.5615 5.00035 14.1308 5.11603 13.7511 5.33543C13.3714 5.55483 13.0562 5.87024 12.8369 6.25H6.25H3.75C3.06 6.25 2.5 6.81 2.5 7.5C2.5 8.19 3.06 8.75 3.75 8.75H5L0 18.75C0 22.2013 2.79875 25 6.25 25C9.70125 25 12.5 22.2013 12.5 18.75L7.5 8.75H12.8394C13.0584 9.1294 13.3733 9.44458 13.7525 9.66396C14.1317 9.88334 14.5619 9.99923 15 10C15.4385 9.99965 15.8692 9.88397 16.2489 9.66457C16.6285 9.44517 16.9438 9.12976 17.1631 8.75H22.5L17.5 18.75C17.5 22.2013 20.2987 25 23.75 25C27.2013 25 30 22.2013 30 18.75L25 8.75H26.25C26.94 8.75 27.5 8.19 27.5 7.5C27.5 6.81 26.94 6.25 26.25 6.25H17.1606C16.9416 5.8706 16.6267 5.55542 16.2475 5.33604C15.8683 5.11666 15.4381 5.00077 15 5ZM6.25 11.2769L9.98535 18.75H2.51465L6.25 11.2769ZM23.75 11.2769L27.4854 18.75H20.0146L23.75 11.2769Z" />
                            </svg>
                            {{ integrity }}%
                        </div>
                    </div>
                    <TransitionRoot appear :show="isOpen" as="template">
                        <Dialog as="div" class="relative z-10">
                            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                                enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                                leave-to="opacity-0">
                                <div class="fixed inset-0 bg-black/25" />
                            </TransitionChild>

                            <div class="fixed inset-0 overflow-y-auto">
                                <div class="flex min-h-full items-center justify-center p-4 text-center">
                                    <TransitionChild as="template" enter="duration-300 ease-out"
                                        enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                                        leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                                        leave-to="opacity-0 scale-95">
                                        <DialogPanel
                                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                                {{ $t('info.' + info[infoIndex].name) }}
                                            </DialogTitle>
                                            <div class="mt-2">
                                                <p class="text-lg text-gray-500">
                                                    {{ $t('info.' + info[infoIndex].description) }}
                                                </p>
                                            </div>

                                            <div class="mt-4 flex justify-center">
                                                <button type="button"
                                                    class="rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-10 py-2 text-xl uppercase font-semibold text-white shadow-sm "
                                                    @click="showNextInfo">
                                                    Got it
                                                </button>
                                            </div>
                                        </DialogPanel>
                                    </TransitionChild>
                                </div>
                            </div>
                        </Dialog>
                    </TransitionRoot>
                </div>


                <div v-if="elections">
                    <div v-if="!electionsVoting" class="text-center">
                        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl px-4 mt-4">{{
                            $t('elections.title') }}
                        </h1>
                        <p class="text-gray-600 max-w-xs mx-auto px-6 mt-2">{{ $t('elections.description') }}</p>

                        <div class="mx-auto text-start mt-14 text-xl">
                            {{ $t('elections.intro') }}
                        </div>
                        <img src="/elections.png" class="mx-auto  lg:max-w-96 h-auto mt-10 px-16">

                        <div class="my-10">
                            <div @click="electionsVoting = true"
                                class="inline-block rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-6 py-1.5 text-2xl font-extrabold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">
                                {{ $t('elections.continue') }}
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div v-if="electionWon">
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl px-14 mt-4">{{
                                $t('elections.congrats') }}
                            </h1>
                            <p class="text-gray-600 max-w-xs mx-auto px-6 mt-2">{{ $t('elections.congratsDescription') }}
                            </p>
                        </div>
                        <div v-else>
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl px-14 mt-4">{{
                                $t('elections.loss') }}
                            </h1>
                            <p class="text-gray-600 max-w-xs mx-auto px-6 mt-2">{{ $t('elections.lossDescription') }}
                            </p>
                        </div>


                        <div v-if="electionWon" class="flex flex-row justify-around gap-y-4 h-96 mt-8 max-w-xs mx-auto">
                            <div class="text-indigo-800 gap-y-2 flex flex-col justify-end">
                                <div class="text-2xl font-black">33%</div>
                                <img src="/purple.png" class="h-16 w-16">
                                <div class="bg-indigo-700 rounded max-h-60 w-16 animate-rise">
                                    <img v-show="currentQuestionIndex > 8" :src="'/partyWhite/' + politicalParty + '.svg'" class="stroke-white size-9 mt-2 mx-auto text-white fill-white" alt="">
                                </div>
                            </div>
                            <div class="text-yellow-500 gap-y-2 flex flex-col justify-end">
                                <div class="text-2xl font-black">15%</div>
                                <img src="/yellow.png" class="h-16 w-16">
                                <div class="bg-yellow-500 rounded max-h-32 w-16 animate-rise">
                                    <img v-show="currentQuestionIndex > 8" src="/partyWhite/far-right.svg" class="stroke-white size-9 mt-2 mx-auto text-white fill-white" alt="">
                                </div>
                            </div>
                            <div class="text-red-600 gap-y-2 flex flex-col justify-end">
                                <div class="text-2xl font-black">28%</div>
                                <img src="/red.png" class="h-16 w-16">
                                <div class="bg-red-600 rounded max-h-48 w-16 animate-rise">
                                    <img v-show="currentQuestionIndex > 8" src="/partyWhite/far-left.svg" class="stroke-white size-9 mt-2 mx-auto text-white fill-white" alt="">
                                </div>
                            </div>
                        </div>
                        <div v-else class="flex flex-row justify-around gap-y-4 h-96 mt-8 max-w-xs mx-auto">
                            <div class="text-indigo-800 gap-y-2 flex flex-col justify-end">
                                <div class="text-2xl font-black">26%</div>
                                <img src="/purple.png" class="h-16 w-16">
                                <div class="bg-indigo-700 rounded max-h-48 w-16 animate-rise">
                                    <img v-show="currentQuestionIndex > 8" :src="'/partyWhite/' + politicalParty + '.svg'" class="stroke-white size-9 mt-2 mx-auto text-white fill-white" alt="">
                                </div>
                            </div>
                            <div class="text-yellow-500 gap-y-2 flex flex-col justify-end">
                                <div class="text-2xl font-black">17%</div>
                                <img src="/yellow.png" class="h-16 w-16">
                                <div class="bg-yellow-500 rounded max-h-32 w-16 animate-rise">
                                    <img v-show="currentQuestionIndex > 8" src="/partyWhite/far-right.svg" class="stroke-white size-9 mt-2 mx-auto text-white fill-white" alt="">
                                </div>
                            </div>
                            <div class="text-red-600 gap-y-2 flex flex-col justify-end">
                                <div class="text-2xl font-black">35%</div>
                                <img src="/red.png" class="h-16 w-16">
                                <div class="bg-red-600 rounded max-h-64 w-16 animate-rise">
                                    <img v-show="currentQuestionIndex > 8" src="/partyWhite/far-left.svg" class="stroke-white size-9 mt-2 mx-auto text-white fill-white" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="my-10">
                            <div v-if="currentQuestionIndex != 9" @click="elections = false, electionsVoting = false"
                                class="inline-block cursor-pointer rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-4 py-1.5 text-2xl font-extrabold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">
                                {{ $t('elections.continue2') }}
                            </div>
                            <NuxtLink to="/complete" v-else  @click="elections = false, electionsVoting = false"
                                class="inline-block cursor-pointer rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-4 py-1.5 text-2xl font-extrabold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">
                                {{ $t('elections.continue2') }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div v-else-if="!completed">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl my-5">
                        {{ $t('game.' + allQuestions[currentQuestionIndex].topic) }}
                    </h1>
                    <img v-show="!hideAnswers" src="/thinking.png" class="mx-auto max-w-xs h-auto mt-10 py-0 px-12">
                    <transition v-if="!justification" name="slide-fade" mode="out-in">

                        <p class="text-gray-600 mx-auto mt-10 text-lg text-left bg-gray-100 max-w-xs px-3 py-4 rounded-md leading-5">
                            {{ $t('game.' + allQuestions[currentQuestionIndex].title) }}
                        </p>
                    </transition>

                    <transition-group v-if="!hideAnswers" name="list" tag="div"
                        class="mt-10 mb-4 flex flex-col gap-4 items-center justify-center w-full max-w-xs mx-auto">

                        <button v-for="(answer, index) in allQuestions[currentQuestionIndex].options"
                            :key="currentQuestionIndex + '-' + index" @click="selectAnswer(answer)"
                            :disabled="money + answer.followup.money < 0"
                            :class="money + answer.followup.money < 0 ? 'cursor-not-allowed bg-gray-500' :
                                'bg-gradient-to-tr from-[#6E74C2] to-[#5744A8]'"
                            class="w-full rounded-md px-6 py-3 text-sm font-medium text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            {{ $t('game.' + answer.option) }}
                            <small class="" v-show="money + answer.followup.money < 0">
                                <br>Not enough money
                            </small>
                        </button>
                    </transition-group>
                    <div v-show="justification" class="text-gray-600 mx-auto mt-10 text-xl max-w-xs">
                        <img :src="allQuestions[currentQuestionIndex].image" class="mx-auto h-auto mt-10 p-6 px-12">

                        {{ $t('game.' + justification) }}
                        <div>
                            <button @click="changeQuestions()"
                                class="rounded-md bg-gradient-to-tr mt-6 mb-10 from-[#6E74C2] to-[#5744A8] px-4 py-2 text-xl font-extrabold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">
                                {{ $t('game.continue') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const indexStore = useIndexStore()
const { politicalParty, money, voters, integrity, points } = storeToRefs(indexStore)
const totalVoters = 3600000

const partyVoters = {
    peopleOfBiscania: 35/100 * totalVoters,
    thePeopleVoice: 24/100 * totalVoters,
    communistParty: 15/100 * totalVoters,
    liberationFrontOfBiscania: 8/100 * totalVoters,
    movementOfProgressiveDemocrats: 6/100 * totalVoters,

    right: {
        VOTERS_UP_HIGH: 42000,
        VOTERS_UP_MID: 21000,
        VOTERS_UP_LOW: 10500,
        VOTERS_DOWN_HIGH: 21000,
        VOTERS_DOWN_MID: 10500,
        VOTERS_DOWN_LOW: 5250,
    },
    left: {
        VOTERS_UP_HIGH: 66000,
        VOTERS_UP_MID: 33000,
        VOTERS_UP_LOW: 16500,
        VOTERS_DOWN_HIGH: 33000,
        VOTERS_DOWN_MID: 16500,
        VOTERS_DOWN_LOW: 8250,
    },
    'far-left': {
        VOTERS_UP_HIGH: 36000, 
        VOTERS_UP_MID: 18000, 
        VOTERS_UP_LOW: 9000, 
        VOTERS_DOWN_HIGH: 18000, 
        VOTERS_DOWN_MID: 9000, 
        VOTERS_DOWN_LOW: 4500, 
    },
    'far-right': {
        VOTERS_UP_HIGH: 24000,
        VOTERS_UP_MID: 12000,
        VOTERS_UP_LOW: 6000,
        VOTERS_DOWN_HIGH: 12000,
        VOTERS_DOWN_MID: 6000,
        VOTERS_DOWN_LOW: 3000,
    },
    centrist: {
        VOTERS_UP_HIGH: 54000,
        VOTERS_UP_MID: 27000,
        VOTERS_UP_LOW: 13500,
        VOTERS_DOWN_HIGH: 27000,
        VOTERS_DOWN_MID: 13500,
        VOTERS_DOWN_LOW: 6750,
    }
}
money.value = 50
voters.value = 15
integrity.value = 70
const infoIndex = ref(0)
const isOpen = ref(true)

const elections = ref(false)
const electionsVoting = ref(false)
const electionWon = ref(false)
const finalSurvey = ref(true)

const moneyDown = ref(false)
const moneyUp = ref(false)
const integrityDown = ref(false)
const integrityUp = ref(false)
const votersUp = ref(false)
const votersDown = ref(false)

function showNextInfo() {
    if (infoIndex.value + 1 >= 4) {
        isOpen.value = false
        return
    }

    infoIndex.value += 1
}
const info = [
    {
        name: 'politicalcore',
        description: 'politicalcoredescription',
    },
    {
        name: 'money',
        description: 'moneydescription',
    },
    {
        name: 'voters',
        description: 'votersdescription',
    },
    {
        name: 'integrity',
        description: 'integritydescription',
    },
]

const currentQuestionIndex = ref(0)
const completed = ref(false)
const hideAnswers = ref(false)
const justification = ref('')

const allQuestions = [
    {
        "topic": "FUNDING",
        "title": "fundingTitle",
        "image": "/game/FUNDING.png",
        "description": "fundingDescription",
        "options": [
            {
                "option": "fundingOption1title",
                "justification": "fundingOption1justification",
                "followup": {
                    "money": 1000,
                    "voters": 0,
                    "integrity": -20
                }
            },
            {
                "option": "fundingOption2title",
                "justification": "fundingOption2justification",
                "followup": {
                    "money": 500,
                    "voters": 0,
                    "integrity": 0
                }
            },
            {
                "option": "fundingOption3title",
                "justification": "fundingOption3justification",
                "followup": {
                    "money": 300,
                    "voters": 0,
                    "integrity": 5
                }
            }
        ]
    },
    {
        "topic": "SCANDAL",
        "image": "/game/SCANDAL.png",
        "title": "scandalTitle",
        "description": "scandalDescription",
        "options": [
            {
                "option": "scandalOption1title",
                "justification": "scandalOption1justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_DOWN_MID,
                    "integrity": 10
                }
            },
            {
                "option": "scandalOption2title",
                "justification": "scandalOption2justification",
                "followup": {
                    "money": -200,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_LOW,
                    "integrity": 0
                }
            },
            {
                "option": "scandalOption3title",
                "justification": "scandalOption3justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_DOWN_LOW,
                    "integrity": 0
                }
            }
        ]
    },
    {
        "topic": "DISASTER",
        "image": "/game/DISASTER.png",
        "title": "disasterTitle",
        "description": "disasterDescription",
        "options": [
            {
                "option": "disasterOption1title",
                "justification": "disasterOption1justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_MID,
                    "integrity": 10
                }
            },
            {
                "option": "disasterOption2title",
                "justification": "disasterOption2justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_HIGH,
                    "integrity": -10
                }
            },
            {
                "option": "disasterOption3title",
                "justification": "disasterOption3justification",
                "followup": {
                    "money": -500,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_HIGH,
                    "integrity": 10
                }
            }
        ]
    },
    {
        "topic": "GOOD_MESSAGE",
        "image": "/game/GOOD_MESSAGE.png",
        "title": "goodMessageTitle",
        "description": "goodMessageDescription",
        "options": [
            {
                "option": "goodMessageOption1title",
                "justification": "goodMessageOption1justification",
                "followup": {
                    "money": -200,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_HIGH,
                    "integrity": -10
                }
            },
            {
                "option": "goodMessageOption2title",
                "justification": "goodMessageOption2justification",
                "followup": {
                    "money": -400,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_MID,
                    "integrity": 20
                }
            },
            {
                "option": "goodMessageOption3title",
                "justification": "goodMessageOption3justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_LOW,
                    "integrity": -10
                }
            },
        ]
    },
    {
        "topic": "VIDEO_BAR",
        "title": "videoBarTitle",
        "image": "/game/VIDEO_BAR.png",
        "description": "videoBarDescription",
        "options": [
            {
                "option": "videoBarOption1title",
                "justification": "videoBarOption1justification",
                "followup": {
                    "money": -300,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_HIGH,
                    "integrity": 20
                }
            },
            {
                "option": "videoBarOption2title",
                "justification": "videoBarOption2justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_MID,
                    "integrity": 5
                }
            },
            {
                "option": "videoBarOption3title",
                "justification": "videoBarOption3justification",
                "followup": {
                    "money": 200,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_MID,
                    "integrity": 0
                }
            },
        ]
    },
    {
        "topic": "DATA_LEAK",
        "image": "/game/DATA_LEAK.png",
        "title": "dataLeakTitle",
        "description": "dataLeakDescription",
        "options": [
            {
                "option": "dataLeakOption1title",
                "justification": "dataLeakOption1justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_DOWN_HIGH,
                    "integrity": 10
                }
            },
            {
                "option": "dataLeakOption2title",
                "justification": "dataLeakOption2justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_LOW,
                    "integrity": -5
                }
            },
            {
                "option": "dataLeakOption3title",
                "justification": "dataLeakOption3justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_HIGH,
                    "integrity": -10
                }
            }
        ]
    }
]

const firstQuestionsLeft = [
    {
        "topic": "AFRICAN_IMPORTS_LEFT",
        "image": "/game/AFRICAN_IMPORTS.png",
        "title": "africanImportsLeftTitle",
        "description": "africanImportsLeftDescription",
        "options": [
            {
                "option": "africanImportsLeftOption1title",
                "justification": "africanImportsLeftOption1justification",
                "followup": {
                    "money": -200,
                    "voters": partyVoters[politicalParty.value].VOTERS_DOWN_MID,
                    "integrity": 0
                }
            },
            {
                "option": "africanImportsLeftOption2title",
                "justification": "africanImportsLeftOption2justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_MID,
                    "integrity": 0
                }
            },
            {
                "option": "africanImportsLeftOption3title",
                "justification": "africanImportsLeftOption3justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_LOW,
                    "integrity": 5
                }
            }
        ]
    },
    {
        "topic": "LGBT_INTERVIEW_LEFT",
        "image": "/game/LGBT_INTERVIEW.png",
        "title": "lgbtInterviewLeftTitle",
        "description": "lgbtInterviewLeftDescription",
        "options": [
            {
                "option": "lgbtInterviewLeftOption1title",
                "justification": "lgbtInterviewLeftOption1justification",
                "followup": {
                    "money": 100,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_MID,
                    "integrity": 0
                }
            },
            {
                "option": "lgbtInterviewLeftOption2title",
                "justification": "lgbtInterviewLeftOption2justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_DOWN_LOW,
                    "integrity": 0
                }
            },
            {
                "option": "lgbtInterviewLeftOption3title",
                "justification": "lgbtInterviewLeftOption3justification",
                "followup": {
                    "money": -100,
                    "voters": partyVoters[politicalParty.value].VOTERS_DOWN_MID,
                    "integrity": 0
                }
            }
        ]
    },
    {
        "topic": "ESPIONAGE_LEFT",
        "image": "/game/ESPIONAGE.png",
        "title": "espionageLeftTitle",
        "description": "espionageLeftDescription",
        "options": [
            {
                "option": "espionageLeftOption1title",
                "justification": "espionageLeftOption1justification",
                "followup": {
                    "money": 0,
                    "voters": 0,
                    "integrity": -10
                }
            },
            {
                "option": "espionageLeftOption2title",
                "justification": "espionageLeftOption2justification",
                "followup": {
                    "money": 0,
                    "voters": 0,
                    "integrity": 10
                }
            },
            {
                "option": "espionageLeftOption3title",
                "justification": "espionageLeftOption3justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_HIGH,
                    "integrity": 10
                }
            }
        ]
    }
]
const firstQuestionsRight = [
    {
        "topic": "AFRICAN_IMPORTS_RIGHT",
        "image": "/game/AFRICAN_IMPORTS.png",
        "title": "africanImportsRightTitle",
        "description": "africanImportsRightDescription",
        "options": [
            {
                "option": "africanImportsRightOption1title",
                "justification": "africanImportsRightOption1justification",
                "followup": {
                    "money": -200,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_MID,
                    "integrity": 0
                }
            },
            {
                "option": "africanImportsRightOption2title",
                "justification": "africanImportsRightOption2justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_DOWN_MID,
                    "integrity": 0
                }
            },
            {
                "option": "africanImportsRightOption3title",
                "justification": "africanImportsRightOption3justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_LOW,
                    "integrity": 5
                }
            }
        ]
    },
    {
        "topic": "LGBT_INTERVIEW_RIGHT",
        "image": "/game/LGBT_INTERVIEW.png",
        "title": "lgbtInterviewRightTitle",
        "description": "lgbtInterviewRightDescription",
        "options": [
            {
                "option": "lgbtInterviewRightOption1title",
                "justification": "lgbtInterviewRightOption1justification",
                "followup": {
                    "money": 100,
                    "voters": partyVoters[politicalParty.value].VOTERS_DOWN_MID,
                    "integrity": 0
                }
            },
            {
                "option": "lgbtInterviewRightOption2title",
                "justification": "lgbtInterviewRightOption2justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_DOWN_LOW,
                    "integrity": 0
                }
            },
            {
                "option": "lgbtInterviewRightOption3title",
                "justification": "lgbtInterviewRightOption3justification",
                "followup": {
                    "money": -100,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_HIGH,
                    "integrity": 0
                }
            }
        ]
    },
    {
        "topic": "ESPIONAGE_RIGHT",
        "image": "/game/ESPIONAGE.png",
        "title": "espionageRightTitle",
        "description": "espionageRightDescription",
        "options": [
            {
                "option": "espionageRightOption1title",
                "justification": "espionageRightOption1justification",
                "followup": {
                    "money": 0,
                    "voters": partyVoters[politicalParty.value].VOTERS_DOWN_HIGH,
                    "integrity": -10
                }
            },
            {
                "option": "espionageRightOption2title",
                "justification": "espionageRightOption2justification",
                "followup": {
                    "money": 0,
                    "voters": 0,
                    "integrity": 10
                }
            },
            {
                "option": "espionageRightOption3title",
                "justification": "espionageRightOption3justification",
                "followup": {
                    "money": 0,
                    "voters": 0,
                    "integrity": 10
                }
            }
        ]
    }
]



const secondQuestionsRight = [
    {
        "topic": "MARKET_CRASH_RIGHT",
        "image": "/game/MARKET_CRASH_.png",
        "title": "marketCrashRightTitle",
        "description": "marketCrashRightDescription",
        "options": [
            {
                "option": "marketCrashRightOption1title",
                "justification": "marketCrashRightOption1justification",
                "followup": {
                    "money": 1000,
                    "voters": 0,
                    "integrity": 10
                }
            },
            {
                "option": "marketCrashRightOption2title",
                "justification": "marketCrashRightOption2justification",
                "followup": {
                    "money": 200,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_LOW,
                    "integrity": 0
                }
            },
            {
                "option": "marketCrashRightOption3title",
                "justification": "marketCrashRightOption3justification",
                "followup": {
                    "money": -300,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_MID,
                    "integrity": -10
                }
            },
        ]
    }
]

const secondQuestionsLeft = [
    {
        "topic": "MARKET_CRASH_LEFT",
        "image": "/game/MARKET_CRASH_.png",
        "title": "marketCrashLeftTitle",
        "description": "marketCrashLeftDescription",
        "options": [
            {
                "option": "marketCrashLeftOption1title",
                "justification": "marketCrashLeftOption1justification",
                "followup": {
                    "money": 1000,
                    "voters": 0,
                    "integrity": -10
                }
            },
            {
                "option": "marketCrashLeftOption2title",
                "justification": "marketCrashLeftOption2justification",
                "followup": {
                    "money": 200,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_LOW,
                    "integrity": 0
                }
            },
            {
                "option": "marketCrashLeftOption3title",
                "justification": "marketCrashLeftOption3justification",
                "followup": {
                    "money": -300,
                    "voters": partyVoters[politicalParty.value].VOTERS_UP_MID,
                    "integrity": 10
                }
            },
        ]
    }
]

if (politicalParty.value == 'right' || politicalParty.value == 'far-right') {
    allQuestions.splice(3, 0, ...firstQuestionsRight)
    allQuestions.splice(8, 0, ...secondQuestionsRight)
} else {
    allQuestions.splice(3, 0, ...firstQuestionsLeft)
    allQuestions.splice(8, 0, ...secondQuestionsLeft)
}

function changeQuestions() {
    moneyDown.value = false
    moneyUp.value = false
    integrityDown.value = false
    integrityUp.value = false
    votersDown.value = false
    votersUp.value = false

    elections.value = false

    justification.value = ''
    hideAnswers.value = false
    points.value = voters.value * integrity.value / totalVoters
    if (points.value >=5000) {
        electionWon.value = true
    }

    if (currentQuestionIndex.value + 1 >= 10) {
        elections.value = true
        completed.value = true
    } else {
        currentQuestionIndex.value += 1
    }

    if (currentQuestionIndex.value == 5) {
        elections.value = true
    }
}

function selectAnswer(answer) {

    // Highlight icon start 
    if (answer.followup.money > 0) {
        moneyUp.value = true
    } else if (answer.followup.money < 0) {
        moneyDown.value = true
    }

    if (answer.followup.integrity > 0) {
        integrityUp.value = true
    } else if (answer.followup.integrity < 0) {
        integrityDown.value = true
    }

    if (answer.followup.voters > 0) {
        votersUp.value = true
    } else if (answer.followup.voters < 0) {
        votersDown.value = true
    }
    // Highlight end

    money.value += answer.followup.money
    if (voters.value + answer.followup.voters < 0) {
        voters.value = 0
    } else {
        voters.value += answer.followup.voters
    }

    integrity.value += answer.followup.integrity
    if (integrity.value > 100) {
        integrity.value = 100
    }

    hideAnswers.value = true
    justification.value = answer.justification
}

</script>

<style>
@keyframes rise {
    0% {
        height: 0;
    }

    100% {
        height: 100%;
    }
}

.animate-rise {
    animation: rise 2s ease-out forwards;
}
</style>