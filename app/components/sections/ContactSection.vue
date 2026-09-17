<template>
  <section id="contact" class="w-full relative py-14 sm:py-20 md:py-32 bg-white overflow-hidden px-4 sm:px-6 scroll-mt-24 font-sans">
    <!-- Decorative background glow -->
    <div
      class="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none">
    </div>
    <div class="absolute bottom-10 right-10 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>

    <!-- Title Header -->
    <div class="mb-12 sm:mb-16 md:mb-20 text-center relative z-10 reveal-init">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
        <span class="text-[#254DF5]">Contact</span> Me
      </h2>
      <p class="text-gray-500 max-w-xl mx-auto mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
        Tertarik untuk berkolaborasi atau memiliki pertanyaan? Kirimkan pesan Anda dan mari kita bicarakan!
      </p>
    </div>

    <div
      class="max-w-[1600px] w-full mx-auto xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
      <!-- Left: Image -->
      <div class="relative w-full max-w-lg lg:max-w-xl mx-auto flex justify-center items-center reveal-left reveal-delay-100">
        <img src="/images/contact-section-1.png" alt="Contact Me"
          class="relative w-full max-w-[320px] sm:max-w-[480px] lg:max-w-[580px] h-auto object-contain drop-shadow-2xl" />
      </div>

      <!-- Right: Contact Form -->
      <div class="w-full max-w-2xl mx-auto flex justify-center lg:justify-start reveal-right reveal-delay-200">
        <div
          class="bg-white rounded-[28px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 w-full shadow-[0_20px_60px_-15px_rgba(37,77,245,0.08)] border border-gray-100 relative">

          <form class="flex flex-col gap-4 sm:gap-5" @submit.prevent="handleSubmit">
            <!-- First & Last Name Fields -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div class="flex flex-col gap-1.5 sm:gap-2">
                <label for="firstName" class="text-xs font-semibold text-gray-700 uppercase tracking-wider">First
                  Name</label>
                <input id="firstName" v-model="form.firstName" type="text" placeholder="John"
                  class="w-full bg-gray-50/70 hover:bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 font-medium rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200/80 focus:border-[#254DF5] focus:ring-4 focus:ring-[#254DF5]/10 outline-none transition-all text-sm sm:text-base"
                  required />
              </div>

              <div class="flex flex-col gap-1.5 sm:gap-2">
                <label for="lastName" class="text-xs font-semibold text-gray-700 uppercase tracking-wider">Last
                  Name</label>
                <input id="lastName" v-model="form.lastName" type="text" placeholder="Doe"
                  class="w-full bg-gray-50/70 hover:bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 font-medium rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200/80 focus:border-[#254DF5] focus:ring-4 focus:ring-[#254DF5]/10 outline-none transition-all text-sm sm:text-base"
                  required />
              </div>
            </div>

            <!-- Email & Phone Fields -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div class="flex flex-col gap-1.5 sm:gap-2">
                <label for="email" class="text-xs font-semibold text-gray-700 uppercase tracking-wider">Email
                  Address</label>
                <input id="email" v-model="form.email" type="email" placeholder="john@example.com"
                  class="w-full bg-gray-50/70 hover:bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 font-medium rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200/80 focus:border-[#254DF5] focus:ring-4 focus:ring-[#254DF5]/10 outline-none transition-all text-sm sm:text-base"
                  required />
              </div>

              <div class="flex flex-col gap-1.5 sm:gap-2">
                <label for="phone" class="text-xs font-semibold text-gray-700 uppercase tracking-wider">Phone /
                  WhatsApp</label>
                <input id="phone" v-model="form.phone" type="tel" placeholder="+62 812 xxxx xxxx"
                  class="w-full bg-gray-50/70 hover:bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 font-medium rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200/80 focus:border-[#254DF5] focus:ring-4 focus:ring-[#254DF5]/10 outline-none transition-all text-sm sm:text-base" />
              </div>
            </div>

            <!-- Message Area -->
            <div class="flex flex-col gap-1.5 sm:gap-2">
              <label for="message" class="text-xs font-semibold text-gray-700 uppercase tracking-wider">Message</label>
              <textarea id="message" v-model="form.message" placeholder="Ceritakan tentang proyek atau ide Anda..."
                rows="4"
                class="w-full bg-gray-50/70 hover:bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 font-medium rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200/80 focus:border-[#254DF5] focus:ring-4 focus:ring-[#254DF5]/10 outline-none transition-all resize-none text-sm sm:text-base"
                required></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit"
              class="w-full bg-[#254DF5] hover:bg-blue-700 active:scale-[0.98] text-white font-bold rounded-2xl py-3.5 sm:py-4 mt-2 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 flex items-center justify-center gap-2.5 cursor-pointer text-sm sm:text-base group">
              <span>Send Message</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <!-- Success Notification -->
            <p v-if="submitted" class="text-center text-xs sm:text-sm font-semibold text-emerald-600 animate-fadeIn mt-1">
              ✨ Terima kasih! Pesan Anda telah berhasil dikirim.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
});

const submitted = ref(false);

const handleSubmit = () => {
  submitted.value = true;
  setTimeout(() => {
    form.firstName = '';
    form.lastName = '';
    form.email = '';
    form.phone = '';
    form.message = '';
    setTimeout(() => {
      submitted.value = false;
    }, 4000);
  }, 500);
};
</script>
