<template>
    <div class="card relative h-inherit" v-if="card == CardType.CARO">
        <div class="img bg-cover bg-center flex justify-center h-screen items-center">
            <img 
                :src="`/_nuxt/assets/img/${cardData.imgUrl}`"
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
            <div class="btn">
                <button class="border border-blue-500 hover:bg-blue-500 hover:text-white py-2 px-3 cursor-pointer rounded-l-full rounded-r-full">Some Button</button>
            </div>
        </div>
    </div>

    <div v-else-if="card==CardType.HERO" class="heroCard max-w-sm md:max-w-md hover:border-zinc-500 md:hover:rounded-t-xl w-full h-fit m-4 
        lg:m-6 rounded-t-2xl rounded-b relative p-2 border"
        :class="[cardData.social ? 'group':'']"
    >
        <img src="~/assets/img/person2.jpg" class="w-full rounded-t-xl object-cover object-top" alt="">
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
</template>

<script setup lang="ts">
    import {CardType} from "~/mixins/globalVars"

    interface Data{
        cardData: {
            imgUrl?: string, 
            title: string,
            content: string,
            btn?: boolean, 
            btnLink?: boolean, 
            linkUrl?: string,
            social?: boolean
            socialLinks?:{
                facebook: string,
                twitter?: string,
                telegram?: string,
                whatsapp: string,
                instagram?: string,
                phone: string
            }
        },
        card: CardType
    }

    const props = defineProps<Data>()
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