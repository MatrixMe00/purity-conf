<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold px-4"
            :class="arrayData.length ? 'md:self-start':''"
        >{{title}}</h1>
        <div 
            v-if="arrayData.length"
            class="p-4 grid justify-center content-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3"
        >
            <Card
                v-for="(card, index) in arrayData"
                :key="index" 
                :card="CardType.EVENT"
                :card-data="card"
            />
        </div>
        <div v-else
            class="p-4 flex items-center justify-center"
        >
            <p v-if="noDataMessage"
                class="p-3 flex flex-col space-y-5"
            >
                <i class="fas fa-box-open text-4xl text-neutral-600"></i>
                <span>{{noDataMessage}}</span></p>
            <p v-else
                class="p-3 flex flex-col space-y-5"
            >
                <i class="fas fa-box-open text-4xl text-neutral-600"></i>
                <span>No event in this category</span></p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {CardType} from "~/mixins/globalVars"

    interface fileProp{
        arrayData: {},
        title: string,
        noDataMessage?: string
    }

    const props = defineProps<fileProp>()
</script>