<template>
  <section class="w-full relative py-20 md:py-32 bg-white overflow-hidden font-sans">
    <!-- Section Title -->
    <div class="mb-16 md:mb-24 text-center z-30 relative px-6">
      <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
        <span class="text-[#254DF5]">Featured</span> Projects
      </h2>
      <p class="text-gray-500 max-w-2xl mx-auto mt-4 text-base md:text-lg">
        Beberapa proyek terbaik yang telah saya kerjakan dengan fokus pada performa, estetika, dan fungsionalitas.
      </p>
    </div>

    <!-- Container -->
    <div class="relative w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
      <!-- Project List -->
      <div class="flex flex-col gap-20 md:gap-32 relative z-10">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="w-full flex flex-col items-center justify-between gap-10 lg:gap-16 xl:gap-24"
          :class="i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
        >
          <!-- Project Card (Enlarged & Pushed to Outer Side) -->
          <div class="w-full lg:w-[58%] xl:w-[60%]">
            <div
              class="group relative bg-gray-50 rounded-[32px] sm:rounded-[36px] p-3 sm:p-4 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(37,77,245,0.15)] transition-all duration-500 overflow-hidden"
            >
              <!-- Card Inner Window Frame / Mockup Look -->
              <div class="relative w-full aspect-[16/10] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <!-- If image exists -->
                <img
                  v-if="project.image"
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <!-- Fallback / Preview Placeholder -->
                <div v-else class="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#EEF2FF] via-[#E0E7FF] to-[#F1F5F9] relative overflow-hidden">
                  <!-- Decorative blur circles -->
                  <div class="absolute -top-12 -right-12 w-48 h-48 bg-[#254DF5]/15 rounded-full blur-2xl"></div>
                  <div class="absolute -bottom-12 -left-12 w-48 h-48 bg-[#6366F1]/15 rounded-full blur-2xl"></div>

                  <!-- Mockup Content Box -->
                  <div class="relative z-10 flex flex-col items-center gap-4 max-w-sm">
                    <div class="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#254DF5] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-800 text-lg sm:text-xl">{{ project.title }}</h4>
                      <p class="text-xs sm:text-sm text-gray-500 mt-1">Project Preview & Showcase</p>
                    </div>
                  </div>
                </div>

                <!-- Hover Overlay Badge -->
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-white/80 text-xs font-bold text-gray-800 opacity-90 group-hover:opacity-100 transition-opacity">
                  {{ project.category || 'Featured' }}
                </div>
              </div>
            </div>
          </div>

          <!-- Project Information (Beside Card) -->
          <div class="w-full lg:w-[42%] xl:w-[40%] flex flex-col justify-center space-y-6">
            <!-- Badge & Index -->
            <div class="flex items-center gap-3">
              <span class="inline-flex items-center text-xs font-bold text-[#254DF5] bg-[#254DF5]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                0{{ i + 1 }} · {{ project.category || 'Web Application' }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 text-base md:text-lg leading-relaxed text-justify sm:text-left">
              {{ project.description }}
            </p>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-2 pt-1">
              <span
                v-for="(tag, tagIndex) in project.tags"
                :key="tagIndex"
                class="px-3.5 py-1.5 rounded-xl bg-gray-100 hover:bg-[#254DF5]/10 hover:text-[#254DF5] transition-colors text-xs sm:text-sm font-semibold text-gray-700"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-4 pt-3">
              <!-- View Live / Demo Button -->
              <a
                :href="project.link"
                target="_blank"
                class="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#254DF5] hover:bg-blue-700 active:scale-95 transition-all duration-200 text-sm sm:text-base font-bold text-white shadow-lg shadow-blue-500/25 group"
              >
                <span>View Project</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <!-- GitHub / Code Button -->
              <a
                :href="project.github"
                target="_blank"
                class="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 active:scale-95 transition-all duration-200 text-sm sm:text-base font-bold"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  title: string
  category: string
  description: string
  tags: string[]
  image: string
  github: string
  link: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Modern Platform',
    category: 'Full Stack App',
    description:
      'Platform e-commerce modern dengan fitur katalog produk interaktif, keranjang belanja real-time, integrasi gateway pembayaran, serta dashboard admin yang komprehensif.',
    tags: ['Nuxt.js', 'Vue.js', 'TailwindCSS', 'TypeScript', 'Prisma'],
    image: '',
    github: '#',
    link: '#'
  },
  {
    title: 'Analytics & Management Dashboard',
    category: 'Web Application',
    description:
      'Dashboard manajemen analitik berbasis web untuk memantau metrik performa bisnis, visualisasi grafik interaktif, dan pelaporan data secara realtime.',
    tags: ['React', 'Next.js', 'TailwindCSS', 'Chart.js', 'PostgreSQL'],
    image: '',
    github: '#',
    link: '#'
  },
  {
    title: 'Personal Portfolio & Showcase',
    category: 'Creative Website',
    description:
      'Website portfolio interaktif dengan animasi modern, fluid cursor effect, dark/light theme, dan performa tinggi yang dirancang untuk menampilkan karya secara elegan.',
    tags: ['Nuxt 3', 'TypeScript', 'TailwindCSS', 'Web Animations'],
    image: '',
    github: '#',
    link: '#'
  },
  {
    title: 'Task & Collaboration System',
    category: 'SaaS Platform',
    description:
      'Aplikasi manajemen tugas tim dengan fitur drag-and-drop Kanban board, notifikasi realtime, sistem komentar kolaboratif, dan manajemen role pengguna.',
    tags: ['Vue 3', 'Express.js', 'Node.js', 'MySQL', 'Docker'],
    image: '',
    github: '#',
    link: '#'
  }
]
</script>
