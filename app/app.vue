<template>
  <div class="relative min-h-screen w-full bg-white flex flex-col items-center pt-8">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectSection />
    <ContactSection />
    <Footer />
    <main class="w-full flex-1">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>

    <ClientOnly>
      <FluidCursor v-if="isFluidCursorEnabled" />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
const { isFluidCursorEnabled } = useFluidCursor();
useScrollReveal();
</script>