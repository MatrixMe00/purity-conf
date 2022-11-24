<template>
    <section v-if="page == 'home'" class="py-12 px-8 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 flex flex-wrap items-center text-white">
        <div class="left text-center py-6 px-4 md:py-auto md:px-auto w-full md:w-3/5">
            <h1 class="text-4xl font-bold">About Us</h1>
            <div class="content text-lg">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maxime necessitatibus molestiae fuga consectetur odio non inventore eaque voluptatibus. Veniam vero nesciunt autem cupiditate. Quia exercitationem impedit nobis alias a.</p>
            </div>
        </div>
        <div class="right h-72 bg-cover bg-center bg-gray-300 w-full md:w-2/5" style="background-image: url('/_nuxt/assets/img/img1.jpg')"></div>
    </section>

    <section v-else class="py-12 lg:py-14 px-8 sm:px-10 lg:px-16 bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-50 flex lg:flex-row-reverse flex-wrap">
        <div class="text-center py-6 px-4 md:py-auto md:px-auto self-center w-full md:w-3/5">
            <h1 class="text-4xl font-bold">About Founder</h1>
            <div class="content text-base mt-4 md:text-lg">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maxime necessitatibus molestiae fuga consectetur odio non inventore eaque voluptatibus. Veniam vero nesciunt autem cupiditate. Quia exercitationem impedit nobis alias a.</p>
            </div>
        </div>
        <div class="h-72 bg-cover bg-center bg-gray-300 w-full md:w-2/5" style="background-image: url('/_nuxt/assets/img/img1.jpg')"></div>
    </section>
</template>

<script setup lang="ts">
    interface myProps{
        page: string
    }
    const prop = defineProps<myProps>()
</script>