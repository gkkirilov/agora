<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1" :class="route.path == '/' ? 'mx-auto' : ''">
        <NuxtLink href="/" class="-m-1.5 p-1.5 z-50">
          <span class="sr-only">Agora - The election game</span>
          <img class="w-auto transition-all" :class="route.path == '/' ? 'h-16 lg:h-12' : 'h-8'" src="/logo.svg"
            alt="" />
        </NuxtLink>
      </div>
      <ClientOnly>
        <Menu as="div" class="relative inline-block text-left z-50 lg:block" :class="route.path == '/' ? 'hidden' : ''">
          <div>
            <MenuButton
              class="inline-flex w-full justify-center items-center rounded-md px-2 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 group">
              <LanguageIcon class="h-6 w-6 group-hover:text-black/70" aria-hidden="true" />
              <ChevronDownIcon class="size-4 group-hover:text-black/70 ml-1" aria-hidden="true" />
            </MenuButton>
          </div>

          <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <MenuItems
              class="absolute right-0 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }" v-for="language in languages">
                <button :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-4 py-2 text-sm',
                ]" @click="changeLocale(language.isocode)">
                  {{ language.name }}
                </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </ClientOnly>
    </nav>
  </header>
</template>

<script setup>

import {
  LanguageIcon,
  ChevronDownIcon,
} from '@heroicons/vue/24/outline'

const route = useRoute()
const { locale, setLocale } = useI18n()

const languages = [
  { name: 'English', isocode: 'en' },
  { name: 'Slovak', isocode: 'sk', },
  { name: 'Czech', isocode: 'cs' },
  { name: 'German', isocode: 'de' }
]

const indexStore = useIndexStore()
const { language } = storeToRefs(indexStore)
setLocale(language.value)

async function changeLocale(isocode) {
  await setLocale(isocode)
  language.value = isocode
  console.log(locale.value)
}
</script>