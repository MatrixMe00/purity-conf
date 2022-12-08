<template>
    <section class="xl:container xl:mx-auto">
        <Banner title="GALLERY" />
    </section>
    
    <section class="xl:container xl:m-auto py-8 px-2 md:px-8 min-h-[67vh]">
        <!-- Tags to group gallery by year and month -->
        <div class="flex items-center justify-center">
            <div class="flex overflow-x-auto h-mod-scroll">
                <span class="py-2 min-w-max px-3 border cursor-pointer hover:border-blue-400 hover:text-neutral-100"
                    v-for="(item, index) in gallery" :key="index"
                    :class="[currentTab == index ? 'bg-blue-500 hover:bg-blue-500 text-white':'hover:bg-blue-400']"
                    @click="changeTab(index)"
                >{{item.month}} {{item.year}}</span>
            </div>
        </div>
        <!-- End of tags -->

        <!-- Box to hold results of the current tab -->
        <div class="grid justify-items-stretch p-1 border mt-8">
            <h2 class="py-8 px-6 text-2xl font-semibold text-center">{{galleryHeader}}</h2>
            <div class="grid lg:grid-cols-2 md:gap-3">
                <div class="main-img h-48 sm:h-52 md:h-60 w-full sticky top-6 z-10" @click="[
                    imageModal=true, modalImage=currentBigImg, 
                    currentGalleryContainer=currentTab
                ]">
                    <img :src="`assets/img/gallery/${currentBigImg}`" class="w-full h-full object-cover object-center" alt="">
                </div>
                <div class="mt-3 md:mt-0 tmbs grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:max-h-[15rem] overflow-y-auto h-mod-scroll">
                    <div
                        v-for="(image, index) in gallery[currentTab].gallery"
                        :key="index" 
                        class="border cursor-pointer group hover:bg-black/40 max-h-28"
                        :class="currentBigImg == image ? 'hidden':''"
                        @click="[changeBigImg(image), currentModalImageNumber = index]"
                    >
                        <img :src="`_nuxt/assets/img/gallery/${image}`" 
                        class="w-full h-full object-[100% 100%] object-center group-hover:opacity-80" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- End of box -->
    </section>

    <section class="fixed inset-0 bg-black/80 z-50 flex" v-if="imageModal">
        <div class="h-mod-scroll p-2 container m-auto mx-2 sm:mx-auto bg-white/30 max-h-[90vh] overflow-auto rounded landscape:md:max-h-[85vh] lg:max-w-screen-md">
            <!-- Modal head -->
            <header class="flex justify-between items-center rounded-t cursor bg-black/60 py-3 px-2">
                <span class="font-semibold text-white">
                    {{modalHeader}}
                </span>
                <span class="text-lg text-white cursor-pointer hover:text-neutral-200" @click="imageModal = false">
                    <i class="fas fa-xmark"></i>
                </span>
            </header>

            <!--Modal image-->
            <img :src="`assets/img/gallery/${modalImage}`" class="w-full h-full" alt="">
            
            <!--Modal foot-->
            <div class="py-5 flex justify-between rounded-b items-center bg-black/60 text-white">
                <span class="left cursor-pointer hover:text-stone-500 min-w-[2rem] mr-2 text-center"
                    @click="prevModalImage(currentGalleryContainer)"
                >
                    <i class="fas fa-angle-left"></i>
                </span>
                <span class="text-white">{{currentModalImageNumber + 1}} / {{getGalleryLength(currentGalleryContainer)}}</span>
                <span class="right cursor-pointer hover:text-stone-500 min-w-[2rem] ml-2 text-center"
                    @click="nextModalImage(currentGalleryContainer)"
                >
                    <i class="fas fa-angle-right"></i>
                </span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    useHead({
        title: "Purity Conference | Gallery"
    })

    const gallery = ref([
        {
            title: "Purity Conference", year: 2021, month: "March", location: "Ho",
            gallery: [
                "gal1.jpg","gal2.jpg","gal3.jpg","gal4.jpg","gal5.jpg"
            ]
        },
        {
            title: "Purity Conference", year: 2022, month: "March", location: "Ada",
            gallery: [
                "gal2.jpg","gal1.jpg","gal6.jpg","gal3.jpg","gal9.jpg"
            ]
        },
        {
            title: "Purity Conference", year: 2022, month: "March", location: "Ho",
            gallery: [
                "gal3.jpg","gal10.jpg","gal8.jpg","gal7.jpg","gal1.jpg"
            ]
        }
    ])

    let currentTab = ref(0)
    let currentBigImg = ref(gallery.value[0].gallery[0])
    const galleryHeader = computed(()=>{
        let index = currentTab.value

        return `${gallery.value[index].title} - ${gallery.value[index].month} ${gallery.value[index].year}, ${gallery.value[index].location}`
    })
    
    //Modal Variables
    let imageModal = ref(false)
    let modalImage = ref('')
    let currentGalleryContainer = ref<number>(0)
    let currentModalImageNumber = ref<number>(0)

    //modal computed variables
    let modalHeader = computed(()=>{
        let index = currentGalleryContainer.value

        return `${gallery.value[index].title} | ${gallery.value[index].month} ${gallery.value[index].year}, ${gallery.value[index].location}`
    })
    
    //functions
    function changeTab(index:number){
        currentTab.value = index
        currentBigImg.value = gallery.value[index].gallery[0]
    }

    function changeBigImg(image:string){
        currentBigImg.value = image
    }

    function prevModalImage(index:number){
        //get total images in the gallery
        var total = getGalleryLength(index)

        //check if the modal image number is not below 0
        currentModalImageNumber.value = currentModalImageNumber.value == 0 ? (total-1) : currentModalImageNumber.value - 1

        //display the current image in the modal view
        modalImage.value = gallery.value[index].gallery[currentModalImageNumber.value]
    }

    function nextModalImage(index:number){
        //get total images in the gallery
        var total = getGalleryLength(index)

        //check if the modal image number is not above the total images
        currentModalImageNumber.value = currentModalImageNumber.value < (total-1) ? currentModalImageNumber.value + 1 : 0

        //display the current image in the modal view
        modalImage.value = gallery.value[index].gallery[currentModalImageNumber.value]
    }

    function getGalleryLength(index:number){
        return gallery.value[index].gallery.length
    }
</script>

<style scoped>
    .main-img:hover::after{
        content: "Full Screen Image";
        position: absolute;
        top: 0;
        z-index: 5;
        text-align: center;
        right: 0;
        top: 0;
        bottom: 0;
        color:white;
        background-color: rgba(12,12,12,0.65);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
</style>