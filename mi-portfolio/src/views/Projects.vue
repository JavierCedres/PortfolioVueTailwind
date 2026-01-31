<template>
    <div id="top" class="min-h-screen bg-black text-white flex flex-col">
        <div class="lg:w-4xl sm:w-xl max-w-4xl mx-auto px-6 pt-20 flex-grow">
            <section class="mb-16">
                <h2 class="text-2xl font-semibold">Proyectos</h2>
                <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <ProjectCard v-for="project in projects" :key="project.title" :title="project.title" :description="project.description" :link="project.link" />
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