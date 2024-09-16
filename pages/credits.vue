<template>
    <div class="relative isolate px-6 pt-5 lg:px-8">
        <div class="mx-auto max-w-2xl ">
            <div class="text-center">
                <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">{{ $t('credits.title') }}</h1>
                <p class="text-gray-600 max-w-xs mx-auto text-xl mt-2">{{ $t('credits.description') }}</p>

                <img src="/credits.png" class="mx-auto max-w-80 lg:max-w-96 h-auto mt-10 p-6">

                <div class="py-10  mt-10 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    {{  $t('credits.team') }}
                </div>
                <div class="max-w-xs mx-auto my-6">
                    <div class="bg-gray-100 rounded-lg py-6">
                        <div class="py-3">
                            <div class="text-xl font-light">Teodor Kozhukov</div>
                            <div class="text-xl font-extrabold">
                                {{  $t('credits.game_designer') }}
                            </div>
                        </div>
                        <div class="py-3">
                            <div class="text-xl font-light">Georgi Kirilov</div>
                            <div class="text-xl font-extrabold">
                                {{  $t('credits.developer') }}
                            </div>
                        </div>
                        <div class="py-3">
                            <div class="text-xl font-light">Eleonora Predeva</div>
                            <div class="text-xl font-extrabold">
                                {{  $t('credits.ui_designer') }}
                            </div>
                        </div>
                        <div class="py-3">
                            <div class="text-xl font-light">Nicholas Hatzis</div>
                            <div class="text-xl font-extrabold">
                                {{  $t('credits.narrative_designer') }}
                            </div>
                        </div>
                        <div class="py-3">
                            <div class="text-xl font-light">Raya Tsvetkova</div>
                            <div class="text-xl font-extrabold">
                                {{  $t('credits.project_manager') }}
                            </div>
                        </div>
                        <div class="py-3">
                            <div class="text-xl font-light">Ali Honaramiz</div>
                            <div class="text-xl font-extrabold">
                                {{  $t('credits.project_manager') }}
                            </div>
                        </div>
                        <div class="py-3">
                            <div class="text-xl font-light">Andrej Ignatov</div>
                            <div class="text-xl font-extrabold">
                                {{  $t('credits.community_manager') }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="py-10 text-5xl mt-10 font-bold tracking-tight text-gray-900 sm:text-5xl">
                    {{  $t('credits.partners') }}
                </div>
                <div class="max-w-xs mx-auto my-6">
                    <div class="bg-gray-100 rounded-lg py-6">
                        <div class="py-3">
                            <div class="text-xl font-light">Komm!unity</div>
                            <div class="text-xl font-extrabold">
                                {{  $t('credits.AUSTRIA') }}
                            </div>
                        </div>
                        <div class="py-3">
                            <div class="text-xl font-light">The Future Now Association</div>
                            <div class="text-xl font-extrabold">
                                {{  $t('credits.BULGARIA') }}
                            </div>
                        </div>
                        <div class="py-3">
                            <div class="text-xl font-light">Celje Youth Center</div>
                            <div class="text-xl font-extrabold">
                                {{  $t('credits.SLOVENIA') }}
                            </div>
                        </div>
                        <div class="py-3">
                            <div class="text-xl font-light">European Dialogue</div>
                            <div class="text-xl font-extrabold">
                                {{  $t('credits.SLOVAKIA') }}
                            </div>
                        </div>
                        <div class="py-3">
                            <div class="text-xl font-light">Palacky University in Olomouc</div>
                            <div class="text-xl font-extrabold">
                                {{  $t('credits.CZECH_REPUBLIC') }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="py-10  mt-10 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    {{  $t('credits.resources') }}
                </div>
                <div class="max-w-xs mx-auto my-6">
                    <div class="bg-gray-100 rounded-lg py-6">
                        <div class="py-3">
                            <div class="text-xl font-light">Storyset by Freepik</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mx-auto my-10">
            <div class="mx-auto text-center max-w-xs mb-6 text-lg">
                {{  $t('credits.license') }}
            </div>
            <img class="w-auto mx-auto size-1/2" src="/EU_Flag.png" alt="">
        </div>
    </div>
</template>
<script setup>
</script>