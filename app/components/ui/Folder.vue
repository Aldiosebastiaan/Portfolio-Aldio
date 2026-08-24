<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

export interface FolderItem {
  id: number | string
  icon?: string
  title?: string
}

const props = withDefaults(
  defineProps<{
    items?: FolderItem[]
    color?: string
    size?: number
  }>(),
  {
    items: () => Array.from({ length: 14 }, (_, i) => ({ id: i + 1 })),
    color: '#1B41FC',
    size: 1,
  }
)

// darkenColor utility to generate 3D shades
const darkenColor = (hex: string, percent: number) => {
  // pastikan hex valid (misal "#1B41FC")
  if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) return hex

  let r = parseInt(hex.substring(1, 3), 16)
  let g = parseInt(hex.substring(3, 5), 16)
  let b = parseInt(hex.substring(5, 7), 16)

  r = Math.max(0, Math.floor((r * (100 - percent)) / 100))
  g = Math.max(0, Math.floor((g * (100 - percent)) / 100))
  b = Math.max(0, Math.floor((b * (100 - percent)) / 100))

  const getHex = (c: number) => {
    const hexStr = c.toString(16)
    return hexStr.length === 1 ? '0' + hexStr : hexStr
  }

  return `#${getHex(r)}${getHex(g)}${getHex(b)}`
}

const folderColor = computed(() => props.color)
const backColor = computed(() => darkenColor(props.color, 30))
const frontColor = computed(() => props.color)

const isOpen = ref(false)
const folderRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && entries[0].intersectionRatio >= 0.35) {
        isOpen.value = true
      } else {
        isOpen.value = false
      }
    },
    {
      // Memantau beberapa threshold untuk trigger yang lebih akurat
      threshold: [0, 0.35],
    }
  )

  if (folderRef.value) {
    observer.observe(folderRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

// Konfigurasi posisi untuk 14 items
// Nilai ini dirancang untuk layar desktop (scale 1x)
// Diatur agar menyebar estetik secara radial / fan-like
const cardPositions = [
  { x: -380, y: -220, r: -22 }, // 1 outer left
  { x: 380, y: -220, r: 22 },   // 2 outer right
  { x: -280, y: -340, r: -14 }, // 3 high left
  { x: 280, y: -340, r: 14 },   // 4 high right
  { x: -140, y: -420, r: -6 },  // 5 top left
  { x: 140, y: -420, r: 6 },    // 6 top right
  { x: 0, y: -460, r: 0 },      // 7 center top

  { x: -240, y: -140, r: -16 }, // 8 mid left
  { x: 240, y: -140, r: 16 },   // 9 mid right
  { x: -120, y: -260, r: -8 },  // 10 inner left
  { x: 120, y: -260, r: 8 },    // 11 inner right
  { x: 0, y: -300, r: 0 },      // 12 center mid

  { x: -120, y: -120, r: -10 },  // 13 low left
  { x: 140, y: -80, r: 10 },    // 14 low right
]

const getCardStyle = (index: number) => {
  if (!isOpen.value) {
    return {
      transform: 'translate(-50%, 0%) scale(0.3) rotate(0deg)',
      opacity: 0,
      transition: 'all 0.4s ease-in',
      transitionDelay: '0ms',
    }
  }

  const pos = cardPositions[index % cardPositions.length]
  const delay = index * 45 // Stagger effect

  return {
    transform: `translate(calc(-50% + var(--spread-x, 1) * ${pos.x}px), calc(-50% + var(--spread-y, 1) * ${pos.y}px)) scale(1) rotate(${pos.r}deg)`,
    opacity: 1,
    transition: `all 800ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
    transitionDelay: `${delay}ms`,
    // Z-index agar card yang keluar lebih awal berada di bawah/atas secara logis
    zIndex: 14 - index,
  }
}
</script>

<template>
  <div ref="folderRef" class="folder-wrapper relative flex items-center justify-center min-h-[500px] w-full" :style="{
    '--folder-back': backColor,
    '--folder-front': frontColor,
  }">
    <!-- 3D Scene Container -->
    <div
      class="perspective-[1200px] relative w-[240px] h-[160px] sm:w-[320px] sm:h-[220px] transition-transform duration-700 ease-out cursor-pointer"
      :class="isOpen ? 'translate-y-8 lg:translate-y-16 scale-100' : 'scale-95'" @click="isOpen = !isOpen">
      <!-- FOLDER BACK -->
      <div class="absolute bottom-0 w-full h-[90%] rounded-2xl shadow-inner transition-colors"
        style="background-color: var(--folder-back)"></div>
      <!-- FOLDER TAB -->
      <div class="absolute top-0 left-0 w-[45%] h-[20%] rounded-tl-2xl rounded-tr-3xl transition-colors"
        style="background-color: var(--folder-back); clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%)"></div>

      <!-- CARDS (Berada di antara Back dan Front folder) -->
      <div class="absolute left-1/2 bottom-[20%] w-0 h-0 z-10 pointer-events-none">
        <div v-for="(item, i) in props.items.slice(0, 14)" :key="item.id || i"
          class="absolute left-0 top-0 pointer-events-auto" :style="getCardStyle(i)">
          <!-- Glassmorphism Card Element -->
          <div class="card-glass w-[80px] h-[100px] sm:w-[100px] sm:h-[120px] lg:w-[110px] lg:h-[140px] 
                   bg-neutral-300/70 backdrop-blur-2xl border border-white/15 shadow-lg rounded-[20px]
                   flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer">
            <slot :name="`item-${i + 1}`" :item="item" :index="i" :isOpen="isOpen">
              <slot name="item" :item="item" :index="i" :isOpen="isOpen">
                <!-- Fallback Icon / Logo if no slot provided -->
                <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                  <span class="text-white/60 font-mono text-xs font-bold">{{ i + 1 }}</span>
                </div>
              </slot>
            </slot>
          </div>
        </div>
      </div>

      <!-- FOLDER FRONT -->
      <div
        class="folder-front absolute bottom-0 w-full h-[85%] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] origin-bottom transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] z-20 flex items-start justify-center overflow-hidden"
        style="background-color: var(--folder-front)" :class="isOpen ? 'is-open' : ''">
        <!-- Highlight gradient to enhance 3D feel -->
        <div class="w-full h-full bg-gradient-to-tr from-white/10 to-transparent opacity-80"></div>
        <!-- Inner shadow at the top edge -->
        <div class="absolute top-0 w-full h-2 bg-gradient-to-b from-white/20 to-transparent"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Class khusus untuk transformasi 3D Folder Front saat terbuka */
.folder-front.is-open {
  transform: rotateX(-35deg) scaleY(0.95);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), 0 -5px 15px rgba(0, 0, 0, 0.1) inset;
}

/* CSS Variables untuk responsive spread cards */
.folder-wrapper {
  --spread-x: 0.5;
  --spread-y: 0.6;
}

/* Tablet */
@media (min-width: 640px) {
  .folder-wrapper {
    --spread-x: 0.9;
    --spread-y: 1.0;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .folder-wrapper {
    --spread-x: 1.4;
    --spread-y: 1.35;
  }
}
</style>
