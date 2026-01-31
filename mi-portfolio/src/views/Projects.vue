<template>
    <div class="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
        <div class="max-w-5xl mx-auto px-6 pt-24 flex-grow">
            <section class="mb-16">
                <h2 class="text-2xl font-semibold text-sky-400">Proyectos</h2>
                <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <ProjectCard
                        v-for="project in projects"
                        :key="project.title"
                        v-bind="project"
                    />
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>


<script setup lang="ts">
import Footer from '../components/Footer.vue';
import ProjectCard from '../components/ProjectCard.vue'
import { Project } from '../interfaces/Project';

const projects: Project[] = [
    {
        title: "Proyecto de DSW",
        description: "Repositorio de GitHub en el que se desarrolla el proyecto de la asignatura Desarrollo de Software Web.",
        link: "https://github.com/JavierCedres/dswBesayJavier"
    },
    {
        title: "Demo Web Development Projects",
        description: "Colección de demos de sitios web construidos con HTML, CSS y JavaScript, con ejemplos reales desplegados.",
        link: "https://thatquietkid.github.io/web-development-projects/"
    },
    {
        title: "Plantilla de Portafolio",
        description: "Plantilla de portafolio web minimalista para desarrolladores, con demo públicamente disponible.",
        link: "https://portafoliotemplate.dev"
    },
    {
        title: "web2Project Demo",
        description: "Demo de web2Project, un sistema de gestión de proyectos de código abierto accesible en línea.",
        link: "https://www.opendemo.org/web2project-demo.html"
    }
]
</script>