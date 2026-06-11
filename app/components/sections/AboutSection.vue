<template>
  <section class="w-full min-h-screen flex items-center justify-center py-12 md:py-20 px-2 font-sans">
    <div class="max-w-6xl w-full mx-auto lg:-translate-x-6 grid grid-cols-1 lg:grid-cols-2 gap-30 items-center">

      <!-- Left Content (Image & Floating Icons) -->
      <div class="relative w-full max-w-md mx-auto flex justify-center items-center">
        <!-- Main Image -->
        <img src="~/assets/images/about.png" alt="About Me"
          class="relative w-full max-w-[440px] h-auto object-contain drop-shadow-2xl" />

        <!-- Floating Icons -->
        <div class="absolute -top-4 left-12 animate-[bounce_4s_infinite]">
          <img src="~/assets/icons/react.png" alt="React" class="w-16 h-16 drop-shadow-md" />
        </div>
        <div class="absolute -top-1 right-8 animate-[bounce_5s_infinite]">
          <img src="~/assets/icons/nextjs.png" alt="Next.js" class="w-20 h-auto drop-shadow-md" />
        </div>
        <div class="absolute top-32 left-2 animate-[bounce_5s_infinite]">
          <img src="~/assets/icons/typescript.png" alt="TypeScript" class="w-16 h-16 drop-shadow-md" />
        </div>
        <div class="absolute top-1/2 left-20 animate-[bounce_5.5s_infinite]">
          <img src="~/assets/icons/tailwindcss.png" alt="TailwindCSS" class="w-16 h-16 drop-shadow-md" />
        </div>
        <div class="absolute top-1/4 right-14 animate-[bounce_6s_infinite]">
          <img src="~/assets/icons/vite.png" alt="Vite" class="w-16 h-16 drop-shadow-md" />
        </div>
        <div class="absolute bottom-1/3 right-20 rotate-30 animate-[bounce_4.5s_infinite]">
          <img src="~/assets/icons/logos_vue.png" alt="Vue" class="w-16 h-16 drop-shadow-md" />
        </div>
        <div class="absolute bottom-12 left-12 animate-[bounce_5.5s_infinite]">
          <img src="~/assets/icons/expressjs.png" alt="Express"
            class="w-16 h-16 bg-black rounded-xl p-2 drop-shadow-md" />
        </div>
        <!-- Using nuxt icon as placeholder since TS icon isn't in folder -->
        <div class="absolute bottom-4 right-12 animate-[bounce_4s_infinite_reverse]">
          <img src="~/assets/icons/nuxt.png" alt="Nuxt" class="w-14 h-14 drop-shadow-md" />
        </div>
      </div>

      <!-- Right Content (Text & Stats) -->
      <div class="flex flex-col space-y-8 z-10">
        <!-- Title -->
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span class="text-[#254DF5]">About</span> <span class="text-gray-900">Me</span>
        </h2>

        <!-- Description Box -->
        <div class="bg-[#E4E9FC] rounded-xl p-6 md:p-8">
          <p class="text-gray-700 leading-relaxed text-[15px] md:text-base text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
        </div>

        <!-- Stats -->
        <div class="flex items-center gap-8 md:gap-12 pt-2">
          <div class="flex flex-col items-center text-center">
            <span class="text-3xl md:text-4xl font-extrabold text-[#254DF5] mb-1">5+</span>
            <span
              class="text-[10px] md:text-xs text-gray-500 font-semibold uppercase tracking-wider">Certifications</span>
          </div>
          <div class="flex flex-col items-center text-center">
            <span class="text-3xl md:text-4xl font-extrabold text-[#254DF5] mb-1">1+</span>
            <span class="text-[10px] md:text-xs text-gray-500 font-semibold uppercase tracking-wider">Year
              Experience</span>
          </div>
          <div class="flex flex-col items-center text-center">
            <span class="text-3xl md:text-4xl font-extrabold text-[#254DF5] mb-1">5+</span>
            <span class="text-[10px] md:text-xs text-gray-500 font-semibold uppercase tracking-wider">Projects
              Completed</span>
          </div>
        </div>

        <!-- Button -->
        <div class="pt-4">
          <a href="#"
            class="inline-flex items-center justify-center border-2 border-[#254DF5] text-gray-900 hover:bg-[#254DF5] hover:text-white hover:border-b-2 hover:border-black rounded-[2rem] px-8 py-3 font-bold text-sm transition-all bg-white shadow-sm hover:shadow-md">
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
