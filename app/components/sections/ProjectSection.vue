<template>
  <section id="projects"
    class="w-full relative py-14 sm:py-20 md:py-32 bg-white overflow-hidden font-sans scroll-mt-24">
    <!-- Section Title -->
    <div class="mb-12 sm:mb-16 md:mb-24 text-center z-30 relative px-4 sm:px-6 reveal-init">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
        <span class="text-[#254DF5]">Featured</span> Projects
      </h2>
      <p class="text-gray-500 max-w-2xl mx-auto mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
        Beberapa proyek terbaik yang telah saya kerjakan dengan fokus pada performa, estetika, dan fungsionalitas.
      </p>
    </div>

    <!-- Container -->
    <div class="relative w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
      <!-- Project List -->
      <div class="flex flex-col gap-14 sm:gap-20 md:gap-32 relative z-10">
        <div v-for="(project, i) in projects" :key="i"
          class="w-full flex flex-col items-center justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-24"
          :class="i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'">

          <!-- Project Card -->
          <div class="w-full lg:w-[58%] xl:w-[60%]"
            :class="i % 2 === 0 ? 'reveal-left reveal-delay-100' : 'reveal-right reveal-delay-100'">
            <div
              class="group relative bg-gray-50 rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(37,77,245,0.12)] transition-all duration-500 overflow-hidden">
              <!-- Card Inner Window Frame / Mockup Look -->
              <div
                class="relative w-full rounded-lg sm:rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                <!-- If image exists -->
                <img v-if="project.image" :src="project.image" :alt="project.title"
                  class="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-500 ease-out" />

                <!-- Fallback / Preview Placeholder -->
                <div v-else
                  class="w-full aspect-[16/10] flex flex-col items-center justify-center p-6 sm:p-8 text-center bg-gradient-to-br from-[#EEF2FF] via-[#E0E7FF] to-[#F1F5F9] relative overflow-hidden">
                  <!-- Decorative blur circles -->
                  <div
                    class="absolute -top-12 -right-12 w-36 sm:w-48 h-36 sm:h-48 bg-[#254DF5]/15 rounded-full blur-2xl">
                  </div>
                  <div
                    class="absolute -bottom-12 -left-12 w-36 sm:w-48 h-36 sm:h-48 bg-[#6366F1]/15 rounded-full blur-2xl">
                  </div>

                  <!-- Mockup Content Box -->
                  <div class="relative z-10 flex flex-col items-center gap-3 sm:gap-4 max-w-sm">
                    <div
                      class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white shadow-md flex items-center justify-center text-[#254DF5] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-800 text-base sm:text-xl">{{ project.title }}</h4>
                      <p class="text-[11px] sm:text-sm text-gray-500 mt-1">Project Preview & Showcase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Information (Beside Card) -->
          <div class="w-full lg:w-[42%] xl:w-[40%] flex flex-col justify-center space-y-4 sm:space-y-6"
            :class="i % 2 === 0 ? 'reveal-right reveal-delay-200' : 'reveal-left reveal-delay-200'">
            <!-- Title -->
            <h3 class="text-xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-justify sm:text-left">
              {{ project.description }}
            </p>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex"
                class="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-gray-100 hover:bg-[#254DF5]/10 hover:text-[#254DF5] transition-colors text-[11px] sm:text-sm font-semibold text-gray-700">
                {{ tag }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
              <!-- View Live / Demo Button -->
              <a :href="project.link" target="_blank"
                class="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-[#254DF5] hover:bg-blue-700 active:scale-95 transition-all duration-200 text-xs sm:text-base font-bold text-white shadow-lg shadow-blue-500/25 group">
                <span>View Project</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <!-- GitHub / Code Button -->
              <a :href="project.github" target="_blank"
                class="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 active:scale-95 transition-all duration-200 text-xs sm:text-base font-bold">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
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
  description: string
  tags: string[]
  image: string
  github: string
  link: string
}

const projects: Project[] = [
  {
    title: 'KA Furniture',
    description:
      'Platform e-commerce untuk furniture modern dengan fitur katalog produk interaktif, keranjang belanja real-time, integrasi gateway pembayaran.',
    tags: ['Nuxt.js', 'Vue.js', 'TailwindCSS', 'TypeScript'],
    image: '/images/ka-furniture.png',
    github: 'https://github.com/Aldiosebastiaan/KA-Furniture-NuxtJS',
    link: 'https://ka-furniture.vercel.app'
  },
  {
    title: 'Newt Shoes And Clean',
    description:
      'Dashboard manajemen analitik berbasis web untuk memantau metrik performa bisnis, visualisasi grafik interaktif, dan pelaporan data secara realtime.',
    tags: ['React', 'Next.js', 'TailwindCSS', 'Chart.js', 'PostgreSQL'],
    image: '/images/newt-shoes&clean.png',
    github: 'https://github.com/Aldiosebastiaan/Newt_ShoesAndClean',
    link: 'https://newt-shoes-and-clean-wmrn.vercel.app'
  }
]
</script>
