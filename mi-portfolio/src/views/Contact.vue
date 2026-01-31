<template>
    <div id="top" class="min-h-screen bg-black text-white flex flex-col">
        <div class="max-w-4xl mx-auto px-6 pt-20 flex-grow">
            <section class="mb-16">
                <h2 class="text-2xl font-semibold">¿Quieres ponerte en contacto conmigo?</h2>
                <form class="max-w-xl mx-auto bg-white/5 p-6 rounded-lg space-y-5 mt-15">
                    <div>
                        <label class="block text-sm text-white/80 mb-1">Correo electrónico</label>
                        <input type="email" placeholder="Email" class="w-full px-4 py-2 rounded bg-black border border-white/20 text-white "/>
                    </div>
                    <div>
                        <label class="block text-sm text-white/80 mb-1">Asunto</label>
                        <input type="text" placeholder="Asunto del mensaje" class="w-full px-4 py-2 rounded bg-black border border-white/20 text-white"/>
                    </div>
                    <div>
                        <label class="block text-sm text-white/80 mb-1">Mensaje</label>
                        <textarea rows="5" placeholder="Escribe tu mensaje aquí..." class="w-full px-4 py-2 rounded bg-black border border-white/20 text-white resize-none"></textarea>
                    </div>
                    <button type="submit" class="w-full py-2 rounded bg-white text-black font-medium hover:bg-black hover:text-white transition">Enviar mensaje</button>
                </form>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script setup>
    import Footer from '../components/Footer.vue';
</script>