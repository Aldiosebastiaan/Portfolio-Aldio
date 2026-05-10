<script setup lang="ts">
import { ref } from "vue";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "About", href: "#", active: false },
  { name: "Skills", href: "#", active: false },
  { name: "Projects", href: "#", active: false },
  { name: "Contact", href: "#", active: false },
];
</script>

<template>
  <nav
    class="flex items-center justify-between px-6 py-3 rounded-md bg-gradient-to-r from-[#98aaff] via-[#c4d2ff] to-[#f3f6ff] shadow-md shadow-gray-300/50 w-full max-w-4xl mx-auto"
  >
    <!-- Logo -->
    <a href="#" class="text-gray-900 font-bold text-xl tracking-tight">
      MyPortfolio.
    </a>

    <!-- Navigation Links -->
    <ul class="flex items-center gap-8 font-medium text-sm text-gray-700">
      <li v-for="link in navLinks" :key="link.name">
        <a
          :href="link.href"
          class="relative pb-1"
          :class="[
            link.active
              ? 'text-blue-600 font-semibold'
              : 'hover:text-gray-900 transition-colors',
          ]"
        >
          {{ link.name }}
          <!-- Active Indicator -->
          <span
            v-if="link.active"
            class="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full"
          ></span>
        </a>
      </li>
    </ul>

    <!-- Actions (Dark Mode & Hire Me) -->
    <div class="flex items-center gap-4">
      <!-- Moon Icon -->
      <button
        class="text-gray-700 hover:text-gray-900 transition-colors"
        aria-label="Toggle Dark Mode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          <path d="M19 3v4" />
          <path d="M21 5h-4" />
        </svg>
      </button>

      <!-- Hire Me Button -->
      <button
        class="bg-[#2563eb] hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm"
      >
        Hire Me
      </button>
    </div>
  </nav>
</template>
