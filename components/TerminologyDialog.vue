<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

const props = defineProps({
  term: String,
  definition: String,
})

const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}
</script>

<template>
  <span class="underline text-indigo-800 font-bold cursor-pointer" @click="openModal">
    {{ term }}
  </span>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left text-xl align-middle shadow-xl transition-all">
              <div class="mt-2">
                <div class="text-xl text-gray-500 font-lighter">
                  {{ $t(`terminology.${definition}`) }}
                </div>
              </div>

              <div class="mt-4 text-center">
                <button type="button" @click="closeModal"
                  class="rounded-md bg-gradient-to-tr from-[#6E74C2] to-[#5744A8] px-10 py-2 text-xl uppercase font-semibold text-white shadow-sm hover:bg-indigo-500 ">
                  {{ $t('tutorial.popupButton') }}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
