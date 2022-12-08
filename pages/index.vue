<template>
    <Carousel />
    <IndexAbout page="home" />
    <IndexHero />
    <IndexEvents />
    <Follow :mode="FollowMode.LIGHT" />
</template>

<script setup lang="ts">
    import {FollowMode} from "~/mixins/globalVars"
    useHead({
        title: "Purity Conference | Home"
    })
</script>