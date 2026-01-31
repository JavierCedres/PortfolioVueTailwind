<template>
    <div id="top" class="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
        <div class="max-w-5xl mx-auto px-6 pt-24 flex-grow">
            <section class="mb-16">
                <h1 class="text-4xl font-bold text-center text-sky-400">Javier Marcelo Cedrés González</h1>
                <p class="text-center mb-12 text-slate-400">Santa Cruz de Tenerife, España · javmarcego@gmail.com</p>
                <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-10">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                        <div>
                            <h2 class="text-2xl font-semibold text-slate-100">
                                Ulan Software
                            </h2>
                            <h3 class="text-xl text-slate-400">
                                Desarrollador Full-Stack
                            </h3>
                        </div>
                        <div class="md:text-right text-slate-400">
                            <h4 class="text-lg">Breslavia, Polonia</h4>
                            <h4 class="text-lg">Octubre 2024 – Abril 2025</h4>
                        </div>
                    </div>
                    <ul class="list-disc pl-5 space-y-2 mt-6 text-slate-300">
                        <li>Participé en la modernización de un proyecto legacy con el objetivo de presentarlo en NCBR-NAP, un programa de aceleración entre Polonia y EE.UU. que selecciona a 10 empresas tecnológicas polacas para conectar con mentores e inversores estadounidenses.</li>
                        <li>Contribuí a la migración de un proyecto de Vue 2 a Vue 3.</li>
                        <li>Fui uno de los desarrolladores principales en un proyecto secundario de la empresa.</li>
                    </ul>
                    <p class="mt-4 text-sm text-slate-400">– Tecnologías empleadas: MySQL · Vue · Vuetify · TypeScript · PHP</p>
                </div>
                <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-10">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                        <div>
                            <h2 class="text-2xl font-semibold text-slate-100">Ulan Software</h2>
                            <h3 class="text-xl text-slate-400">Desarrollador Frontend</h3>
                        </div>
                        <div class="md:text-right text-slate-400">
                            <h4 class="text-lg">Breslavia, Polonia</h4>
                            <h4 class="text-lg">Marzo 2024 – Mayo 2024</h4>
                        </div>
                    </div>
                    <ul class="list-disc pl-5 space-y-2 mt-6 text-slate-300">
                        <li>Realicé integraciones y creé componentes para varias plataformas web (p. ej., Twitch, Reddit, YouTube, Spotify).</li>
                    </ul>
                    <p class="mt-4 text-sm text-slate-400">– Tecnologías empleadas: Vue · Vuetify · TypeScript</p>
                </div>
                <div class="flex justify-end">
                    <button type="button" class="border border-slate-600 rounded-xl px-4 py-2 text-slate-100 hover:bg-sky-500 hover:text-slate-900 transition">Descargar</button>
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '../components/Footer.vue';
</script>