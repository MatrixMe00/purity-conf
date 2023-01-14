<template>
    <section class="min-h-[100vh] p-2 bg-rose-200 grid">
        <form action="" class="border px-6 py-4 shadow w-full shadow-black/70 max-w-screen-sm bg-white lg:max-w-screen-md m-auto
            grid md:grid-cols-2 md:items-center md:justify-center max-h-[95vh] overflow-y-auto" @submit.prevent="login()"
        >
            <div class="p-2 text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex items-center justify-center">
                <span class="bg-neutral-100 lg:bg-transparent py-4 px-2 rounded-full flex items-center justify-center w-fit">
                    <i class="fas fa-users-viewfinder p-2 md:p-4"></i>
                </span>
            </div>
            <div class="body space-y-4">
                <h1 class="py-4 text-center text-xl font-semibold">Member Login</h1>

                <!-- Caption message -->
                <p class="border p-2 mb-4 text-center cursor-pointer bg-gradient-to-r sticky top-4 z-10 text-[0.9rem]"
                :class="[
                    formVars.messageType == MessageType.NEUTRAL ? 'from-neutral-50 to-gray-50':'',
                    formVars.messageType == MessageType.ERROR ? 'from-red-500 via-rose-600 to-red-500 text-white':'',
                    formVars.messageType == MessageType.SUCCESS ? 'from-green-500 via-green-600 text-white to-green-500':''
                ]"
                v-if="formVars.showMessage"
                @click="formVars.showMessage=false"
            >{{formVars.message}}</p>
            <!-- End of caption message -->

                <div class="">
                    <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="username">
                      Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                        leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" name="username" v-model="form.username" type="text" placeholder="Username">
                </div>
                <div class="">
                    <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="password">
                      Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                        leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" name="password" v-model="form.password" type="password" placeholder="Password">
                </div>
                <button class="w-full px-1 space-x-3 hover:space-x-4 py-2 border border-blue-700 bg-gradient-to-tr rounded from-blue-700 
                    via-blue-600 to-blue-500 text-white">
                    <span>Login</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
                <div class="text-right text-xs space-x-3">
                    <NuxtLink to="/register" class="hover:underline cursor-pointer">Create New Account</NuxtLink>
                    <span class="hover:underline cursor-pointer">Forgot My Password</span>
                </div>
            </div>
        </form>
    </section>
</template>

<script setup lang="ts">
    import {form, login, formVars} from "~/mixins/adminForm"
    import {MessageType} from "~/mixins/globalForms"
    
    definePageMeta({
        layout: "nohead"
    })
    
    useHead({
        title: "Purity Conference | Admin Login`"
    })
</script>

<style>

</style>