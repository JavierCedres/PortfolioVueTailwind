import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import Skills from '../views/Skills.vue'
import Experience from '../views/Experience.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: About
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    },
    {
        path: '/experience',
        name: 'Experience',
        component: Experience
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
