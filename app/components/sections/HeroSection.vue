<template>
    <section class="w-full min-h-[80vh] flex items-center justify-center py-6 md:py-8 px-6 font-sans">
        <div class="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="flex flex-col space-y-6 z-10">
                <!-- Social Icons -->
                <div class="mb-2 w-max">
                    <UiDock class="m-0 p-0 border-none bg-transparent backdrop-blur-none shadow-none h-auto gap-4">
                        <UiDockIcon>
                            <a href="#"><img src="~/assets/icons/instagram.png" alt="Instagram"
                                    class="w-full h-full object-contain" /></a>
                        </UiDockIcon>
                        <UiDockIcon>
                            <a href="#"><img src="~/assets/icons/gmail.png" alt="Gmail"
                                    class="w-full h-full object-contain" /></a>
                        </UiDockIcon>
                        <UiDockIcon>
                            <a href="https://github.com/Aldiosebastiaan" target="_blank"><img
                                    src="~/assets/icons/github.png" alt="GitHub"
                                    class="w-full h-full object-contain" /></a>
                        </UiDockIcon>
                        <UiDockIcon>
                            <a href="#"><img src="~/assets/icons/linkedin.png" alt="LinkedIn"
                                    class="w-full h-full object-contain" /></a>
                        </UiDockIcon>
                        <UiDockIcon>
                            <a href="#"><img src="~/assets/icons/logos_facebook.png" alt="Facebook"
                                    class="w-full h-full object-contain" /></a>
                        </UiDockIcon>
                    </UiDock>
                </div>

                <div class="space-y-2">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Hi, there!</h2>
                    <h1
                        class="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-gray-900 leading-[1.05] tracking-tight">
                        I'm <span class="text-[#254DF5]">Aldio Sebastiansyah</span>
                    </h1>
                </div>

                <p class="text-gray-500 max-w-[40rem] leading-relaxed text-base md:text-lg mt-6 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <!-- Buttons -->
                <div class="flex flex-wrap items-center gap-4 pt-6">
                    <a href="#" class="inline-flex items-center gap-2 px-8 py-3 rounded-[2rem]
    bg-[#254DF5] text-white border-2 border-black
    hover:bg-white hover:text-black hover:border-[#254DF5]
    font-semibold text-sm shadow-md transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                        Download CV
                    </a>

                    <a href="#" class="inline-flex items-center justify-center gap-2 px-8 py-3
    rounded-[2rem] bg-white text-black border-2 border-[#254DF5]
    hover:bg-[#254DF5] hover:text-white hover:border-black
    font-bold text-sm shadow-sm hover:shadow-md transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                            <path d="M8 14h.01" />
                            <path d="M12 14h.01" />
                            <path d="M16 14h.01" />
                            <path d="M8 18h.01" />
                            <path d="M12 18h.01" />
                            <path d="M16 18h.01" />
                        </svg>
                        Contact Me
                    </a>
                </div>
            </div>

            <!-- Right Image -->
            <div class="relative w-full max-w-lg lg:max-w-xl mx-auto lg:ml-auto mt-12 lg:mt-0 flex justify-center">
                <!-- Blobs behind image -->
                <div class="absolute inset-0 -z-10 scale-[1.35] translate-x-8 -translate-y-4">
                    <!-- Stroke Blob -->
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-0 w-full h-full text-transparent stroke-[#1A1A1A] stroke-[2px] -translate-x-2 translate-y-3">
                        <path
                            d="M49.2,-61.2C64.4,-52.1,77.6,-38.3,83.1,-21.8C88.6,-5.3,86.5,14,77.5,30.3C68.5,46.6,52.6,59.8,35.1,68.2C17.6,76.6,-1.6,80,-19.7,75.4C-37.8,70.8,-54.9,58.3,-67.2,42.4C-79.5,26.5,-87,7.2,-83.4,-10.1C-79.7,-27.4,-64.8,-42.6,-49.4,-51.9C-34.1,-61.2,-18.3,-64.6,-1.3,-63C15.7,-61.4,34.1,-70.3,49.2,-61.2Z"
                            transform="translate(100 100) scale(1.15)" />
                    </svg>
                    <!-- Solid Blue Blob -->
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-0 w-full h-full text-[#1A4BFF] fill-current">
                        <path
                            d="M49.2,-61.2C64.4,-52.1,77.6,-38.3,83.1,-21.8C88.6,-5.3,86.5,14,77.5,30.3C68.5,46.6,52.6,59.8,35.1,68.2C17.6,76.6,-1.6,80,-19.7,75.4C-37.8,70.8,-54.9,58.3,-67.2,42.4C-79.5,26.5,-87,7.2,-83.4,-10.1C-79.7,-27.4,-64.8,-42.6,-49.4,-51.9C-34.1,-61.2,-18.3,-64.6,-1.3,-63C15.7,-61.4,34.1,-70.3,49.2,-61.2Z"
                            transform="translate(100 100) scale(1.15)" />
                    </svg>
                </div>

                <img src="/images/hero.png" alt="Aldio Sebastiansyah"
                    class="relative z-10 w-full max-w-[550px] h-auto object-contain object-bottom drop-shadow-2xl" />
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
// HeroSection component
</script>
