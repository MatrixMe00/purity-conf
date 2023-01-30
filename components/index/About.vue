<template>
    <section v-if="page == 'home'" class="py-12 px-8 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 flex flex-wrap items-center text-white
        xl:container xl:mx-auto"
    >
        <div class="left text-center py-6 px-4 md:py-auto md:px-auto w-full md:w-3/5 space-y-2 lg:space-y-6">
            <h1 class="text-4xl font-bold">About Us</h1>
            <div class="content text-lg">
                <p>
                    Purity Conference is a conference organized, especially for the youth, to preach and impart purity into the generation. The aim of our conferences is to impart each individual with the desire to remain pure for the Christ.
                    Though it might not look it, but there is so much the future suffers if the current generation is not cautioned on the relevance of being pure.
                </p>
            </div>
        </div>
        <div class="right h-72 bg-cover bg-center bg-gray-300 w-full md:w-2/5" style="background-image: url('/assets/img/img1.jpg')"></div>
    </section>

    <section v-else class="py-12 lg:py-14 px-8 sm:px-10 lg:px-16 bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-50 flex lg:flex-row-reverse flex-wrap
        xl:container xl:mx-auto"
    >
        <div class="text-center py-6 px-4 md:py-auto md:px-auto self-center w-full md:w-3/5">
            <h1 class="text-4xl font-bold">About Founder</h1>
            <div class="content text-base mt-4 md:text-lg">
                <p>Description not provided yet: Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maxime necessitatibus molestiae fuga consectetur odio non inventore eaque voluptatibus. Veniam vero nesciunt autem cupiditate. Quia exercitationem impedit nobis alias a.</p>
            </div>
        </div>
        <div class="h-72 bg-cover bg-center bg-gray-300 w-full md:w-2/5" style="background-image: url('/assets/img/img1.jpg')"></div>
    </section>
</template>

<script setup lang="ts">
    interface myProps{
        page: string
    }
    const prop = defineProps<myProps>()
</script>