<script setup lang="ts">
import Folder from '../ui/Folder.vue'

// Import asset icons
import html5 from '~/assets/icons/skills_icon/devicon_html5.png'
import css from '~/assets/icons/skills_icon/skill-icons_css.png'
import js from '~/assets/icons/skills_icon/Group.png' // Assuming Group is JS/etc
import ts from '~/assets/icons/skills_icon/typescript.png'
import react from '~/assets/icons/skills_icon/react.png'
import nextjs from '~/assets/icons/skills_icon/nextjs.png'
import vue from '~/assets/icons/skills_icon/logos_vue.png'
import nuxt from '~/assets/icons/skills_icon/nuxt.png'
import tailwind from '~/assets/icons/skills_icon/tailwindcss.png'
import vite from '~/assets/icons/skills_icon/vite.png'
import express from '~/assets/icons/skills_icon/expressjs.png'
import mysql from '~/assets/icons/skills_icon/mysql.png'
import postgresql from '~/assets/icons/skills_icon/postgresql.png'
import docker from '~/assets/icons/skills_icon/docker.png'

const skills = [
    { id: 1, title: 'HTML5', icon: html5 },
    { id: 2, title: 'CSS', icon: css },
    { id: 3, title: 'JavaScript', icon: js },
    { id: 4, title: 'TypeScript', icon: ts },
    { id: 5, title: 'React', icon: react },
    { id: 6, title: 'Next.js', icon: nextjs },
    { id: 7, title: 'Vue.js', icon: vue },
    { id: 8, title: 'Nuxt', icon: nuxt },
    { id: 9, title: 'Tailwind CSS', icon: tailwind },
    { id: 10, title: 'Vite', icon: vite },
    { id: 11, title: 'Express.js', icon: express },
    { id: 12, title: 'MySQL', icon: mysql },
    { id: 13, title: 'PostgreSQL', icon: postgresql },
    { id: 14, title: 'Docker', icon: docker },
]
</script>

<template>
    <section class="w-full relative py-1 md:py-2 bg-gray-50 flex flex-col items-center overflow-x-hidden">
        <div class="mt-12 mb-12 text-center z-30">
            <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"> <span
                    class="text-[#254DF5]">Tech</span> Stack</h2>
            <p class="text-gray-500 max-w-2xl mx-auto mt-4 mb-16 md:text-lg">
                Kumpulan teknologi, framework, dan tools yang saya gunakan.
            </p>
        </div>

        <Folder :items="skills" color="#1B41FC" class="mt-24 mb-8 lg:mt-64">
            <template #item="{ item: currentItem, isOpen }">
                <div class="flex flex-col items-center justify-center gap-2 w-full h-full p-2 text-center">
                    <!-- Render the icon -->
                    <div
                        class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center p-1 bg-white/5 rounded-xl shadow-inner border border-white/10 transition-transform hover:scale-110">
                        <img :src="currentItem.icon" :alt="currentItem.title" class="w-full h-full object-contain" />
                    </div>
                    <!-- Title -->
                    <span
                        class="text-white/90 text-[10px] sm:text-xs font-semibold tracking-wide transition-opacity duration-300"
                        :class="isOpen ? 'opacity-100' : 'opacity-0'">
                        {{ currentItem.title }}
                    </span>
                </div>
            </template>
        </Folder>
    </section>
</template>
