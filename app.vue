<template>
  <NavBar />
  <main>
    <NuxtPage />
  </main>
  <FootBar />
</template>

<script setup>
// import './assets/css/main.css'
import "@fortawesome/fontawesome-free/js/all"
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

.main{
  max-width: 70rem;
  margin: auto;
}

section:not(.carousel){
  max-width: 1280px !important;
  margin-left: auto;
  margin-right: auto;
}
</style>