<template>
  <NavBar @open-ticket-modal="openTicketModal = true" />
  <main>
    <LazyNuxtPage />
  </main>
  <FootBar />

  <LazyTicket v-if="openTicketModal" @close-ticket-modal="openTicketModal = false" />
</template>

<script setup>
  // import './assets/css/main.css'
  import "@fortawesome/fontawesome-free/js/all"

  let openTicketModal = ref(false)
</script>

<style>
.main{
  max-width: 70rem;
  margin: auto;
}

body{
  background-color: ghostwhite;
  position: relative;
}
</style>