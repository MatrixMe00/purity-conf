<template>
  <NavBar @open-ticket-modal="openTicketModal = true" />
  <main>
    <NuxtPage />
  </main>
  <FootBar />

  <Ticket v-if="openTicketModal" @close-ticket-modal="openTicketModal = false" />
</template>

<script setup>
  // import './assets/css/main.css'
  import "@fortawesome/fontawesome-free/js/all"

  let openTicketModal = ref(false)
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

body{
  background-color: ghostwhite;
  position: relative;
}
</style>