<template>
  <section id="about" class="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 font-sans scroll-mt-24 bg-white">
    <div class="max-w-[1600px] w-full mx-auto xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

      <!-- Left Content (Image & Floating Icons) -->
      <div
        class="relative w-full max-w-lg lg:max-w-xl mx-auto flex justify-center items-center reveal-left reveal-delay-100">
        <!-- Main Image -->
        <img src="/images/about.png" alt="About Me"
          class="relative w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[1000px] h-auto object-contain drop-shadow-2xl" />

        <!-- Floating Icons (Responsive sizing & placement) -->
        <div class="absolute -top-2 sm:-top-4 left-4 sm:left-12 animate-[bounce_4s_infinite]">
          <img src="~/assets/icons/skills_icon/react.png" alt="React"
            class="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 drop-shadow-md" />
        </div>
        <div class="absolute -top-1 right-3 sm:right-8 animate-[bounce_5s_infinite]">
          <img src="~/assets/icons/skills_icon/nextjs.png" alt="Next.js"
            class="w-12 h-auto sm:w-16 lg:w-20 drop-shadow-md" />
        </div>
        <div class="absolute top-24 sm:top-32 left-0 sm:left-2 animate-[bounce_5s_infinite]">
          <img src="~/assets/icons/skills_icon/typescript.png" alt="TypeScript"
            class="w-9 h-9 sm:w-13 sm:h-13 lg:w-16 lg:h-16 drop-shadow-md" />
        </div>
        <div class="absolute top-1/2 left-8 sm:left-20 animate-[bounce_5.5s_infinite]">
          <img src="~/assets/icons/skills_icon/tailwindcss.png" alt="TailwindCSS"
            class="w-9 h-9 sm:w-13 sm:h-13 lg:w-16 lg:h-16 drop-shadow-md" />
        </div>
        <div class="absolute top-1/4 right-6 sm:right-14 animate-[bounce_6s_infinite]">
          <img src="~/assets/icons/skills_icon/vite.png" alt="Vite"
            class="w-9 h-9 sm:w-13 sm:h-13 lg:w-16 lg:h-16 drop-shadow-md" />
        </div>
        <div class="absolute bottom-1/3 right-8 sm:right-20 rotate-30 animate-[bounce_4.5s_infinite]">
          <img src="~/assets/icons/skills_icon/logos_vue.png" alt="Vue"
            class="w-9 h-9 sm:w-13 sm:h-13 lg:w-16 lg:h-16 drop-shadow-md" />
        </div>
        <div class="absolute bottom-10 left-6 sm:left-12 animate-[bounce_5.5s_infinite]">
          <img src="~/assets/icons/skills_icon/expressjs.png" alt="Express"
            class="w-9 h-9 sm:w-13 sm:h-13 lg:w-16 lg:h-16 bg-black rounded-xl p-1.5 sm:p-2 drop-shadow-md" />
        </div>
        <div class="absolute bottom-2 sm:bottom-4 right-6 sm:right-12 animate-[bounce_4s_infinite_reverse]">
          <img src="~/assets/icons/skills_icon/nuxt.png" alt="Nuxt"
            class="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 drop-shadow-md" />
        </div>
      </div>

      <!-- Right Content (Text & Stats) -->
      <div class="flex flex-col space-y-6 sm:space-y-8 z-10 reveal-right reveal-delay-200">
        <!-- Title -->
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center lg:text-left">
          <span class="text-[#254DF5]">About</span> <span class="text-gray-900">Me</span>
        </h2>

        <!-- Description Box -->
        <div class="bg-[#E4E9FC] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
          <p class="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl text-justify">
            Saya memiliki kemampuan dalam mengembangkan antarmuka web yang modern, interaktif, dan responsif.
            Serta terbiasa memadukan estetika desain UI/UX yang bersih dengan struktur kode yang efisien menggunakan
            ekosistem
            modern seperti Vue/Nuxt, React/Next.js, TypeScript, dan TailwindCSS dengan bantuan "Agent". Saya selalu
            antusias untuk mempelajari
            teknologi baru, memecahkan tantangan teknis yang kompleks, serta menciptakan solusi digital yang memberikan
            pengalaman terbaik bagi pengguna.
          </p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-2 sm:gap-6 md:gap-12 pt-2">
          <div class="flex flex-col items-center text-center p-2 rounded-xl bg-white/60 sm:bg-transparent">
            <span class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#254DF5] mb-0.5 sm:mb-1">5+</span>
            <span
              class="text-[9px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider">Certifications</span>
          </div>
          <div class="flex flex-col items-center text-center p-2 rounded-xl bg-white/60 sm:bg-transparent">
            <span class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#254DF5] mb-0.5 sm:mb-1">1</span>
            <span class="text-[9px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider">Year
              Experience</span>
          </div>
          <div class="flex flex-col items-center text-center p-2 rounded-xl bg-white/60 sm:bg-transparent">
            <span class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#254DF5] mb-0.5 sm:mb-1">2</span>
            <span class="text-[9px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider">Projects
              Completed</span>
          </div>
        </div>

        <!-- Button -->
        <div class="pt-2 sm:pt-4 flex justify-center lg:justify-start">
          <a href="#"
            class="inline-flex items-center justify-center border-2 border-[#254DF5] text-gray-900 hover:bg-[#254DF5] hover:text-white hover:border-black rounded-[2rem] px-7 sm:px-8 py-2.5 sm:py-3 font-bold text-xs sm:text-sm transition-all bg-white shadow-sm hover:shadow-md">
            Learn More
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// AboutSection component
</script>
