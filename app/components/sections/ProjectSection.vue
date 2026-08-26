<template>
  <section class="w-full relative py-20 md:py-32 bg-white overflow-hidden">
    <!-- Section Title -->
    <div class="mb-20 text-center z-30 relative px-6">
      <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
        <span class="text-[#254DF5]">Featured</span> Projects
      </h2>
      <p class="text-gray-500 max-w-2xl mx-auto mt-4 md:text-lg">
        Beberapa proyek terbaik yang telah saya kerjakan.
      </p>
    </div>

    <!-- Timeline Container -->
    <div class="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12">
      
      <!-- Center Line (Hidden on Mobile) -->
      <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gray-300 z-0">
         <!-- Blue Segment -->
         <div class="absolute top-0 left-0 w-full bg-[#254DF5] transition-all duration-200 ease-out" :style="{ height: blueLineHeight + 'px' }"></div>
         <!-- Top Blue Dot -->
         <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#254DF5] shadow-[0_0_0_8px_rgba(255,255,255,1)]"></div>
      </div>

      <!-- Project List -->
      <div class="flex flex-col gap-12 md:gap-24 relative z-10" ref="projectsContainer">
        <div v-for="(project, i) in projects" :key="i" 
             class="w-full flex flex-col md:flex-row items-center project-item"
             :class="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
          
          <!-- Empty half for desktop alignment -->
          <div class="hidden md:block w-1/2"></div>
          
          <!-- Card Wrapper -->
          <div class="w-full md:w-1/2 relative" :class="i % 2 === 0 ? 'md:pl-16 lg:pl-20' : 'md:pr-16 lg:pr-20'">
            
            <!-- Horizontal Connector (Hidden on Mobile) -->
            <div class="hidden md:block absolute top-1/2 -translate-y-1/2 h-1 z-0 transition-colors duration-300 ease-out"
                 :class="[
                   i % 2 === 0 ? 'left-0 w-16 lg:w-20' : 'right-0 w-16 lg:w-20',
                   activeProjects[i] ? 'bg-[#254DF5]' : 'bg-gray-300'
                 ]">
            </div>
            
            <!-- Card -->
            <div class="bg-white rounded-[32px] shadow-[0_20px_60px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col relative z-10 hover:shadow-[0_20px_60px_rgb(0,0,0,0.12)] transition-shadow duration-300"
                 :class="activeProjects[i] ? 'ring-2 ring-[#254DF5]/20' : ''">
               <!-- Image Placeholder -->
               <div class="bg-[#d4d4d4] w-full aspect-[16/9] relative group overflow-hidden">
                 <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               
               <!-- Card Content -->
               <div class="p-6 sm:p-8 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 bg-white">
                  <h3 class="text-xl sm:text-2xl font-bold text-gray-900">{{ project.title }}</h3>
                  
                  <div class="flex items-center gap-3 w-full xl:w-auto justify-between xl:justify-start">
                     <!-- Github Button -->
                     <a :href="project.github" target="_blank" class="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition text-sm font-semibold text-gray-800">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                        Code
                     </a>
                     <!-- View Project Button -->
                     <a :href="project.link" target="_blank" class="px-5 sm:px-6 py-2.5 rounded-full bg-[#254DF5] hover:bg-blue-700 transition text-sm font-semibold text-white shadow-lg shadow-blue-500/30">
                        View Project
                     </a>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const projects = [
  {
    title: 'Nama Project',
    image: '', 
    github: '#',
    link: '#'
  },
  {
    title: 'Nama Project',
    image: '', 
    github: '#',
    link: '#'
  },
  {
    title: 'Nama Project',
    image: '', 
    github: '#',
    link: '#'
  },
  {
    title: 'Nama Project',
    image: '', 
    github: '#',
    link: '#'
  }
]

const blueLineHeight = ref(0)
const projectsContainer = ref<HTMLElement | null>(null)
const activeProjects = ref<boolean[]>(Array(projects.length).fill(false))

const handleScroll = () => {
  if (projectsContainer.value) {
    const rect = projectsContainer.value.getBoundingClientRect()
    // Ketinggian pemicu animasi (misalnya saat 60% layar menyentuh elemen)
    const viewportMiddle = window.innerHeight * 0.6 
    
    // Hitung jarak elemen dari garis scroll pemicu
    const scrollDistanceIntoContainer = viewportMiddle - rect.top
    
    if (scrollDistanceIntoContainer < 0) {
      blueLineHeight.value = 0
    } else if (scrollDistanceIntoContainer > rect.height) {
      blueLineHeight.value = rect.height
    } else {
      blueLineHeight.value = scrollDistanceIntoContainer
    }

    // Update status aktif untuk setiap garis horizontal cabang
    const items = projectsContainer.value.querySelectorAll('.project-item')
    items.forEach((item, index) => {
      const itemCenterY = (item as HTMLElement).offsetTop + ((item as HTMLElement).offsetHeight / 2)
      // Jika scroll sudah melewati titik tengah dari card ini, aktifkan
      if (scrollDistanceIntoContainer >= itemCenterY) {
        activeProjects.value[index] = true
      } else {
        activeProjects.value[index] = false
      }
    })
  }
}

onMounted(() => {
  // Allow DOM to render then calculate
  setTimeout(handleScroll, 100)
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>
