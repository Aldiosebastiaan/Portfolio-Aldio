<template>
  <section id="about" class="py-1 md:pt-4 md:pb-24 max-w-5xl mx-auto px-4 sm:px-10 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
      
      <!-- Left side: Image -->
      <div class="flex justify-center lg:justify-end">
        <div class="relative flex justify-center lg:justify-end">
          <img 
            src="assets/images/me-skill.png" 
            alt="About Me" 
            class="w-[520px] h-[540px] object-contain drop-shadow-xl"
          />
        </div>
      </div>

      <!-- Right side: Content -->
      <div class="flex flex-col items-start">
        
        <!-- Heading -->
        <h2 class="text-4xl font-bold mb-8">
          <span class="text-blue-600">About </span> 
          <span class="text-black">Me</span>
        </h2>

        <!-- Card text about me -->
        <div class="bg-gradient-to-r from-[#1B41FC] to-[#f8f8f8] rounded-2xl py-4 px-6 md:py-3 md:px-4 shadow-sm border-0 mb-8 w-[418px] h-[130px] flex items-center overflow-hidden">
          <p class="text-black text-[10px] md:text-xs leading-snug text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <!-- Stats -->
        <div class="flex flex-row items-center gap-8 md:gap-12 mb-10">
          <div class="flex flex-col items-center text-center">
            <span class="text-2xl md:text-3xl font-bold text-blue-600 mb-1">10+</span>
            <span class="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-medium">Certifications</span>
          </div>
          <div class="flex flex-col items-center text-center">
            <span class="text-2xl md:text-3xl font-bold text-blue-600 mb-1">1+</span>
            <span class="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-medium">Year Experience</span>
          </div>
          <div class="flex flex-col items-center text-center">
            <span class="text-2xl md:text-3xl font-bold text-blue-600 mb-1">5+</span>
            <span class="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-medium">Projects Completed</span>
          </div>
        </div>

        <!-- Button -->
        <button class="px-8 py-2.5 rounded-full border-2 border-blue-600 text-black bg-white font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
          Learn More
        </button>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// AboutSection Component
</script>
