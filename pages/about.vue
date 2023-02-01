<template>
    <section class="container mx-auto">
        <!--Banner and about brief-->
        <Banner 
            title="ABOUT US" :html-content="abtDesc" content-banner="true" :html-class="`max-w-screen-lg`"
        />

        <!--About the founder-->
        <IndexAbout page="about" />

        <!--The team behind the production-->
        <div class="team py-12 px-8 mx-2 flex flex-col items-center justify-center">
            <h1 class="text-center font-bold capitalize text-3xl mb-8">Team Members [{{team.length}}]</h1>
            <div class="grid justify-center content-center gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                <Card v-for="(member, index) in team"
                    :key="index"
                    :card-data="member"
                    :card="CardType.HERO"
                    class="hover:shadow-lg hover:border-transparent bg-white ml-0"
                />
            </div>
        </div>
    </section>

    <!--Follow us tag-->
    <Follow mode="light" />
</template>

<script setup>
    import {CardType} from "~/mixins/globalVars"
    
    useHead({
        title: "Purity Conference | About"
    })

    const team = ref([
        {
            title: "Rev. Kofi Asante", content: "Founder",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233245402938", phone: "233245402938"
            }
        },
        {
            title: "Mr. Emmanuel", content: "Team Head",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233551463006", phone: "233551463006", telegram: "tele"
            }
        },
        {
            title: "Promise Gbolomor", content: "Ast. Team Head",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233501096486", phone: "233501096486", twitter: "twit"
            }
        },
        {
            title: "Mad. Abigail", content: "General Secretary",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233243587385", phone: "233243587385"
            }
        },
        {
            title: "Michael Arko", content: "Financial Officer",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233275737016", phone: "233275737016"
            }
        },
        {
            title: "Joseph Amaning", content: "Ticketing Head",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233552251089", phone: "233552251089"
            }
        },
        {
            title: "Seth Afosah", content: "Ticketing",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233279284896", phone: "233279284896"
            }
        },
        {
            title: "Prosper Boateng", content: "Media Head",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233272824224", phone: "233272824224"
            }
        },
        {
            title: "Kelvin Aidoo", content: "Publicity Head",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233509530889", phone: "233509530889"
            }
        },
        {
            title: "Elizabeth Adzo Mensah", content: "Publicity",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233558379397", phone: "233558379397"
            }
        },
        {
            title: "Abigail Sewu", content: "Publicity",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233543085962", phone: "233543085962"
            }
        },
        {
            title: "Maxwell Boateng", content: "Publicity",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233507323622", phone: "233507323622"
            }
        },
        {
            title: "Roland Osei-Bonsu", content: "Publicity",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233242797593", phone: "233242797593"
            }
        },
        {
            title: "Emmanuel K", content: "Usher Head 1",
            social: true, socialLinks: {
                facebook: "fblink", phone: "233548710858"
            }
        },
        {
            title: "Isabella Anthony", content: "Usher Head 2",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233549184183", phone: "233549184183"
            }
        },
        {
            title: "Godswill Batse", content: "Usher",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "https://wa.me/233551307669", phone: "233551307669"
            }
        }
    ])

    const abtDesc = "Purity Conference is a conference organized, especially for the youth, to preach and impart purity into the generation. The aim of our conferences is to impart each individual with the desire to remain pure for the Christ."
                    + "<br>Though it might not look it, but there is so much the future suffers if the current generation is not cautioned on the relevance of being pure."
</script>