<template>
    <div class="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
        <div class="max-w-5xl mx-auto px-6 pt-24 flex-grow">
            <section class="mb-16">
                <h2 class="text-2xl font-semibold text-sky-400 mb-8">¿Quieres ponerte en contacto conmigo?</h2>
                <form class="max-w-xl mx-auto bg-slate-800 p-8 rounded-xl space-y-5">
                    <div>
                        <label class="block text-sm text-slate-400 mb-1">Correo electrónico</label>
                        <input type="email" class="w-full px-4 py-2 rounded bg-slate-900 border border-slate-700 text-slate-100"/>
                    </div>
                    <div>
                        <label class="block text-sm text-slate-400 mb-1">Asunto</label>
                        <input type="text" class="w-full px-4 py-2 rounded bg-slate-900 border border-slate-700 text-slate-100"/>
                    </div>
                    <div>
                        <label class="block text-sm text-slate-400 mb-1">Mensaje</label>
                        <textarea rows="5" class="w-full px-4 py-2 rounded bg-slate-900 border border-slate-700 text-slate-100 resize-none"></textarea>
                    </div>
                    <button type="submit" class="w-full py-2 rounded bg-sky-500 text-slate-900 font-medium hover:bg-sky-600 transition">Enviar mensaje</button>
                </form>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '../components/Footer.vue'
</script>
