<template>
    <header class="fixed w-full bg-black/80 backdrop-blur border-b border-white/10">
        <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <router-link to="/" class="font-semibold text-white">Javier</router-link>
            <nav class="flex gap-6 text-sm text-white/70">
                <router-link to="/about">Sobre mi</router-link>
                <router-link to="/projects">Proyectos</router-link>
                <router-link to="/skills">Habilidades</router-link>
                <router-link to="/experience">Experiencia</router-link>
                <router-link to="/contact">Contacto</router-link>
            </nav>
        </div>
    </header>
    <router-view />
</template>