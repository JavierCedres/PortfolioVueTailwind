<template>
    <div id="top" class="min-h-screen bg-black text-white flex flex-col">
        <div class="max-w-4xl mx-auto px-6 pt-20 flex-grow">
            <section class="mb-16">
                <h1 class="text-4xl font-bold text-center">Javier Marcelo Cedrés González</h1>
                <p class="text-center mb-10 text-white/80">Santa Cruz de Tenerife, España · javmarcego@gmail.com</p>
                <div class="mb-10">
                    <div class="flex justify-between items-center">
                        <div>
                            <h2 class="text-2xl font-semibold">Ulan Software</h2>
                            <h3 class="text-xl text-white/80">Desarrollador Full-Stack</h3>
                        </div>
                        <div>
                            <h4 class="text-lg text-right">Breslavia, Polonia</h4>
                            <h4 class="text-lg text-white/80">Octubre 2024 – Abril 2025</h4>
                        </div>
                    </div>
                    <br/>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Participé en la modernización de un proyecto legacy con el objetivo de presentarlo en NCBR-NAP, un programa de aceleración entre Polonia y EE.UU. que selecciona a 10 empresas tecnológicas polacas para conectar con mentores e inversores estadounidenses.</li>
                        <li>Contribuí a la migración de un proyecto de Vue 2 a Vue 3.</li>
                        <li>Fui uno de los desarrolladores principales en un proyecto secundario de la empresa.</li>
                    </ul>
                    <br/>
                    <p>– Tecnologías empleadas: MySQL · Vue · Vuetify · TypeScript · PHP </p>
                </div>
                <div class="mb-10">
                    <div class="flex justify-between items-center">
                        <div>
                            <h2 class="text-2xl font-semibold">Ulan Software</h2>
                            <h3 class="text-xl text-white/80">Desarrollador Frontend</h3>
                        </div>
                        <div>
                            <h4 class="text-lg text-right">Breslavia, Polonia</h4>
                            <h4 class="text-lg text-white/80">Marzo 2024 – Mayo 2024</h4>
                        </div>
                    </div>
                    <br/>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Realicé integraciones y creé componentes para varias plataformas web (p. ej., Twitch, Reddit, YouTube, Spotify). </li>
                    </ul>
                    <br/>
                    <p>– Tecnologías empleadas: Vue · Vuetify · TypeScript</p>
                </div>
                <div class="flex justify-end">
                    <button type="button" class="border rounded-xl p-2 hover:bg-white hover:text-black transition">Descargar</button>
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script setup>
    import Footer from '../components/Footer.vue';
</script>