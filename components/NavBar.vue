<template>
    <nav class="flex fixed z-50 w-full top-0 justify-between md:flex-col lg:flex-row items-center bg-black/30 hover:bg-black/70 text-white p-4
    md:border-b-neutral-500 md:pb-8 md:mb-8 shadow">
        <div class="logo flex border p-3 md:py-2 md:px-3 md:border-0 text-2xl font-semibold space-y-1 md:space-y-0 md:space-x-1">
            <h3>
                P<span class="hidden md:inline">urity</span>
            </h3>
            <h3>
                C<span class="hidden md:inline">onference</span>
            </h3>
        </div>
        <div class="nav-links md:flex justify-end items-center md:w-full md:justify-between lg:justify-end"
            :class="[hamClicked ? 'flex-col right-5 absolute top-full bg-inherit w-1/2 space-y-4 p-1':'hidden']"
        >
            <div class="links lg:mr-6"
                :class="[hamClicked ? 'flex flex-col w-full':'']"
            >
                <NuxtLink 
                    v-for="(link, index) in Links"
                    :key="index"
                    class="py-2 px-3 hover:bg-neutral-800 border-transparent border"
                    :class="hamClicked ? '':''"
                    :to=link.to
                    exact-active-class="bg-neutral-900 rounded text-white hover:bg-neutral-500"
                    @click="[hamClicked = false]"
                >
                    <span>{{link.title}}</span>
                </NuxtLink>
            </div>
            <button class="py-2 px-3 border border-white hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                :class="[hamClicked ? 'w-full':'']"
                @click="[hamClicked = false]"
            >Get a ticket</button>
        </div>
        <div class="ham md:hidden cursor-pointer" @click="hamClicked = !hamClicked">
            <span class="w-8 h-1 block bg-neutral-100 m-1"
                :class="[hamClicked ? 'w-6':'']"
            ></span>
            <span class="w-8 h-1 block bg-neutral-100 m-1"></span>
            <span class="w-8 h-1 block bg-neutral-100 m-1"
                :class="[hamClicked ? 'w-6':'']"
            ></span>
        </div>
    </nav>
</template>

<script setup lang="ts">
    let hamClicked = ref(false);
    const Links = ref([
        {title:"Home", to:"/"},
        {title:"About Us", to:"/about"},
        {title:"Gallery", to:"/gallery"},
        {title:"Events", to:"/events"},
        {title:"Sponsor", to:"/sponsor"}
    ]);

    interface compProps{

    }

    const props = defineProps<compProps>()
</script>

<style scoped>
    .router-link-active:hover{
        --tw-bg-opacity: 1;
        background-color: rgb(115 115 115 / var(--tw-bg-opacity));
    }
</style>