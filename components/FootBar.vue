<template>
    <footer class="text-gray-50 flex flex-col">
        <div class="btns bg-neutral-800 p-4 flex flex-wrap space-x-1 justify-center">
            <NuxtLink 
                    v-for="(link, index) in Links"
                    :key="index"
                    class="py-2 px-3 hover:bg-neutral-700 border-transparent border"
                    :to=link.to
                    exact-active-class="bg-neutral-700 text-white rounded hover:bg-neutral-500"
                >
                    <span>{{link.title}}</span>
                </NuxtLink>
        </div>
        <div class="copy bg-neutral-900 p-3 text-center">
            <span>&copy; PurityConference 2022</span>
        </div>
    </footer>
</template>

<script setup lang="ts">
    import navFoot from '~/mixins/navFoot'

    const Links = navFoot().Links
</script>

<style>
    *{
        transition: all 0.5s ease-in-out;
    }
</style>
