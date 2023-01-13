<template>
    <Carousel :carosel="carouselCards" />
    <IndexAbout page="home" />
    <IndexHero />
    <IndexEvents />
    <Follow :mode="FollowMode.LIGHT" />
</template>

<script setup lang="ts">
    import {FollowMode, caroselSpeed} from "~/mixins/globalVars"
    import {carouselCards} from "~/composables/carousels"

    useHead({
        title: "Purity Conference | Home",
        meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'This is the official website for the Purity Conference Team. You can view our events, make purchase of tickets and even become a sponsor with this web face.',
			},
		],
    })
</script>