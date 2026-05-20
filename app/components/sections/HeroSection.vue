<template>
  <section class="flex w-[1148px] h-[556px] mx-auto items-center justify-between py-16 mt-6 bg-white translate-x-6">
    <div class="w-1/2 flex flex-col gap-y-6 pl-12">
      <Dock class="mx-0 mt-0 mb-2 border-none bg-transparent p-0 gap-x-4 h-auto">
        <DockIcon>
          <img src="/assets/icons/instagram.png" alt="Instagram" class="h-full w-full object-contain" />
        </DockIcon>
        <DockIcon>
          <img src="/assets/icons/gmail.png" alt="Gmail" class="h-full w-full object-contain" />
        </DockIcon>
        <DockIcon>
          <img src="/assets/icons/github.png" alt="GitHub" class="h-full w-full object-contain" />
        </DockIcon>
        <DockIcon>
          <img src="/assets/icons/linkedin.png" alt="LinkedIn" class="h-full w-full object-contain" />
        </DockIcon>
        <DockIcon>
          <img src="/assets/icons/logos_facebook.png" alt="Facebook" class="h-full w-full object-contain" />
        </DockIcon>
      </Dock>

      <div class="space-y-1">
        <h4 class="text-2xl font-medium text-gray-900">Hi, there!</h4>
        <h3 class="text-4xl font-bold text-gray-950">
          I'm <span class="text-blue-600">Aldio Sebastiansyah</span>
        </h3>
      </div>

      <p class="text-base text-gray-600 max-w-[500px] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehender it in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <div class="flex gap-x-4 mt-6">
        <a 
          href="#" 
          class="inline-flex items-center gap-x-2 bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-sm transition hover:bg-blue-700"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download CV
        </a>
        <button 
          class="inline-flex items-center gap-x-2 border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-full text-sm transition hover:bg-blue-50"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Contact Me
        </button>
      </div>
    </div>

    <div class="w-1/2 h-full relative flex items-center justify-center pr-12"> 
      <img 
        src="/assets/images/hero.png" 
        alt="Aldio-Sebastiansyah" 
        class="relative z-10 w-[80%] max-w-[450px] object-contain bottom-0 origin-bottom"
      />
    </div>
  </section>
</template>

<script setup>
import Dock from '../ui/dock/Dock.vue'
import DockIcon from '../ui/dock/DockIcon.vue'
</script>

<style scoped>
/* konfigurasi tambahan */
</style>