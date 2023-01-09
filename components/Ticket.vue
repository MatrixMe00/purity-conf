<template>
    <div class="bg-black/80 flex px-4 sm:px-8 fixed inset-0 z-50">
        <div class="container z-50 max-h-[90vh] overflow-y-auto lg:max-w-4xl max-w-xl sm:container m-auto p-2 bg-white rounded">
            <header class="flex justify-end w-full p-2">
                <span class="text-lg text-gray-400 cursor-pointer w-7 h-7 hover:text-gray-700" 
                    title="close" @click="[$emit('close-ticket-modal'), resetForm]">
                    <i class="fas fa-xmark"></i>
                </span>
            </header>
            <form action="" @submit.prevent="submitForm" class="p-2 shadow portrait:max-h-[80vh] overflow-y-auto h-mod-scroll landscape:max-h-[90vh]">
                <header>
                    <h3 class="text-2xl font-bold capitalize text-left py-2 text-gray-800">
                        Book your ticket
                    </h3>
                </header>
                
                <!-- Caption message -->
                <p class="border p-2 text-center cursor-pointer bg-gradient-to-r sticky top-0 z-10"
                    :class="[
                        formVars.messageType == MessageType.NEUTRAL ? 'from-neutral-50 to-gray-50':'',
                        formVars.messageType == MessageType.ERROR ? 'from-red-500 via-rose-600 to-red-500 text-white':'',
                        formVars.messageType == MessageType.SUCCESS ? 'from-green-500 via-green-600 text-white to-green-500':''
                    ]"
                    v-if="formVars.showMessage"
                    @click="formVars.showMessage=false"
                >{{formVars.message}}</p>
                <!-- End of caption message -->

                <section v-if="formVars.messageType == MessageType.SUCCESS"
                    class="py-4 px-6 border mt-1 flex justify-center items-center"
                >
                    <div class="flex justify-center items-center flex-col">
                        <span class="text-7xl w-32 flex justify-center items-center h-32 border-[4px] border-green-600 text-green-600 rounded-full">
                            <i class="fas fa-check"></i>
                        </span>
                        <p class="mt-5 text-xl text-center font-semibold">You have successfully purchased {{formVars.finalTicket}} {{formVars.finalTicket > 1 ? 'tickets':'ticket'}}</p>
                        <div class="flex flex-wrap justify-center items-center pt-2 mt-4 gap-2">
                            <button class="text-center w-48 md:w-40 bg-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-white hover:shadow-md border p-2 cursor-pointer"
                                @click="resetForm"
                            >Make New Payment</button>
                            <button class="text-center w-48 md:w-36 bg-rose-600 hover:bg-gradient-to-r hover:from-rose-600 hover:to-red-600 text-white hover:shadow-md border p-2 cursor-pointer"
                                @click="[$emit('close-ticket-modal'), resetForm]"
                            >Close</button>
                        </div>
                    </div>
                </section>
                <section v-else class="border p-2 mt-1 block space-y-3 md:space-y-0 md:grid md:gap-2 md:gap-y-4 md:grid-cols-2 lg:grid-cols-3 hover:shadow active:shadow-gray-300">
                    <div class="">
                        <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="fname">
                          Firstname
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                            leading-tight focus:outline-none focus:shadow-outline" 
                            id="fname" name="fname" v-model="form.fname" type="text" placeholder="Firstname">
                    </div>
                    <div class="">
                        <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="lname">
                          Lastname
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                            leading-tight focus:outline-none focus:shadow-outline" 
                            id="lname" name="lname" v-model="form.lname" type="text" placeholder="Lastname">
                    </div>
                    <div class="">
                        <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="phone">
                          Phone Number
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                            leading-tight focus:outline-none focus:shadow-outline" 
                            id="phone" name="phone" v-model="form.phone" type="text" placeholder="[0xxxxxxxxxx] or [+233xxxxxxxxx]" maxlength="13" minlength="10">
                    </div>
                    <div class="">
                        <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="email">
                          Email <span class="font-light">[Optional]</span>
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                            leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" name="email" v-model="form.email" type="email" placeholder="Email">
                    </div>
                    <div class="">
                        <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="ticket_number">
                            Number of Tickets
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400
                            hover:text-neutral-800 leading-tight focus:outline-none focus:shadow-outline" 
                            id="ticket_number" v-model="form.ticketNumber" name="ticket_number" type="number" min="1"
                        >
                    </div>
                    <div>
                        <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="ticket">
                        Total Ticket Price
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400
                        hover:text-neutral-800 leading-tight focus:outline-none focus:shadow-outline" 
                        id="ticket" :value="totalPrice" name="ticket" readonly type="text"
                    >
                    </div>
                    <div class="flex flex-col md:flex-row col-span-2 pt-2 border-t-2 md:border-t-0 mt-4">
                        <button class="text-center md:w-36 bg-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-white hover:shadow-md m-2 border p-2 cursor-pointer" type="submit">Make Payment</button>
                        <button class="text-center md:w-36 bg-rose-600 hover:bg-gradient-to-r hover:from-rose-600 hover:to-red-600 text-white hover:shadow-md m-2 border p-2 cursor-pointer"
                            @click="[$emit('close-ticket-modal'), resetForm]"
                        >Cancel</button>
                    </div>
                </section>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {submitForm, resetForm, form, formVars} from "~/mixins/ticketFuncs"
    import {MessageType} from "~/mixins/globalForms"
    import { detectInternet } from "~~/mixins/globalVars";

    //computed variable to track the total price for the tickets bought
    var totalPrice = computed(() => {
        form.value.price = 20 * form.value.ticketNumber

        if(form.value.price < 0){
            form.value.price = 0
        }
        
        return "GH¢ " + form.value.price.toFixed(2)
    })
</script>

<style scoped>
    
</style>