<template>
  <div class="relative min-h-screen w-full bg-gray-50 flex flex-col items-center pt-8">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectSection />
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

<script lang="ts" setup>

</script>