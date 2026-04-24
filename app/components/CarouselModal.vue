<template>
  <!-- 🌌 WRAPPER -->
  <div
    v-if="open"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
  >
    <!-- 🎡 CAROUSEL -->
    <Carousel3D
      :items="items"
      :width="450"
      :height="600"
      @select="handleSelect"
    />
  </div>

  <!-- 🪟 MODAL -->
  <Transition name="modal">
    <div
      v-if="selectedItem"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]"
      @click.self="closeModal"
    >
      <div class="bg-white rounded-xl overflow-hidden shadow-xl w-[320px]">
        <img
          :src="selectedItem.image"
          class="w-full h-[420px] object-cover"
        />

        <div class="p-4 text-center">
          <p class="font-semibold text-lg">
            Item ID: {{ selectedItem.id }}
          </p>

          <button
            @click="closeModal"
            class="mt-4 px-4 py-2 bg-black text-white rounded"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";
import Carousel3D from "./Carousel3D.vue";

// props biar reusable
const props = defineProps({
  open: Boolean,
  items: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["close"]);

const selectedItem = ref(null);

function handleSelect(item) {
  selectedItem.value = item;
}

function closeModal() {
  selectedItem.value = null;
}
</script>

<style scoped>
.modal-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-enter-active {
  transition: all 0.3s ease;
}

.modal-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.modal-leave-active {
  transition: all 0.25s ease;
}
</style>