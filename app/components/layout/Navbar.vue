<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const { isFluidCursorEnabled, toggleFluidCursor } = useFluidCursor();

const isMobileMenuOpen = ref(false);

const navLinks = [
  { id: "home", name: "Home", href: "#home" },
  { id: "about", name: "About Me", href: "#about" },
  { id: "skills", name: "Tech Stack", href: "#skills" },
  { id: "projects", name: "Featured Projects", href: "#projects" },
  { id: "contact", name: "Contact Me", href: "#contact" },
];

const activeSection = ref("home");

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const updateActiveSection = () => {
  if (typeof window === "undefined") return;
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // If user scrolled near the bottom of the page, mark contact as active
  if (windowHeight + scrollPosition >= documentHeight - 60) {
    activeSection.value = "contact";
    return;
  }

  const offset = 180;
  for (let i = navLinks.length - 1; i >= 0; i--) {
    const link = navLinks[i];
    const element = document.getElementById(link.id);
    if (element) {
      const top = element.offsetTop - offset;
      if (scrollPosition >= top) {
        activeSection.value = link.id;
        return;
      }
    }
  }
  activeSection.value = "home";
};

const scrollToSection = (e: MouseEvent, href: string, id: string) => {
  e.preventDefault();
  closeMobileMenu();
  const targetElement = document.getElementById(id);
  if (targetElement) {
    activeSection.value = id;
    targetElement.scrollIntoView({ behavior: "smooth" });
    if (window.history && window.history.pushState) {
      window.history.pushState(null, "", href);
    }
  }
};

onMounted(() => {
  if (window.location.hash) {
    const hashId = window.location.hash.replace("#", "");
    if (navLinks.some((link) => link.id === hashId)) {
      activeSection.value = hashId;
    }
  }
  updateActiveSection();
  window.addEventListener("scroll", updateActiveSection, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);
});
</script>

<template>
  <header class="sticky top-4 sm:top-6 z-50 w-[92%] sm:w-full max-w-5xl mx-auto">
    <nav
      class="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#98aaff]/90 via-[#c4d2ff]/90 to-[#f3f6ff]/90 backdrop-blur-md shadow-lg shadow-blue-500/10 border border-white/60 w-full transition-all duration-300 relative z-50">

      <!-- Logo -->
      <a href="#home" @click="scrollToSection($event, '#home', 'home')"
        class="text-gray-900 font-bold text-base sm:text-xl tracking-tight hover:text-blue-600 transition-colors flex items-center gap-1.5 select-none">
        <span>MyPortfolio.</span>
      </a>

      <!-- Desktop Navigation Links -->
      <ul class="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-sm text-gray-700">
        <li v-for="link in navLinks" :key="link.id">
          <a :href="link.href" @click="scrollToSection($event, link.href, link.id)"
            class="relative pb-1 transition-colors duration-200 select-none group" :class="[
              activeSection === link.id
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 hover:text-blue-600',
            ]">
            {{ link.name }}
            <!-- Active / Hover Underline -->
            <span class="absolute bottom-0 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300"
              :class="activeSection === link.id ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'"></span>
          </a>
        </li>
      </ul>

      <!-- Actions (Fluid Cursor, Hire Me & Hamburger) -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Fluid Cursor Toggle Button -->
        <button type="button" @click="toggleFluidCursor"
          class="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 border backdrop-blur-sm select-none cursor-pointer shadow-xs hover:scale-105 active:scale-95"
          :class="[
            isFluidCursorEnabled
              ? 'bg-blue-600/15 text-blue-700 border-blue-400/60 hover:bg-blue-600/25'
              : 'bg-white/50 text-gray-500 border-gray-300 hover:text-gray-800 hover:bg-white/80'
          ]"
          :title="isFluidCursorEnabled ? 'Fluid Cursor: Aktif (Klik untuk mematikan)' : 'Fluid Cursor: Nonaktif (Klik untuk mengaktifkan)'"
          aria-label="Toggle Fluid Cursor">
          <!-- Status Indicator Dot -->
          <span class="relative flex h-2 w-2">
            <span v-if="isFluidCursorEnabled"
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 transition-colors duration-200"
              :class="isFluidCursorEnabled ? 'bg-blue-600' : 'bg-gray-400'"></span>
          </span>

          <!-- Cursor / Sparkle Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m4 4 7.07 17 2.51-7.39L21 11.07z" />
          </svg>

          <span class="hidden sm:inline">Fluid</span>
          <span>{{ isFluidCursorEnabled ? 'ON' : 'OFF' }}</span>
        </button>

        <!-- Mobile Hamburger Button -->
        <button type="button" @click="toggleMobileMenu"
          class="md:hidden p-1.5 rounded-full text-gray-800 hover:bg-white/50 transition-colors cursor-pointer"
          :aria-expanded="isMobileMenuOpen" aria-label="Toggle Navigation Menu">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Dropdown Menu -->
    <transition enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in" leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0">
      <div v-if="isMobileMenuOpen"
        class="md:hidden mt-2 p-4 rounded-3xl bg-white/95 backdrop-blur-xl shadow-xl border border-white/80 flex flex-col gap-2">
        <a v-for="link in navLinks" :key="link.id" :href="link.href"
          @click="scrollToSection($event, link.href, link.id)"
          class="px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between" :class="[
            activeSection === link.id
              ? 'bg-blue-50 text-blue-600 font-bold'
              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
          ]">
          <span>{{ link.name }}</span>
        </a>
      </div>
    </transition>
  </header>
</template>
