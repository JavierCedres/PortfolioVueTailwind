<template>
    <div class="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
        <div class="max-w-5xl mx-auto px-6 pt-24 flex-grow">
            <section class="mb-16">
                <h2 class="text-2xl font-semibold text-sky-400">Habilidades</h2>
                <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <SkillCard
                        v-for="(skill, index) in skills"
                        :key="index"
                        v-bind="skill"
                    />
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue';
import SkillCard from '../components/SkillCard.vue';
import { Skill } from '../interfaces/Skill';

const skills: Skill[] = [
    {
        logo: '/src/assets/icons/javascript.svg',
        name: 'JavaScript',
        description: 'Habilidad desarrollada en el ciclo de DAW, asignatura DEW y proyectos personales.',
        level: 85
    },
    {
        logo: '/src/assets/icons/vue.svg',
        name: 'Vue.js',
        description: 'Habilidad desarrollada en el ciclo de DAW, asignatura DEW y prácticas de empresa.',
        level: 80
    },
    {
        logo: '/src/assets/icons/css.svg',
        name: 'CSS',
        description: 'Habilidad desarrollada en el ciclo de DAW, asignatura DOR y proyectos personales.',
        level: 75
    },
    {
        logo: '/src/assets/icons/python.svg',
        name: 'Python',
        description: 'Habilidad desarrollada en el ciclo de DAW, asignatura DSW y proyectos personales.',
        level: 95
    }
];
</script>