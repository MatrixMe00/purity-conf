<template>
    <section class="carousel bg-white relative"
        @mouseenter="stopTimer"
        @mouseleave="startTimer"
    >
        <Card v-for="(n, index) in carouselCards" 
            :key="index" 
            :card-data="n"
            :class="[currentSlide != index ? 'hidden':'block']"
            :card="`caro-card`"
         />
        <div class="slots flex absolute bottom-2 w-full justify-center">
            <span class="rounded-full w-4 block h-4 border bg-neutral-300 m-2"
                v-for="i in carouselCards.length" :key="i"
                :class="[currentSlide===(i-1) ? 'bg-neutral-600 hover:bg-neutral-600':'hover:bg-neutral-400 cursor-pointer']"
                @click="currentImage(i-1)"
            ></span>
        </div>
    </section>
</template>

<script setup lang="ts">
    const carouselCards = ref([
        {imgUrl: "img1.jpg", title:"Huge Title 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ad exercitationem ex a maxime tenetur reiciendis nobis, laborum recusandae animi ullam quam, fugiat similique, consectetur asperiores iusto atque consequatur reprehenderit?",
            btn: false, btnLink: false, 
            linkUrl: "#"},
        {imgUrl: "1_ashleyrophotography-orangeyellowflowerbee.jpg", 
            title:"Huge Title 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ad exercitationem ex a maxime tenetur reiciendis nobis, laborum recusandae animi ullam quam, fugiat similique, consectetur asperiores iusto atque consequatur reprehenderit?",
            btn: false, btnLink: false, 
            linkUrl: "#"},
        {imgUrl: "1_ianrdjohnson_springintheadelaidehills.jpg", 
            title:"Huge Title 3", 
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ad exercitationem ex a maxime tenetur reiciendis nobis, laborum recusandae animi ullam quam, fugiat similique, consectetur asperiores iusto atque consequatur reprehenderit?", 
            btn: false, btnLink: false, 
            linkUrl: "#"},
        {imgUrl: "3_camronshahmirzadi_pfeiffer beach-bigsurca.jpg", 
            title:"Huge Title 4",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ad exercitationem ex a maxime tenetur reiciendis nobis, laborum recusandae animi ullam quam, fugiat similique, consectetur asperiores iusto atque consequatur reprehenderit?",
            btn: false, btnLink: false, 
            linkUrl: "#"},
        {imgUrl: "03_gettyimages-590452303_super_resized.jpg", 
            title:"Huge Title 5",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ad exercitationem ex a maxime tenetur reiciendis nobis, laborum recusandae animi ullam quam, fugiat similique, consectetur asperiores iusto atque consequatur reprehenderit?",
            btn: false, btnLink: false, 
            linkUrl: "#"},
        {imgUrl: "4_chungooitan-tasmaniaaustralia.jpg", 
            title:"Huge Title 6",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ad exercitationem ex a maxime tenetur reiciendis nobis, laborum recusandae animi ullam quam, fugiat similique, consectetur asperiores iusto atque consequatur reprehenderit?",
            btn: false, btnLink: false, 
            linkUrl: "#"},
    ]);

    const currentSlide = ref(0);
    const timer = ref();

    function currentImage(index:number){
        currentSlide.value = index;
    }

    function startTimer(){
        timer.value = setInterval(()=>{
            currentSlide.value = currentSlide.value+1 < carouselCards.value.length ? currentSlide.value += 1 : 0;
        }, 5000)
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