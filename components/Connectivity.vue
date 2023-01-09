<template>
    <div v-if="showConnection" class="fixed top-2 p-2 z-50 min-w-[50%] md:min-w-[15%] text-white right-2 border" :class="color">
        <span>{{online.message}}</span>
    </div>
</template>

<script setup lang="ts">
    import {detectInternet, internetVar} from "~/mixins/globalVars"

    var showConnection = ref(false)
    var online = ref()
    var timer = ref()
    var color = ref("")

    onMounted(()=>{
        window.addEventListener('online', (event)=>{
            online.value = detectInternet(true)
            showConnection.value = true
            closeConnectionModal()
            color.value = "bg-green-600"
        })

        window.addEventListener('offline', (event)=>{
            online.value = detectInternet(true)
            showConnection.value = true
            closeConnectionModal()
            color.value = "bg-red-600"
        })
    })

    function closeConnectionModal(){
        clearInterval(timer.value)

        timer.value = setTimeout(()=>{
            showConnection.value = false
        }, 3000)
    }
</script>

<style>

</style>