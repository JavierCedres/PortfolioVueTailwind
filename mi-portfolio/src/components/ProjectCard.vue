<template>
  <div class="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-sky-500 transition">
    <h3 class="font-semibold text-lg text-slate-100">{{ title }}</h3>
    <p class="mt-2 text-sm text-slate-400 leading-relaxed">{{ description }}</p>
    <a :href="link" class="inline-block mt-4 text-sm text-sky-400 hover:text-sky-300 transition">Ver proyecto →</a>
  </div>
</template>

<script setup>
    defineProps({
        title: String,
        description: String,
        link: String
    })
</script>