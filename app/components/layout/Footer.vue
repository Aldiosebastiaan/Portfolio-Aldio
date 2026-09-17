<template>
  <footer class="w-full bg-white border-t border-gray-100 py-12 md:py-16 px-6 font-sans relative z-10 reveal-init">
    <div class="max-w-[1240px] mx-auto flex flex-col items-center">

      <!-- Top Section: Brand & Navigation -->
      <div class="w-full flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-gray-100">

        <!-- Brand / Logo & Tagline -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <a href="#home" @click="scrollToSection($event, '#home')"
            class="text-gray-900 font-extrabold text-2xl tracking-tight hover:text-blue-600 transition-colors flex items-center gap-2 select-none">
            <span>MyPortfolio.</span>
          </a>
          <p class="text-sm text-gray-500 max-w-sm">
            Membangun pengalaman web modern, interaktif, dan berkinerja tinggi.
          </p>
        </div>

        <!-- Navigation Links -->
        <ul class="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm font-medium text-gray-600">
          <li v-for="link in footerLinks" :key="link.href">
            <a :href="link.href" @click="scrollToSection($event, link.href)"
              class="hover:text-blue-600 transition-colors">
              {{ link.name }}
            </a>
          </li>
        </ul>

        <!-- Social Icons -->
        <div class="flex items-center gap-3">
          <a v-for="social in socials" :key="social.name" :href="social.href" :target="social.target || '_blank'"
            :title="social.name"
            class="w-10 h-10 rounded-full bg-gray-50 hover:bg-blue-50 border border-gray-200/60 hover:border-blue-300 flex items-center justify-center p-2.5 transition-all duration-200 hover:scale-110 active:scale-95 shadow-2xs">
            <img :src="social.icon" :alt="social.name" class="w-full h-full object-contain" />
          </a>
        </div>
      </div>

      <!-- Bottom Section: Copyright & Back to Top -->
      <div class="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-gray-400">
        <p>© {{ currentYear }} Aldio Sebastiaan. All rights reserved.</p>

        <button type="button" @click="scrollToTop"
          class="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 font-medium transition-colors cursor-pointer group">
          <span>Back to top</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import githubIcon from '~/assets/icons/github.png';
import gmailIcon from '~/assets/icons/gmail.png';
import instagramIcon from '~/assets/icons/instagram.png';
import linkedinIcon from '~/assets/icons/linkedin.png';
import facebookIcon from '~/assets/icons/logos_facebook.png';

const currentYear = new Date().getFullYear();

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Tech Stack', href: '#skills' },
  { name: 'Featured Projects', href: '#projects' },
  { name: 'Contact Me', href: '#contact' },
];

const socials = [
  { name: 'GitHub', icon: githubIcon, href: 'https://github.com/Aldiosebastiaan', target: '_blank' },
  { name: 'LinkedIn', icon: linkedinIcon, href: '#', target: '_blank' },
  { name: 'Instagram', icon: instagramIcon, href: '#', target: '_blank' },
  { name: 'Gmail', icon: gmailIcon, href: 'mailto:aldiosebastiaan@gmail.com', target: '_self' },
  { name: 'Facebook', icon: facebookIcon, href: '#', target: '_blank' },
];

const scrollToSection = (e: MouseEvent, href: string) => {
  e.preventDefault();
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', href);
    }
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
