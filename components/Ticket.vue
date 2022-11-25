<template>
    <div class="bg-black/80 flex px-4 sm:px-8 fixed inset-0 z-50">
        <div class="container z-50 lg:max-w-4xl max-w-xl sm:container m-auto p-2 bg-white rounded">
            <header class="flex justify-end w-full p-2">
                <span class="text-lg text-gray-400 cursor-pointer w-7 h-7 hover:text-gray-700" 
                    title="close" @click="$emit('close-ticket-modal')">
                    <i class="fas fa-xmark"></i>
                </span>
            </header>
            <form action="" @submit.prevent="submitForm" class="p-2 shadow portrait:max-h-[80vh] overflow-y-auto landscape:max-h-[90vh]">
                <header>
                    <h3 class="text-2xl font-bold capitalize text-left py-2 text-gray-800">
                        Book your ticket
                    </h3>
                    <p class="border p-2 text-center cursor-pointer bg-gradient-to-r"
                        :class="[
                            messageType == MessageType.NEUTRAL ? 'from-neutral-50 to-gray-50':'',
                            messageType == MessageType.ERROR ? 'from-red-500 via-rose-600 to-red-500 text-white':'',
                            messageType == MessageType.SUCCESS ? 'from-green-500 via-green-600 text-white to-green-500':''
                        ]"
                        v-if="showMessage"
                        @click="showMessage=false"
                    >{{message}}</p>
                </header>
                <section v-if="messageType == MessageType.SUCCESS"
                    class="py-4 px-6 border mt-1"
                >

                </section>
                <section class="border p-2 mt-1 grid gap-2 md:gap-y-4 md:grid-cols-2 hover:shadow active:shadow-gray-300">
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
                        <label class="block text-gray-700 ml-0.5 text-sm font-bold mb-2" for="email">
                          Email <span class="font-light">[Optional]</span>
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                            leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" name="email" v-model="form.email" type="text" placeholder="Email">
                    </div>
                    <div class="flex gap-2">
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
                            Ticket Price
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400
                            hover:text-neutral-800 leading-tight focus:outline-none focus:shadow-outline" 
                            id="ticket" :value="totalPrice" name="ticket" readonly type="text"
                        >
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row row-span-6 pt-2 border-t-2 md:border-t-0 mt-4">
                        <button class="text-center md:w-36 bg-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-white hover:shadow-md m-2 border p-2 cursor-pointer" type="submit">Make Payment</button>
                        <button class="text-center md:w-36 bg-rose-600 hover:bg-gradient-to-r hover:from-rose-600 hover:to-red-600 text-white hover:shadow-md m-2 border p-2 cursor-pointer"
                            @click="$emit('close-ticket-modal')"
                        >Cancel</button>
                    </div>
                </section>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    enum MessageType{
        ERROR = "error",
        SUCCESS = "success",
        NEUTRAL = "neutral"
    }
    var showMessage = ref(false)
    var message = ref('')
    var messageType = ref(MessageType.NEUTRAL)

    var form = ref({
        fname: '',
        lname: '',
        email: '',
        ticketNumber: 1,
        price: 20
    })

    var totalPrice = computed(() => {
        form.value.price = 20 * form.value.ticketNumber
        
        return "GH¢ " + form.value.price.toFixed(2)
    })

    function submitForm(){
        showMessage.value = true
        messageType.value = MessageType.SUCCESS
        message.value = "Everything is correct"
    }

    function resetForm(){
        form.value.email = ''
        form.value.lname = ''
        form.value.fname = ''

        messageType.value = MessageType.NEUTRAL
    }
</script>

<style scoped>
    form::-webkit-scrollbar{
        width: 7px;
    }
    form::-webkit-scrollbar-button{
        height: 10px;
    }
    form::-webkit-scrollbar-thumb{
        background-color: #555a;
    }
</style>