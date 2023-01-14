<template>
    <section class="m-4 xl:container xl:mx-auto">
        <div class="lg:mx-12 border shadow-md py-12 px-7 flex flex-col sm:justify-between md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-16">
            <p class="font-semibold text-2xl md:text-4xl">Grab Your Ticket</p>
            <button class="border w-1/3 py-4 px-3 border-blue-500 hover:bg-blue-500 hover:text-white sm:w-1/6 text-lg md:text-xl" onclick="document.getElementById('ticketButton').click()">Get a Ticket</button>
        </div>
    </section>

    <section class="flex flex-col p-8 bg-gradient-to-b from-blue-300 via-indigo-400 to-blue-300 
        xl:container xl:mx-auto"
    >
        <h1 class="text-4xl font-bold text-center text-white pb-4">Our Speakers</h1>
        <div class="heros grid gap-2 md:gap-3 lg:gap-4 md:grid-cols-2 lg:grid-cols-3 content-center justify-center py-8">
            <!--Hero cards-->
            <Card v-for="(c, index) in heros" 
                :key="index" 
                :card="`heroCard`"
                :card-data="c"
            />
        </div>
    </section>
</template>

<script setup>
    const heros = ref([
        {title: "Speaker Name", content: "Purity Conference 2021"},
        {title: "Speaker Name", content: "Purity Conference 2022"},
        {title: "Speaker Name", content: "Purity Conference 2022"}
    ])
</script>

<style scoped>
    
</style>