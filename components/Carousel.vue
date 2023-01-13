<template>
    <section class="carousel bg-white relative xl:container xl:mx-auto"
        @mouseenter="stopTimer"
        @mouseleave="startTimer"
    >
        <Card v-for="(n, index) in carosel" 
            :key="index" 
            :card-data="n"
            :class="[currentSlide != index ? 'hidden':'block']"
            :card="CardType.CARO"
         />
        <div class="slots flex absolute bottom-2 w-full justify-center">
            <span class="rounded-full w-4 block h-4 border bg-neutral-300 m-2"
                v-for="i in carosel.length" :key="i"
                :class="[currentSlide===(i-1) ? 'bg-neutral-600 hover:bg-neutral-600':'hover:bg-neutral-400 cursor-pointer']"
                @click="currentImage(i-1)"
            ></span>
        </div>
    </section>
</template>

<script setup lang="ts">
    import {CardType, caroselSpeed} from "~/mixins/globalVars"

    interface Carosel{
        carosel: any
        speed?: caroselSpeed|number
    }

    const props = defineProps<Carosel>()

    const currentSlide = ref(0);
    const timer = ref();

    function currentImage(index:number){
        currentSlide.value = index;
    }

    function startTimer(){
        let speed = caroselSpeed.NORMAL

        if(props.speed)
            speed = props.speed
        
        timer.value = setInterval(()=>{
            currentSlide.value = currentSlide.value+1 < props.carosel.length ? currentSlide.value += 1 : 0;
        }, (speed*1000))
    }

    function stopTimer(){
        clearInterval(timer.value)
        timer.value = null
    }

    onMounted(() => {
        startTimer();
    })

    onUnmounted(() => {
        stopTimer();
    })
</script>