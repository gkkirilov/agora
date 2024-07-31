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
    font-family: Sofia Sans, serif;
}


.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>