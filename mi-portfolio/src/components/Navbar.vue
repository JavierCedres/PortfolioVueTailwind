<template>
    <header class="fixed w-full bg-slate-900/80 backdrop-blur border-b border-slate-700 z-50">
        <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <router-link to="/" class="font-bold text-sky-400 text-lg">Javier</router-link>
            <nav class="flex gap-6 text-sm text-slate-400">
                <router-link
                    v-for="item in links"
                    :key="item.to"
                    :to="item.to"
                    class="hover:text-sky-400 transition"
                    active-class="text-sky-400 font-medium"
                >
                    {{ item.label }}
                </router-link>
            </nav>
        </div>
    </header>
    <router-view />
</template>

<script setup>
const links = [
    { to: "/about", label: "Sobre mí" },
    { to: "/projects", label: "Proyectos" },
    { to: "/skills", label: "Habilidades" },
    { to: "/experience", label: "Experiencia" },
    { to: "/contact", label: "Contacto" },
]
</script>