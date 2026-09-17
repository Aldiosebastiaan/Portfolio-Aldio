<template>
    <section id="home"
        class="w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center py-6 sm:py-8 md:py-12 px-4 sm:px-6 font-sans scroll-mt-24 bg-white">
        <div class="max-w-[1600px] w-full mx-auto xl:px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">

            <!-- Left Info (Smooth Fade & Slide in) -->
            <div
                class="flex flex-col space-y-6 sm:space-y-8 z-10 reveal-left reveal-delay-100 items-center lg:items-start text-center lg:text-left">
                <!-- Social Icons -->
                <div class="mb-2 w-max mx-auto lg:mx-0">
                    <Dock
                        class="m-0 p-0 border-none bg-transparent backdrop-blur-none shadow-none h-auto gap-3 sm:gap-4">
                        <DockIcon>
                            <a href="#"><img src="~/assets/icons/instagram.png" alt="Instagram"
                                    class="w-full h-full object-contain" /></a>
                        </DockIcon>
                        <DockIcon>
                            <a href="#"><img src="~/assets/icons/gmail.png" alt="Gmail"
                                    class="w-full h-full object-contain" /></a>
                        </DockIcon>
                        <DockIcon>
                            <a href="https://github.com/Aldiosebastiaan" target="_blank"><img
                                    src="~/assets/icons/github.png" alt="GitHub"
                                    class="w-full h-full object-contain" /></a>
                        </DockIcon>
                        <DockIcon>
                            <a href="#"><img src="~/assets/icons/linkedin.png" alt="LinkedIn"
                                    class="w-full h-full object-contain" /></a>
                        </DockIcon>
                        <DockIcon>
                            <a href="#"><img src="~/assets/icons/logos_facebook.png" alt="Facebook"
                                    class="w-full h-full object-contain" /></a>
                        </DockIcon>
                    </Dock>
                </div>

                <div class="space-y-2">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Hi, there!
                    </h2>
                    <h1
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
                        I'm <span class="text-[#254DF5]">Aldio Sebastiansyah</span>
                    </h1>
                </div>

                <p
                    class="text-gray-500 max-w-[50rem] leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 text-center lg:text-justify">
                    Saya merupakan Mahasiswa Aktif Semester 7 Universitas Dian Nuswantoro Semarang, Program Studi Teknik
                    Informatika.
                    Yang tertarik di Bidang Software Engineering dan Web Development. Saat ini saya sedang berfokus pada
                    Front-End Web Development, dan sedang mendalami beberapa teknologi seperti React, Next.js, Vue.js,
                    TypeScript, dan TailwindCSS.
                </p>

                <!-- Buttons -->
                <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6">
                    <a href="#" class="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-[2rem]
    bg-[#254DF5] text-white border-2 border-black
    hover:bg-white hover:text-black hover:border-[#254DF5]
    font-semibold text-xs sm:text-sm shadow-md transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                        Download CV
                    </a>

                    <a href="#contact" @click="scrollToContact" class="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3
    rounded-[2rem] bg-white text-black border-2 border-[#254DF5]
    hover:bg-[#254DF5] hover:text-white hover:border-black
    font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-300">
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

            <div
                class="relative w-full max-w-lg lg:max-w-xl mx-auto lg:ml-auto mt-8 lg:mt-0 flex justify-center reveal-right reveal-delay-200">
                <img src="/images/hero.png" alt="Aldio Sebastiansyah"
                    class="relative z-10 w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[1000px] h-auto object-contain object-bottom drop-shadow-2xl ml-0 lg:ml-12" />
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
const scrollToContact = (e: MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        if (window.history && window.history.pushState) {
            window.history.pushState(null, "", "#contact");
        }
    }
};
</script>
