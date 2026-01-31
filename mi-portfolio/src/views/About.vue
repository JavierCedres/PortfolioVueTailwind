<template>
    <div id="top" class="min-h-screen bg-black text-white flex flex-col">
        <div class="max-w-4xl mx-auto px-6 pt-20 flex-grow">
            <header class="mb-16 flex justify-between items-center">
                <div>
                    <h1 class="text-4xl font-bold">Javier</h1>
                    <p class="mt-2 text-white/70">Frontend Developer · Vue · Tailwind</p>
                </div>
                <p class="text-white/70">javier@gmail.com</p>
            </header>
            <section class="lg:grid flex flex-col grid-cols-1 lg:grid-cols-2 mb-8">
                <div class="flex justify-center align-center lg:mb-0 mb-6">
                    <img src="../assets/imgs/profile.jpg" alt="profile" class="rounded-full w-90 h-90">
                </div>
                <div>
                    <h2 class="text-2xl font-semibold">Sobre mí</h2>
                    <p class="mt-4 text-white/70">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad sit recusandae iusto blanditiis. Adipisci ullam, explicabo pariatur, eos harum consequuntur non perferendis ipsam quo ad dolore, accusantium et! Similique, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo aspernatur, molestias porro, animi distinctio delectus ducimus modi dolore nobis odio optio ipsa beatae praesentium, reiciendis nam! Animi praesentium provident accusantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum debitis qui odio ipsam cumque error rem deserunt distinctio officiis aperiam assumenda quod explicabo similique, illo sint minus nisi maiores provident!</p>
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script setup>
    import Footer from '../components/Footer.vue';
</script>