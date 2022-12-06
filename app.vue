<template>
  <noscript class="fixed bg-red-500 top-24 md:top-36 lg:top-24 text-white p-4">
    Sorry, but this page requires javascript enabled to run effectively. All JavaScript required functionality is currently not available.
  </noscript>
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