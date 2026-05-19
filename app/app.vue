<script lang="ts" setup>
import { ref } from "vue";

import FluidCursor from "./components/effects/FluidCursor.vue"; 
import Navbar from "./components/layout/Navbar.vue";

</script>

<template>
  <div class="relative min-h-screen w-full bg-gray-50 flex flex-col items-center pt-8">
    <Navbar />
    
    <main class="w-full flex-1">
      <NuxtPage />
    </main>

    <FluidCursor />
  </div>
</template>