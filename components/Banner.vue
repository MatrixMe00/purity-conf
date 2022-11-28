<template>
    <div v-if="contentBanner" class="banner text-center space-y-4 bg-gradient-to-br from-blue-600 to-blue-700 flex flex-col justify-end p-8 pt-28 sm:pt-36 lg:pt-48 items-center text-white">
        <h1 class="text-4xl font-bold">{{title}}</h1>
        <p class="text-lg">{{bannerContent}}</p>
    </div>
    <div v-else class="p-8 pt-28 md:pt-36 lg:pt-28 bg-gradient-to-br
        from-blue-600 to-blue-700 text-white flex items-end justify-center">
        <div class="text-4xl font-bold">
            <h1>{{title}}</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
    interface pageProps{
        title: string,
        bannerContent?: string,
        contentBanner?: boolean
    }

    const pageProp = defineProps<pageProps>()
</script>