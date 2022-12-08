<template>
    <section class="sm:px-8 py-12 xl:container xl:mx-auto">
        <h1 class="text-center text-4xl font-bold">Events</h1>
        <div class="px-8 py-12 grid landscape:md:grid-cols-2 landscape:md:space-x-4">
            <div class="group relative event-main border w-full h-full" style="min-height: 30vh; max-height: 25.5rem">
                <img :src="`/assets/img/${currentImgVal.imgUrl}`" class="object-cover object-center w-full h-full" alt="image">
                <div class="absolute inset-0 py-5 px-4 hidden flex-col justify-end 
                    items-stretch bg-black/60 group-hover:bg-black/60 space-y-10 sm:space-y-6 text-neutral-100 group-hover:flex">
                    <h1 class="text-center text-xl sm:text-3xl font-bold">{{currentImgVal.title}}</h1>
                    <p class="text-sm sm:text-base hidden sm:inline">{{currentImgVal.coverText}}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-sm sm:text-base">{{currentImgVal.date}}</span>
                        <button class="px-4 py-2 border self-end hover:border-blue-700 bg-gradient-to-tr hover:rounded hover:from-blue-700 hover:via-blue-600 hover:to-blue-500">Click Me</button>
                    </div>
                    
                    <span class="absolute -top-8 sm:-top-5 left-1 p-2 rounded"
                        :class="[
                            currentImgVal.stat == 'Ended' ? 'bg-red-600':'',
                            currentImgVal.stat == 'Coming Soon' ? 'bg-blue-600':'',
                            currentImgVal.stat == 'This Month' ? 'bg-green-600':''
                        ]"
                    >{{currentImgVal.stat}}</span>
                </div>
            </div>
            <div class="event-tumbnails cursor-pointer flex space-x-2 mt-2 landscape:md:mt-0 
                landscape:md:space-x-0 landscape:md:space-y-2 landscape:md:flex-col">
                <div
                    v-for="(thumb, index) in events"
                    :key="index" 
                    class="tmb w-full h-12 bg-[length:150%] hover:bg-[length:160%] sm:bg-[length:100%] sm:hover:bg-[length:110%] sm:h-24 border bg-center hover:opacity-80 bg-no-repeat hover:bg-blend-darken"
                    :style="`background-image: url('/assets/img/${thumb.imgUrl}')`"
                    :class="[currentImgVal.imgUrl == thumb.imgUrl ? 'hidden':'']"
                    @click="currentImg(index)"
                ></div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const events = ref([
        {
            imgUrl: "person1.jpg", 
            coverText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sit. Enim in error laudantium, fugiat, assumenda officia commodi sint asperiores optio ea eos blanditiis hic.", 
            title: "Some Huge Event Title 1", 
            date:"March 2022", 
            stat:"Ended"
        },
        {
            imgUrl: "img1.jpg", 
            coverText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sit. Enim in error laudantium, fugiat, assumenda officia commodi sint asperiores optio ea eos blanditiis hic.", 
            title: "Some Huge Event Title 2", 
            date:"April 2022", 
            stat:"Ended"
        },
        {
            imgUrl: "1_ianrdjohnson_springintheadelaidehills.jpg", 
            coverText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sit. Enim in error laudantium, fugiat, assumenda officia commodi sint asperiores optio ea eos blanditiis hic.", 
            title: "Some Huge Event Title 3", 
            date:"November 2022", 
            stat:"This Month"
        },
        {
            imgUrl: "4_chungooitan-tasmaniaaustralia.jpg", 
            coverText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sit. Enim in error laudantium, fugiat, assumenda officia commodi sint asperiores optio ea eos blanditiis hic.", 
            title: "Some Huge Event Title 4", 
            date:"December 2022", 
            stat:"Coming Soon"
        },
        {
            imgUrl: "3_camronshahmirzadi_pfeiffer beach-bigsurca.jpg", 
            coverText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sit. Enim in error laudantium, fugiat, assumenda officia commodi sint asperiores optio ea eos blanditiis hic.", 
            title: "Some Huge Event Title 5", 
            date:"March 2023", 
            stat:"Coming Soon"
        },
    ])

    let currentImgNum = ref(0)
    let currentImgVal = ref(events.value[0])

    function currentImg(indexVal){
        currentImgNum.value = indexVal;
        currentImgVal.value = events.value[indexVal];
    }
</script>

<style scoped>
</style>
