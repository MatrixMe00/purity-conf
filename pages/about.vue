<template>
    <section class="xl:container xl:m-auto">
        <!--Banner and about brief-->
        <Banner 
            title="ABOUT US" :banner-content="abtDesc" content-banner="true"
        />

        <!--About the founder-->
        <IndexAbout page="about" />

        <!--The team behind the production-->
        <div class="team py-12 px-8">
            <h1 class="text-center font-bold capitalize text-3xl mb-8">Team Members</h1>
            <div class="grid justify-center content-center gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-4">
                <Card v-for="(member, index) in team"
                    :key="index"
                    :card-data="member"
                    card="heroCard"
                    class="hover:shadow-lg hover:border-transparent bg-white ml-0"
                />
            </div>
        </div>
    </section>

    <!--Follow us tag-->
    <Follow mode="light" />
</template>

<script setup>
    useHead({
        title: "Purity Conference | About"
    })

    const team = ref([
        {
            title: "Team Member", content: "Team Role",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "walink", phone: "279284896"
            }
        },
        {
            title: "Team Member", content: "Team Role",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "walink", phone: "279284896", telegram: "tele"
            }
        },
        {
            title: "Team Member", content: "Team Role",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "walink", phone: "279284896", twitter: "twit"
            }
        },
        {
            title: "Team Member", content: "Team Role",
            social: true, socialLinks: {
                facebook: "fblink", whatsapp: "walink", phone: "279284896"
            }
        }
    ])

    const abtDesc = "Some text about us. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iste sed officia repellendus ex?"
</script>