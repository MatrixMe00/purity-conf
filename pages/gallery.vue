<template>
    <section class="xl:container xl:mx-auto">
        <Banner title="GALLERY" />
    </section>
    
    <section class="xl:container xl:m-auto py-8 px-2 md:px-8 min-h-[67vh]">
        <!-- Tags to group gallery by year and month -->
        <div class="flex items-center justify-center">
            <div class="flex overflow-x-auto h-mod-scroll">
                <span class="py-2 min-w-max px-3 border cursor-pointer hover:border-blue-400 hover:text-neutral-100"
                    v-for="(item, index) in photos" :key="index"
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
                    <img :src="`${baseImageUrl}${currentBigImg}`" class="w-full h-full object-cover object-center" alt="">
                </div>

                <!-- Small images displaying as thumbs -->
                <div class="mt-3 md:mt-0 tmbs grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:max-h-[15rem] overflow-y-auto h-mod-scroll">
                    <div
                        v-for="(image, index) in activeGallery"
                        :key="index" 
                        class="border cursor-pointer group hover:bg-black/40 max-h-28"
                        :class="currentBigImg == image ? 'hidden':''"
                        @click="[changeBigImg(image), currentModalImageNumber = index]"
                    >
                        <img :src="`${baseImageUrl}${image}`" 
                        class="w-full h-full object-[100% 100%] object-center group-hover:opacity-80" alt="">
                    </div>

                    <div v-if="online" class="col-span-2 sm:col-span-3 lg:col-span-4 flex items-center justify-center"
                        :class="lastGalleryImage >= getGalleryLength(currentTab) ? 'hidden':''"
                    >
                        <button class="rounded border hover:bg-sky-600 bg-sky-500 px-12 py-3 text-white" @click="activeGallery = activeGallery.concat(filterImage(currentTab))">Load More</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- End of box -->
    </section>

    <section class="fixed inset-0 bg-black/80 z-50 flex" v-if="imageModal">
        <div class="p-2 grid container m-auto mx-2 sm:mx-auto bg-white/30 overflow-hidden rounded max-h-[90vh] landscape:md:max-h-[85vh] lg:max-w-screen-md">
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
            <div class="max-h-[90vh] w-full bg-black/50 flex justify-center overflow-auto h-full h-mod-scroll">
                <img :src="`${baseImageUrl}${modalImage}`" class="h-full" alt="">
            </div>
            
            
            <!--Modal foot-->
            <div class="py-5 flex justify-between rounded-b items-center bg-black/60 text-white">
                <span class="left cursor-pointer hover:text-stone-500 min-w-[2rem] mr-2 text-center"
                    @click="prevModalImage(currentGalleryContainer)"
                >
                    <i class="fas fa-angle-left"></i>
                </span>
                <span class="text-white">{{currentModalImageNumber + 1}} / {{getGalleryLength(-1)}}</span>
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
    import {gallery, demoPhotos} from "~/composables/photos"

    useHead({
        title: "Purity Conference | Gallery"
    })

    const photos = ref()
    let baseImageUrl = ref("")
    const online = ref(true)
    
    //gallery to be used
    const lastGalleryImage = ref(0)
    const activeGallery = ref()

    if(online.value){
        //online viewing
        photos.value = gallery

        activeGallery.value = photos.value[0].gallery.slice(0, 9)
        lastGalleryImage.value = 9
    }else{
        //offline viewing
        baseImageUrl.value = "assets/img/gallery/"
        photos.value = demoPhotos

        activeGallery.value = photos.value[0].gallery
    }
    
    

    let currentTab = ref(0)
    let currentBigImg = ref(photos.value[0].gallery[0])
    const galleryHeader = computed(()=>{
        let index = currentTab.value

        return `${photos.value[index].title} - ${photos.value[index].month} ${photos.value[index].year}, ${photos.value[index].location}`
    })
    
    //Modal Variables
    let imageModal = ref(false)
    let modalImage = ref('')
    let currentGalleryContainer = ref<number>(0)
    let currentModalImageNumber = ref<number>(0)

    //modal computed variables
    let modalHeader = computed(()=>{
        let index = currentGalleryContainer.value

        return `${photos.value[index].title} | ${photos.value[index].month} ${photos.value[index].year}, ${photos.value[index].location}`
    })
    
    //functions
    function changeTab(index:number){
        currentTab.value = index
        currentBigImg.value = photos.value[index].gallery[0]

        lastGalleryImage.value = 0
        activeGallery.value = photos.value[index].gallery.slice(0, 9)
    }

    function changeBigImg(image:string){
        currentBigImg.value = image
    }

    function prevModalImage(index:number){
        //get total images in the gallery
        var total = getGalleryLength(-1)

        //check if the modal image number is not below 0
        currentModalImageNumber.value = currentModalImageNumber.value == 0 ? (total-1) : currentModalImageNumber.value - 1

        //display the current image in the modal view
        modalImage.value = photos.value[index].gallery[currentModalImageNumber.value]
    }

    function nextModalImage(index:number){
        //get total images in the gallery
        var total = getGalleryLength(-1)

        //check if the modal image number is not above the total images
        currentModalImageNumber.value = currentModalImageNumber.value < (total-1) ? currentModalImageNumber.value + 1 : 0

        //display the current image in the modal view
        modalImage.value = photos.value[index].gallery[currentModalImageNumber.value]
    }

    function getGalleryLength(index:number){
        if(index > -1)
            return photos.value[index].gallery.length
        else
            return activeGallery.value.length
    }

    function filterImage(index:number){
        let length = getGalleryLength(index)
        let newGallery
        let first = lastGalleryImage.value

        if(length > 8){
            lastGalleryImage.value = (lastGalleryImage.value + 8) > length ? length : (lastGalleryImage.value + 8)
            newGallery = photos.value[index].gallery.slice(first, lastGalleryImage.value)
        }else{
            newGallery = photos.value[index].gallery
        }

        return newGallery
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