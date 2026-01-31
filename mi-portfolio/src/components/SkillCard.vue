<template>
    <div class="border border-white/10 rounded-lg p-4">
        <div class="flex items-center gap-4">
            <img :src="logo" :alt="name + ' logo'" class="w-10 h-10" />
            <h3 class="font-medium">{{ name }}</h3>
        </div>
        <p class="my-2 text-sm text-white/70">{{ description }}</p>
        <div class="w-full bg-white/10 rounded-full h-4 mt-4">
            <div class="bg-white h-4 rounded-full" :style="{ width: level + '%' }"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps({
        logo: String,
        name: String,
        description: String,
        level: Number,
    })
</script>