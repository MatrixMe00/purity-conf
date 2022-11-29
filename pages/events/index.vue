<template>
    <section class="hidden lg:block xl:container xl:m-auto">
        <Card
            :card="CardType.CARO"
            :card-data="caroselCard"
        />
    </section>

    <section class="lg:hidden xl:container xl:m-auto">
        <Banner title="EVENTS" />
    </section>

    <section class="xl:container xl:m-auto py-6 space-y-6">
        <EvEvents
            v-if="liveEvent().length > 0"
            :array-data="liveEvent()"
            title="Live Events"
        />

        <EvEvents
            :array-data="comingSoon()"
            title="Coming Soon"
            no-data-message="There are no events coming up at the moment"
        />

        <EvEvents
            :array-data="pastEvent()"
            title="Past Events"
            no-data-message="Please wait for the release of our first event"
        />
    </section>
</template>

<script setup lang="ts">
    import {CardType} from "~/mixins/globalVars"

    useHead({
        title: "Purity Conference | Events"
    })

    const cards = ref([
        {
            imgUrl:"", title:"Card Title1", content: "Content to show. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odio?",
            btnLink: true, linkUrl: "", otherData:{
                month: "March", year: "2023", day: "12", tag: "coming", guest: "Guest1 x Guest2"
            }
        },
        {
            imgUrl:"", title:"Card Title2", content: "Content to show. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odio?",
            btnLink: true, linkUrl: "", otherData:{
                month: "April", year: "2021", day: "15", tag: "past", guest: "Guest1"
            }
        },
        {
            imgUrl:"", title:"Card Title3", content: "Content to show. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odio?",
            btnLink: true, linkUrl: "", otherData:{
                month: "March", year: "2021", day: "23", tag: "live", guest: "Guest2"
            }
        },
        {
            imgUrl:"", title:"Card Title4", content: "Content to show. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odio?",
            btnLink: true, linkUrl: "", otherData:{
                month: "November", year: "2022", day: "12", tag: "month", guest: "Long Guest Name"
            }
        }
    ])

    const caroselCard = ref({
        imgUrl:"gallery/gal9.jpg", title:"This November", content: "Some Content to show. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odio?",
        btn: true, btnText: "Some Button"
    })

    function comingSoon(){
        return cards.value.filter(card => card.otherData["tag"] != 'past' && card.otherData["tag"] != 'live')
    }

    function pastEvent(){
        return cards.value.filter(card => card.otherData["tag"] == 'past')
    }

    function liveEvent(){
        return cards.value.filter(card => card.otherData["tag"] == 'live')
    }
</script>

<style>

</style>