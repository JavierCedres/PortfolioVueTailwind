<template>
    <div class="border border-white/10 rounded-lg p-4">
        <h3 class="font-medium">{{ title }}</h3>
        <p class="my-2 text-sm text-white/70">{{ description }}</p>
        <a :href="link">Ver proyecto</a>
    </div>
</template>

<script setup>
    defineProps({
        title: String,
        description: String,
        link: String
    })
</script>