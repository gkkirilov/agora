<template>
    <div class="border-t-[1px] border-gray-200 w-screen max-w-7xl lg:mx-auto flex flex-col">
        <div class="pt-5 pb-3 flex justify-between px-9">
            <div class="text-sm font-medium text-[#6E74C2] gap-x-2 flex">
                <NuxtLink to="/" class="inline-block">
                    {{ $t('footer.home') }}
                </NuxtLink>
                <NuxtLink to="/credits" class="inline-block">
                    {{ $t('footer.credits') }}
                </NuxtLink>
                <a href="https://www.agoranx.eu/en/about/project" target="_blank" class="inline-block">
                    {{ $t('footer.about') }}
                </a>
            </div>
            <div class="flex gap-x-3">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-indigo-500 my-0.5">
                    <title>Facebook</title>
                    <path
                        d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  class="w-6 h-6 fill-indigo-500">
                    <title>YouTube</title>
                    <path
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 stroke-indigo-500">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
            </div>
        </div>
        <div class="px-9 text-xs font-extralight mb-2 text-center">
            {{ $t('footer.copyright') }}
        </div>
    </div>
</template>
<script setup>
</script>