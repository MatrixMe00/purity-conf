<template>
    <section class="xl:container xl:mx-auto">
        <div class="banner text-center space-y-4 bg-gradient-to-br from-blue-600 to-blue-700 flex flex-col justify-end p-8 pt-28 sm:pt-36 lg:pt-48 items-center text-white">
            <h1 class="text-4xl font-bold">Become A Sponsor</h1>
            
            <!--Banner Buttons-->
            <div class="py-4 flex justify-center flex-wrap items-center sm:gap-10 gap-6">
                <button class="border py-3 px-4 rounded hover:shadow-md text-white bg-gradient-to-tr from-blue-700 
                    hover:via-blue-700 hover:to-blue-700 via-blue-600 to-blue-500" @click="sponsorBoxType='agency'">
                    Agency Sponsors
                </button>
                <button class="border py-3 px-4 rounded hover:shadow-md text-white bg-gradient-to-tr from-sky-700 
                    hover:via-sky-700 hover:to-sky-700 via-sky-600 to-sky-500" @click="sponsorBoxType='individual'">
                    Individual Sponsors
                </button>
            </div>
            <!-- End of banner buttons -->
        </div>
    </section>

    <section class="max-w-screen-lg mx-auto md:px-6 bg-white">
        <h1 class="text-lg font-semibold p-4 text-neutral-600">Featured sponsors</h1>
        <div class="grid sm:grid-cols-2 gap-2 lg:gap-4 lg:grid-cols-3 xl:grid-cols-4 p-2 sm:px-4">
            <Card 
                v-for="(card, index) in sponsorBoxComp"
                :key="index"
                :card="CardType.SPONSOR"
                :card-data="card"
            />
        </div>
    </section>

    <section class="xl:container xl:mx-auto px-2 sm:px-4 md:px-6 bg-neutral-100 py-10 w-full">
        <form action="" class="bg-white rounded border p-4 max-w-screen-lg mx-auto" @submit.prevent="submitForm()">
            <header class="mb-4" v-if="formComps.messageType != MessageType.SUCCESS">
                <h2 class="text-[1.075rem] sm:text-lg text-center lg:text-left xl:text-2xl md:text-xl lg:text-xl font-bold">Fill the form below to become a sponsor with us</h2>
            </header>

            <!-- Caption message -->
            <p class="border p-2 mb-4 text-center cursor-pointer bg-gradient-to-r sticky top-4 z-10"
                :class="[
                    formComps.messageType == MessageType.NEUTRAL ? 'from-neutral-50 to-gray-50':'',
                    formComps.messageType == MessageType.ERROR ? 'from-red-500 via-rose-600 to-red-500 text-white':'',
                    formComps.messageType == MessageType.SUCCESS ? 'from-green-500 via-green-600 text-white to-green-500':''
                ]"
                v-if="formComps.showMessage"
                @click="formComps.showMessage=false"
            >{{formComps.message}}</p>
            <!-- End of caption message -->

            <section v-if="formComps.messageType == MessageType.SUCCESS"
                class="py-4 px-6 border mt-1 flex justify-center items-center"
            >
                <div class="flex justify-center py-8 items-center flex-col">
                    <span class="text-7xl w-32 flex justify-center items-center h-32 border-[4px] border-green-600 text-green-600 rounded-full">
                        <i class="fas fa-handshake"></i>
                    </span>
                    <p class="mt-5 text-xl text-center font-semibold">Thank You for becoming a sponsor for the Purity Conference Project</p>
                    <p class="text-center mt-6">A link to the sponsors whatsapp group has been sent to you via sms</p>
                </div>
            </section>
            <section v-else class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="grid content-end">
                    <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="sponType">
                      Who would you want to sponsor as?
                    </label>
                    <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                        leading-tight focus:outline-none focus:shadow-outline" 
                        id="sponType" name="sponType" v-model="form.sponsor" @change="sponsorType=''">
                        <option value="">Select a mode</option>
                        <option v-for="(opt, index) in Object.keys(spons)"
                            :key="index"
                            :value="opt"
                        >
                           An {{opt}}
                        </option>
                    </select>
                </div>
                <div class="grid content-end">
                    <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="sponType">
                      Select Sponsorship Type
                    </label>
                    <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                        leading-tight focus:outline-none focus:shadow-outline" 
                        id="sponType" name="sponType" v-model="sponsorType">
                        <option value="">Select a type</option>
                        <option v-for="option in spons[form.sponsor]" :key="option.value" :value="option.value">
                            {{option.title}}
                        </option>
                    </select>
                </div>
                <div class="grid content-end" v-if="form.sponsor == 'individual'">
                    <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="fname">
                      Firstname
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                        leading-tight focus:outline-none focus:shadow-outline" 
                        id="fname" name="fname" v-model="form.fname" type="text" placeholder="Firstname">
                </div>
                <div class="grid content-end" v-if="form.sponsor == 'individual'">
                    <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="lname">
                      Lastname
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                        leading-tight focus:outline-none focus:shadow-outline" 
                        id="lname" name="lname" v-model="form.lname" type="text" placeholder="Lastname">
                </div>
                <div class="grid content-end" v-if="form.sponsor == 'agency'">
                    <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="agency">
                      Agency Name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                        leading-tight focus:outline-none focus:shadow-outline" 
                        id="agency" name="agency" v-model="form.agency" type="text" placeholder="Name of Agency">
                </div>
                <div class="grid content-end">
                    <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="email">
                      Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                        leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" name="email" v-model="form.email" type="email" placeholder="Email">
                </div>
                <div class="grid content-end">
                    <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="phone">
                      Phone Number
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                        leading-tight focus:outline-none focus:shadow-outline" 
                        id="phone" name="phone" v-model="form.phone" type="tel" placeholder="Phone Number" maxlength="13" minlength="10">
                </div>
                <div class="grid content-end" v-if="form.sponsor == `agency`">
                    <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="location">
                      Location of Agency
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                        leading-tight focus:outline-none focus:shadow-outline" 
                        id="location" name="location" v-model="form.location" type="text" placeholder="Your agency's location">
                </div>
                <div class="grid content-end">
                    <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="amount">
                      Amount per month
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-500 hover:text-neutral-700
                        leading-tight focus:outline-none focus:shadow-outline" 
                        id="amount" name="amount" type="text" readonly :value="amount">
                </div>
                <div class="flex items-center md:col-span-2 lg:col-span-3 xl:col-span-4">
                    <input class="" 
                        id="paynow" name="paynow" type="checkbox" v-model="form.paynow">
                    <label class="inline text-gray-700 ml-1" for="paynow">
                      Make Payment when I click the submit button
                    </label>
                </div>
                <div class="md:col-span-2 lg:col-span-3 xl:col-span-4 flex flex-wrap md:flex-nowrap gap-2">
                    <button type="submit" class="border hover:border-blue-600 w-full lg:w-44 xl:w-52 rounded py-2 px-4 text-white bg-gradient-to-tr from-blue-700 
                    via-blue-600 to-blue-500 hover:shadow-md">Submit</button>
                    <button type="button" class="border py-2 px-4 rounded hover:border-red-600 hover:shadow-md text-white 
                        bg-gradient-to-tr from-red-700 via-red-600 w-full lg:w-44 xl:w-52 to-red-500"
                        @click="[resetForm(form), resetForm(formComps)]"
                    >Clear</button>
                </div>
            </section>
        </form>
    </section>

    <section class="container mx-auto items-end lg:justify-center p-4 gap-6 md:gap-8 text-lg text-center grid"
    >
        <div class="space-y-2 bg-white shadow rounded hover:shadow-md p-4 h-max max-w-screen-lg">
            <h1 class="font-bold text-2xl">What is the benefit of Purity Conference?</h1>
            <p>Since its creation in 2021, Purity Conference has done something in the lives of youths and some other text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id alias esse dolores consequuntur culpa tempore rerum labore similique, in, vero doloribus soluta. Quaerat eius quae tempora alias est error perspiciatis.</p>
        </div>
        <div class="space-y-2 bg-white shadow rounded hover:shadow-md p-4 h-max max-w-screen-lg">
            <h1 class="font-bold text-2xl">Why do we need the money?</h1>
            <p>Without our generous sponsors over the years, Purity Conference would not be able to do something and some other text to follow. lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error odio unde dolor quasi in quam excepturi magni quaerat, modi, accusamus quibusdam rerum alias iusto nobis delectus? Voluptatem voluptate, modi nobis autem assumenda repudiandae mollitia fugit.</p>
        </div>
        <div class="space-y-2 bg-white shadow rounded hover:shadow-md p-4 h-max max-w-screen-lg">
            <h1 class="font-bold text-2xl">What are we going to use your money for?</h1>
            <p>Your donations would be used for this, this and that. Some long text to add up in the Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nihil ea, ipsum aut aliquam ipsa sapiente?</p>
        </div>
    </section>
</template>

<script setup lang="ts">
    import {resetForm, MessageType} from "~/mixins/globalForms"
    import {submitForm, form, formComps} from "~/mixins/sponsorForm"
    import {CardType} from "~/mixins/globalVars"

    useHead({
        title: "Purity Conference | Sponsor Us"
    })

    const cardInfo = ref([
        {
            title:"Sponsor Name", otherData:{
                type: "individual", location: ""
            }
        },
        {
            title:"Agency Name", otherData:{
                type: "agency", location: "Accra"
            }
        },
        {
            title:"Agency Name", otherData:{
                type: "agency", location: "Kumasi"
            }
        },
        {
            title:"Sponsor Name", otherData:{
                type: "individual", location: ""
            }
     }
    ])

    //all sponsorship types
    const spons = ref<string|any>({
        individual: [
            {value: "bronze", title: "Bronze Sponsor", amount: 20},
            {value: "silver", title: "Silver Sponsor", amount: 50},
            {value: "gold", title: "Gold Sponsor", amount: 100}
        ],
        agency : [
            {value: "bronze", title: "Bronze Sponsor", amount: 100},
            {value: "silver", title: "Silver Sponsor", amount: 200},
            {value: "gold", title: "Gold Sponsor", amount: 300},
            {value: "platinum", title: "Platinum Sponsor", amount: 400}
        ]
    })

    //get which sponsors to show
    const sponsorBoxType = ref(Object.keys(spons.value)[0])
    const sponsorBox = ref()

    //computed variable to track the total price for the tickets bought
    var amount = computed({
        set(val:string){
            form.value.amount = parseFloat(val)
            if(form.value.amount < 0){
                form.value.amount = 0.0
            }
        },
        get(){
            return "GH¢ " + form.value.amount.toFixed(2) + " per month"
        }
    })

    const sponsorBoxComp = computed(() => {
        sponsorBox.value = cardInfo.value.filter(card => card.otherData?.type == sponsorBoxType.value)
        return sponsorBox.value
    })

    //computed variable to check the type of sponsorship
    const sponsorType = computed({
        set(val:string){
            if(form.value.sponsor != ''){
                form.value.sponsorType = val
                const spon = spons.value[form.value.sponsor].filter(sponsor => sponsor.value == val)
                form.value.amount = val != '' ? spon[0].amount : 0
            }else{
                form.value.amount = 0
                form.value.sponsorType=''
            }
        },
        get(){
            return form.value.sponsorType
        }
    })
</script>