<script lang="ts" setup>
import { ref } from "vue";

import FluidCursor from "./components/effects/FluidCursor.vue";
import Navbar from "./components/layout/Navbar.vue";
import HeroSection from "./components/sections/HeroSection.vue";
import AboutSection from "./components/sections/AboutSection.vue";
import SkillsSection from "./components/sections/SkillsSection.vue";

</script>

<template>
  <div class="relative min-h-screen w-full bg-gray-50 flex flex-col items-center pt-8">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <main class="w-full flex-1">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>

    <ClientOnly>
      <FluidCursor />
    </ClientOnly>
  </div>
</template>