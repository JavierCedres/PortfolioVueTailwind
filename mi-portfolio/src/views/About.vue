<template>
    <div class="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
        <div class="max-w-5xl mx-auto px-6 pt-24 flex-grow">
            <header class="mb-20 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                <div>
                    <h1 class="text-4xl font-bold text-sky-400">Javier</h1>
                    <p class="mt-2 text-slate-400">Frontend Developer · Vue · Tailwind</p>
                </div>
                <p class="text-slate-400">javier@gmail.com</p>
            </header>
            <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-800 p-8 rounded-xl">
                <div class="flex justify-center">
                    <img src="../assets/imgs/profile.jpg" alt="profile" class="w-64 h-64 rounded-full object-cover border-4 border-sky-500 shadow-lg">
                </div>
                <div>
                    <h2 class="text-2xl font-semibold text-sky-400">Sobre mí</h2>
                    <p class="mt-4 text-slate-300 leading-relaxed">
                        Desarrollador de software junior con experiencia internacional adquirida en dos programas Erasmus en Polonia. Trabajé para la 
                        misma empresa en ambas ocasiones, primero durante mis prácticas de formación profesional y posteriormente en un Erasmus de 
                        postgrado. Estas experiencias me permitieron reforzar mi pasión por la programación, adaptarme a entornos multiculturales y 
                        participar en proyectos reales tanto frontend como full-stack. 
                    </p>
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '../components/Footer.vue';
</script>