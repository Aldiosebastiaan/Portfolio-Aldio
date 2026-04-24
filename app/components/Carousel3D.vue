<script lang="ts" setup>
import type { AnimationPlaybackControls } from "motion-v";
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import { animate } from "motion-v";
import * as THREE from "three";
import {
  CSS3DObject,
  CSS3DRenderer,
} from "three/addons/renderers/CSS3DRenderer.js";

// 🎯 Emit select ke parent
const emit = defineEmits<{
  (e: "select", item: CarouselItem): void;
}>();

// ✅ Type item
interface CarouselItem {
  id: number;
  image: string;
}

// Props
interface Props {
  items?: CarouselItem[];
  class?: HTMLAttributes["class"];
  containerClass?: HTMLAttributes["class"];
  width?: number;
  height?: number;
}

const props = withDefaults(defineProps<Props>(), {
  class: "",
  containerClass: "",
  width: 450,
  height: 600,
  items: () => [],
});

const carouselContainer = ref<HTMLDivElement>();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 1, 4000);
let renderer: CSS3DRenderer;

const radius = ref(500);
let carousel: THREE.Object3D;
const continuousAnimation = ref<AnimationPlaybackControls | null>(null);

onMounted(() => {
  if (!carouselContainer.value) return;

  renderer = new CSS3DRenderer();

  const width = carouselContainer.value.clientWidth;
  const height = carouselContainer.value.clientHeight;

  renderer.setSize(width, height);
  carouselContainer.value.appendChild(renderer.domElement);

  camera.position.z = 550;
  camera.position.y = 70;

  carousel = new THREE.Object3D();
  scene.add(carousel);

  // 🎡 Generate items
  props.items.forEach((item, index) => {
    const element = document.createElement("div");

    element.style.width = `${props.width}px`;
    element.style.height = `${props.height}px`;
    element.style.backgroundImage = `url(${item.image})`;
    element.style.backgroundSize = "cover";
    element.style.backgroundPosition = "center";
    element.style.borderRadius = "16px";
    element.style.cursor = "pointer";
    element.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    element.style.transition = "transform 0.3s";

    // 🖱️ Click → emit ke parent
    element.addEventListener("click", () => {
      emit("select", item);
    });

    const object = new CSS3DObject(element);

    const angle = (index / props.items.length) * Math.PI * 2;

    object.position.setFromSphericalCoords(
      radius.value,
      Math.PI / 2,
      angle
    );

    object.lookAt(carousel.position);

    carousel.add(object);
  });

  carousel.rotation.x = THREE.MathUtils.degToRad(20);

  startContinuousRotation();

  window.addEventListener("resize", onWindowResize);
});

// 🔄 Auto rotate
function startContinuousRotation() {
  if (continuousAnimation.value) {
    continuousAnimation.value.stop();
  }

  const fromVal = carousel.rotation.y;
  const toVal = fromVal + Math.PI * 2;

  continuousAnimation.value = animate(fromVal, toVal, {
    duration: 20,
    ease: "linear",
    repeat: Infinity,
    onUpdate: (latest) => {
      carousel.rotation.y = latest;
      renderer.render(scene, camera);
    },
  });
}

// 📐 Resize
function onWindowResize() {
  if (!carouselContainer.value) return;

  const width = carouselContainer.value.clientWidth;
  const height = carouselContainer.value.clientHeight;

  radius.value = width / 8;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}

// 🧹 Cleanup
onBeforeUnmount(() => {
  if (carouselContainer.value && renderer) {
    carouselContainer.value.removeChild(renderer.domElement);
  }

  window.removeEventListener("resize", onWindowResize);

  if (continuousAnimation.value) {
    continuousAnimation.value.stop();
  }
});
</script>

<template>
  <div
    ref="carouselContainer"
    :class="cn(`relative h-[60vh] w-full`, props.containerClass)"
  />
</template>