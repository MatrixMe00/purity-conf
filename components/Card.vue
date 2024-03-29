<template>
    <!-- Carousel Cards -->
    <div class="card relative h-inherit" v-if="card == CardType.CARO">
        <div class="img bg-cover bg-center flex justify-center h-screen items-center">
            <img 
                :src="cardData.imgUrl"
                class="w-full h-full object-cover object-center block" style="max-height: inherit" 
                alt="some image">
        </div>
        <div class="absolute content md:top-1/4 m-4 md:m-auto
            top-1/4 rounded-lg shadow-neutral-400 bg-white/90 hover:bg-white/95 z-10 p-5 
            flex flex-col content-center md:left-6 lg:left-12 space-y-8 text-lg max-w-3xl lg:w-2/5">
            <div class="title">
                <h2 class="text-5xl bolder">{{cardData.title}}</h2>
            </div>
            <div class="cont">
                <p>{{cardData.content}}</p>
            </div>
            <div class="btn" v-if="cardData.btn && cardData.btnText">
                <button class="border border-blue-500 hover:bg-blue-500 hover:text-white py-2 px-3 cursor-pointer rounded-l-full rounded-r-full">{{cardData.btnText}}</button>
            </div>
            <div v-else-if="cardData.btn" class="btn">
                <button class="border border-blue-500 hover:bg-blue-500 hover:text-white py-2 px-3 cursor-pointer rounded-l-full rounded-r-full">Some Button</button>
            </div>
        </div>
    </div>

    <!-- Hero Cards -->
    <div v-else-if="card==CardType.HERO" class="heroCard max-w-sm md:max-w-md hover:border-zinc-500 md:hover:rounded-t-xl w-full h-fit m-4 
        lg:m-6 rounded-t-2xl rounded-b relative p-2 border"
        :class="[cardData.social ? 'group':'']"
    >
        <img v-if="cardData.imgUrl" :src="cardData.imgUrl" class="w-full h-72 rounded-t-xl object-cover" alt="">
        <img v-else src="/assets/img/person2.jpg" class="w-full rounded-t-xl object-cover object-top" alt="">
        <h1 class="text-center pt-5 pb-3 text-xl bg-white">
            <span class="block font-semibold">{{cardData.title}}</span>
            <span class="text-sm">({{cardData.content}})</span>
        </h1>
        <div v-if="cardData.social" class="flex justify-center items-center space-x-2 
            invisible text-xl group-hover:visible p-2"
        >
            <a href="" class="p-1 hover:shadow-md" v-if="cardData.socialLinks?.facebook" title="Facebook">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="p-1 hover:shadow-md" v-if="cardData.socialLinks?.twitter" title="Twitter">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="p-1 hover:shadow-md" v-if="cardData.socialLinks?.telegram" title="Telegram">
                <i class="fab fa-telegram"></i>
            </a>
            <a href="" class="p-1 hover:shadow-md" v-if="cardData.socialLinks?.whatsapp" title="WhatsApp">
                <i class="fab fa-whatsapp"></i>
            </a>
            <a href="" class="p-1 hover:shadow-md" v-if="cardData.socialLinks?.instagram" title="Instagram">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="p-1 hover:shadow-md" v-if="cardData.socialLinks?.phone" title="Phone">
                <i class="fas fa-phone"></i>
            </a>
        </div>
    </div>

    <!-- Event cards -->
    <div v-else-if="card==CardType.EVENT" class="max-w-sm md:max-w-md md:hover:rounded-t-xl w-full h-fit relative border shadow hover:shadow-lg group overflow-hidden"
    >
        <div class="max-h-72 h-full flex justify-center items-center">
            <img :src="cardData.imgUrl" class="w-full h-full object-cover object-center block" alt="">
        </div>        
        <div class="py-3 flex-col justify-end gap-y-2 p-2 bg-black/70 text-neutral-100 absolute 
            inset-0 border-2 translate-x-full flex group-hover:rounded-md group-hover:translate-x-0">
            <span class="text-xs text-neutral-400 font-semibold">{{cardData.otherData?.guest}}</span>
            <h1 class="block font-semibold text-2xl md:text-2xl">{{cardData.title}}</h1>
            <span class="text-sm">{{cardData.content}}</span>
        </div>
        <div class="justify-center absolute top-2 right-2 translate-x-full flex group-hover:translate-x-0">
            <span class="text-base px-2 py-1 self-start rounded-l"
                :class="[
                    cardData.otherData.tag == 'past' ? 'bg-red-600 font-semibold text-white':'',
                    cardData.otherData.tag == 'coming' ? 'bg-blue-600 font-semibold text-white':'',
                    cardData.otherData.tag == 'month' ? 'bg-emerald-600 font-semibold text-white':'',
                    cardData.otherData.tag == 'live' ? 'bg-green-600 font-semibold text-white':''
                ]"
            >{{cardData.otherData?.day}}</span>
            <div class="flex flex-col justify-center items-center p-2 rounded rounded-tl-none bg-white/80">
                <span class="text-xs">{{cardData.otherData?.month}}</span> 
                <span class="text-base font-bold">{{cardData.otherData?.year}}</span>
            </div>
        </div>
    </div>

    <!-- A sponsorship card -->
    <div v-else-if="card==CardType.SPONSOR" class="md:w-auto max-w-screen-sm sm:min-w-[auto] hover:shadow h-fit 
        rounded-lg relative p-2 border"
        :class="[cardData.social ? 'group':'']"
    >
        <div class="img flex border-b pb-5 pt-3" v-if="cardData.imgUrl"
            :class="[cardData.otherData?.type == 'agency' ? 'justify-between':'justify-center']"
        >
            <img src="/assets/img/person2.jpg" class="w-32 rounded-full" alt="">
            <span v-if="cardData.otherData?.type == 'agency'" 
                class="text-sm text-neutral-600"
            >{{cardData.otherData?.location}}</span>
        </div>
        <div v-else class="text-neutral-700 text-6xl border-b pb-5 pt-3"
            :class="[cardData.otherData?.type == 'agency' ? 'flex justify-between':'block text-center']"
        >
            <i class="fas fa-user-secret"></i>
            <span v-if="cardData.otherData?.type == 'agency'" 
                class="text-sm text-neutral-600"
            >{{cardData.otherData?.location}}
            </span>
        </div>
        <h1 class="text-center pt-5 pb-3 text-xl bg-white">
            <span class="block font-semibold">{{cardData.title}}</span>
            <span class="text-xs" v-if="cardData.content">{{cardData.content}}</span>
        </h1>
    </div>
</template>

<script setup lang="ts">
    import {CardType} from "~/mixins/globalVars"

    interface Data{
        /**
         * This attribute receives the data to be displayed on the card
         * @prop {string|undefined} imgUrl This receives a string location to the image to be displayed
         * @prop {string} title This is the title of the card. It usually serves as the main text
         * @prop {string} content This is a required variable for the object
         * @prop {boolean|undefined} btn This tells the card if it should have a button or not [works with carosel type]
         * @prop {string|undefined} btnLink This is option identifies a button as been a link
         * @prop {string|undefined} linkUrl This is the URL for the button if it is a link
         * @prop {boolean|undefined} social THis is an optional option which indicates if a card has social links
         * @prop {object|undefined} socialLinks This holds the individual social links
         * @prop {any|undefined} otherData This holds any other data to be shown on the card
        */
        cardData: {
            imgUrl?: string, 
            title: string,
            content?: string,
            btn?: boolean,
            btnText?: string, 
            btnLink?: boolean, 
            linkUrl?: string,
            social?: boolean,
            socialLinks?:{
                facebook: string,
                twitter?: string,
                telegram?: string,
                whatsapp: string,
                instagram?: string,
                phone: string
            },
            otherData?: any
        },

        /**
         * This variable will be used to get the type of card to deliver
        */
        card: CardType
    }

    const props = defineProps<Data>()

    // function getImage(imgurl:string){
    //     var images = require.context('~//assets/', false, /\.jpg|.png$/)
    //     return images()
    // }
</script>

<style scoped>
    @media screen and (orientation: landscape){
        .card .img{
            max-height: 70vh;
        }

        @media screen and (max-height: 670px){
            .card .img{max-height: 100vh}
            .card .content{
                top: unset;
                bottom: 10%;
            }
        }
    }

    @media screen and (orientation: portrait){
        .card .img{
            max-height: 70vh;
        }

        @media screen and (min-width: 760px){
            .card .img{
                max-height: 60vh;
            }
        }

        @media screen and (max-width: 500px){
            .card .content{
                top: unset;
                bottom: 7%;
                font-size: 14px !important;
            }

            .content h2{
                font-size: 26px;
            }
        }
    }
</style>