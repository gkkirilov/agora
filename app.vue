<template>
  <div class="flex min-h-screen flex-col">
    <div class="flex-1">
      <Header />
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
<script setup>
useHead({
  title: 'Agora - The Election Game',
  meta: [
      { name: 'description', content: 'Agora' }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
})
</script>
<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

body {
    font-family: Signika, serif;
}
</style>