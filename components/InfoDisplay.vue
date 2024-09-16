


<template>
    <div>
      <div class="flex max-w-xs mx-auto justify-between gap-x-2 items-center text-lg font-light bg-gray-100 rounded-md min-w-xs">
        <div class="flex items-center font-medium p-2 cursor-pointer"
          :class="{ ' bg-white rounded z-50': infoIndex === 0 }"
          @click="showInfo(0)">
          <img src="/icons/partyIcon.svg" class="size-9 mb-1" />
          {{ $t('compass.' + politicalParty) }}
        </div>
        <div class="flex flex-row gap-x-2">
          <div class="flex items-center flex-col text-sm font-medium p-2 gap-x-1 cursor-pointer"
            :class="{ ' bg-white rounded z-50': infoIndex === 1 }" v-show="infoIndex >= 1"
            @click="showInfo(1)">
            <svg width="30" height="30" viewBox="0 0 30 30" class="size-7  fill-indigo-900"
              :class="{ '!fill-green-600': moneyUp, '!fill-red-600': moneyDown }" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 4.95001C3.06 4.95001 2.5 5.51001 2.5 6.20001V18.7C2.5 19.39 3.06 19.95 3.75 19.95H26.25C26.94 19.95 27.5 19.39 27.5 18.7V6.20001C27.5 5.51001 26.94 4.95001 26.25 4.95001H3.75ZM6.14014 7.45001H23.8599C23.9531 7.71289 24.1039 7.95166 24.3011 8.1489C24.4984 8.34613 24.7371 8.49688 25 8.59015V16.3099C24.7371 16.4031 24.4984 16.5539 24.3011 16.7511C24.1039 16.9484 23.9531 17.1871 23.8599 17.45H6.14014C6.04687 17.1871 5.89612 16.9484 5.69888 16.7511C5.50164 16.5539 5.26288 16.4031 5 16.3099V8.59015C5.26288 8.49688 5.50164 8.34613 5.69888 8.1489C5.89612 7.95166 6.04687 7.71289 6.14014 7.45001ZM15 8.70001C14.0054 8.70001 13.0516 9.0951 12.3483 9.79836C11.6451 10.5016 11.25 11.4555 11.25 12.45C11.25 13.4446 11.6451 14.3984 12.3483 15.1017C13.0516 15.8049 14.0054 16.2 15 16.2C15.9946 16.2 16.9484 15.8049 17.6516 15.1017C18.3549 14.3984 18.75 13.4446 18.75 12.45C18.75 11.4555 18.3549 10.5016 17.6516 9.79836C16.9484 9.0951 15.9946 8.70001 15 8.70001ZM8.75 11.2C8.06 11.2 7.5 11.7588 7.5 12.45C7.5 13.1413 8.06 13.7 8.75 13.7C9.44 13.7 10 13.1413 10 12.45C10 11.7588 9.44 11.2 8.75 11.2ZM21.25 11.2C20.56 11.2 20 11.7588 20 12.45C20 13.1413 20.56 13.7 21.25 13.7C21.94 13.7 22.5 13.1413 22.5 12.45C22.5 11.7588 21.94 11.2 21.25 11.2ZM4.98779 22.45L24.0356 27.4109C24.7044 27.5847 25.3853 27.1825 25.5591 26.515L26.6187 22.45H24.0356L23.7402 23.5755C23.179 23.6243 22.6722 23.9235 22.356 24.3885L14.9097 22.45H4.98779Z" />
            </svg>
            {{ money }}
          </div>
          <div class="flex items-center flex-col text-sm font-medium p-2 gap-x-1 cursor-pointer"
            :class="{ ' bg-white rounded z-50': infoIndex === 2 }" v-show="infoIndex >= 2"
            @click="showInfo(2)">
            <svg width="31" height="30" viewBox="0 0 31 30" class="size-7 fill-indigo-900"
              :class="{ '!fill-green-600': votersUp, 'fill-red-600': votersDown }" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_213_1754)">
                <path d="M15.5 5C14.3397 5 13.2269 5.46094 12.4064 6.28141C11.5859 7.10188 11.125 8.21468 11.125 9.375C11.125 10.5353 11.5859 11.6481 12.4064 12.4686C13.2269 13.2891 14.3397 13.75 15.5 13.75C16.6603 13.75 17.7731 13.2891 18.5936 12.4686C19.4141 11.6481 19.875 10.5353 19.875 9.375C19.875 8.21468 19.4141 7.10188 18.5936 6.28141C17.7731 5.46094 16.6603 5 15.5 5ZM6.125 8.75C5.2962 8.75 4.50134 9.07924 3.91529 9.66529C3.32924 10.2513 3 11.0462 3 11.875C3 12.2854 3.08083 12.6917 3.23788 13.0709C3.39492 13.45 3.62511 13.7945 3.91529 14.0847C4.50134 14.6708 5.2962 15 6.125 15C6.53538 15 6.94174 14.9192 7.32089 14.7621C7.70003 14.6051 8.04453 14.3749 8.33471 14.0847C8.62489 13.7945 8.85508 13.45 9.01212 13.0709C9.16917 12.6917 9.25 12.2854 9.25 11.875C9.25 11.4646 9.16917 11.0583 9.01212 10.6791C8.85508 10.3 8.62489 9.95547 8.33471 9.66529C8.04453 9.37511 7.70003 9.14492 7.32089 8.98788C6.94174 8.83083 6.53538 8.75 6.125 8.75ZM24.875 8.75C24.0462 8.75 23.2513 9.07924 22.6653 9.66529C22.0792 10.2513 21.75 11.0462 21.75 11.875C21.75 12.2854 21.8308 12.6917 21.9879 13.0709C22.1449 13.45 22.3751 13.7945 22.6653 14.0847C23.2513 14.6708 24.0462 15 24.875 15C25.2854 15 25.6917 14.9192 26.0709 14.7621C26.45 14.6051 26.7945 14.3749 27.0847 14.0847C27.3749 13.7945 27.6051 13.45 27.7621 13.0709C27.9192 12.6917 28 12.2854 28 11.875C28 11.0462 27.6708 10.2513 27.0847 9.66529C26.4987 9.07924 25.7038 8.75 24.875 8.75ZM15.5 16.25C12.58 16.25 6.75 17.7163 6.75 20.625V23.75C6.75 24.44 7.31 25 8 25H23C23.69 25 24.25 24.44 24.25 23.75V20.625C24.25 17.7163 18.42 16.25 15.5 16.25ZM5.37305 17.5659C3.3968 17.8709 0.5 19.2363 0.5 20.8813V23.75C0.5 24.44 1.06 25 1.75 25H4.25V20.625C4.25 19.4237 4.6818 18.4159 5.37305 17.5659ZM25.627 17.5659C26.3182 18.4159 26.75 19.4237 26.75 20.625V25H29.25C29.94 25 30.5 24.44 30.5 23.75V20.8813C30.5 19.2363 27.6032 17.8709 25.627 17.5659Z" />
              </g>
              <defs>
                <clipPath id="clip0_213_1754">
                  <rect width="30" height="30" stroke="currentColor" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
            {{ displayedVoters }}
          </div>
          <div class="flex items-center flex-col text-sm font-medium p-2 gap-x-1 cursor-pointer"
            :class="{ ' bg-white rounded z-50': infoIndex === 3 && isOpen }" v-show="infoIndex >= 3"
            @click="showInfo(3)">
            <svg width="30" height="30" viewBox="0 0 30 30" class="size-7 fill-indigo-900"
              :class="{ '!fill-green-600': integrityUp, 'fill-red-600': integrityDown }" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5C14.5615 5.00035 14.1308 5.11603 13.7511 5.33543C13.3714 5.55483 13.0562 5.87024 12.8369 6.25H6.25H3.75C3.06 6.25 2.5 6.81 2.5 7.5C2.5 8.19 3.06 8.75 3.75 8.75H5L0 18.75C0 22.2013 2.79875 25 6.25 25C9.70125 25 12.5 22.2013 12.5 18.75L7.5 8.75H12.8394C13.0584 9.1294 13.3733 9.44458 13.7525 9.66396C14.1317 9.88334 14.5619 9.99923 15 10C15.4385 9.99965 15.8692 9.88397 16.2489 9.66457C16.6285 9.44517 16.9438 9.12976 17.1631 8.75H22.5L17.5 18.75C17.5 22.2013 20.2987 25 23.75 25C27.2013 25 30 22.2013 30 18.75L25 8.75H26.25C26.94 8.75 27.5 8.19 27.5 7.5C27.5 6.81 26.94 6.25 26.25 6.25H17.1606C16.9416 5.8706 16.6267 5.55542 16.2475 5.33604C15.8683 5.11666 15.4381 5.00077 15 5ZM6.25 11.2769L9.98535 18.75H2.51465L6.25 11.2769ZM23.75 11.2769L27.4854 18.75H20.0146L23.75 11.2769Z" />
            </svg>
            {{ integrity }}%
          </div>
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
                      class="rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-10 py-2 text-xl uppercase font-semibold text-white shadow-sm"
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
</template>

<script setup>
import { ref, computed } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

const props = defineProps({
  politicalParty: String,
  money: Number,
  voters: Number,
  integrity: Number,
  moneyUp: Boolean,
  moneyDown: Boolean,
  votersUp: Boolean,
  votersDown: Boolean,
  integrityUp: Boolean,
  integrityDown: Boolean,
  isFirstElection: Boolean, // Add this prop
})

const infoIndex = ref(0)
const isOpen = ref(true)

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

const displayedVoters = computed(() => {
  return props.isFirstElection ? Math.floor(props.voters / 100) : props.voters
})

const showInfo = (index) => {
  infoIndex.value = index;
  isOpen.value = true;
};

const showNextInfo = () => {
  if (infoIndex.value + 1 >= 4) {
    isOpen.value = false
    return
  }

  infoIndex.value += 1
}
</script>