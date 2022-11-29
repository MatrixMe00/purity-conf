<template>
    <section v-if="mode == FollowMode.LIGHT" class="xl:container xl:mx-auto grid py-10 sm:py-12 px-6 sm:px-8 bg-neutral-50">
        <h3 class="w-full mb-8 text-center font-bold text-4xl">Follow Us</h3>
        <div class="flex items-center space-x-2 justify-center text-2xl">
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-facebook-f" title="Facebook"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-whatsapp" title="WhatsApp"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-instagram" title="Instagram"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-telegram" title="Telegram"></i>
            </a>
        </div>
    </section>

    <section v-else-if="mode == FollowMode.DARK" class="xl:container xl:mx-auto grid py-10 sm:py-12 px-6 sm:px-8 text-white bg-neutral-800">
        <h3 class="w-full mb-8 text-center font-bold text-4xl">Follow Us</h3>
        <div class="flex items-center space-x-2 justify-center text-2xl">
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-facebook-f" title="Facebook"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-whatsapp" title="WhatsApp"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-instagram" title="Instagram"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-telegram" title="Telegram"></i>
            </a>
        </div>
    </section>

    <section v-else-if="mode == FollowMode.WHITE" class="xl:container xl:mx-auto grid py-10 sm:py-12 px-6 sm:px-8 bg-white">
        <h3 class="w-full mb-8 text-center font-bold text-4xl">Follow Us</h3>
        <div class="flex items-center space-x-2 justify-center text-2xl">
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-facebook-f" title="Facebook"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-whatsapp" title="WhatsApp"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-instagram" title="Instagram"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-telegram" title="Telegram"></i>
            </a>
        </div>
    </section>

    <section v-else-if="mode == FollowMode.DARKER" class="xl:container xl:mx-auto grid py-10 sm:py-12 px-6 sm:px-8 text-white bg-neutral-900">
        <h3 class="w-full mb-8 text-center font-bold text-4xl">Follow Us</h3>
        <div class="flex items-center space-x-2 justify-center text-2xl">
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-facebook-f" title="Facebook"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-whatsapp" title="WhatsApp"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-instagram" title="Instagram"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-telegram" title="Telegram"></i>
            </a>
        </div>
    </section>
    
    <section v-else class="xl:container xl:mx-auto grid py-10 sm:py-12 px-6 sm:px-8 bg-neutral-100">
        <h3 class="w-full mb-8 text-center font-bold text-4xl">Follow Us</h3>
        <div class="flex items-center space-x-2 justify-center text-2xl">
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-facebook-f" title="Facebook"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-whatsapp" title="WhatsApp"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-instagram" title="Instagram"></i>
            </a>
            <a href="" class="hover:shadow-lg text-center flex justify-center items-center p-2">
                <i class="fab fa-telegram" title="Telegram"></i>
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
    import {FollowMode} from "~/mixins/globalVars"

    interface myProps{
        mode: FollowMode
    }

    const pageProps = defineProps<myProps>();
</script>