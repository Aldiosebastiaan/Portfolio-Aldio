import { ref, onMounted, onUnmounted } from 'vue'

export const useScroll = () => {
  const activeSection = ref<string>('')
  const scrollY = ref<number>(0)

  // 🔥 Smooth scroll ke section
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // 🔥 Update posisi scroll
  const handleScroll = () => {
    scrollY.value = window.scrollY

    const sections = document.querySelectorAll('section[id]')
    let current = ''

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      const offsetTop = rect.top + window.scrollY
      const height = section.clientHeight

      if (scrollY.value >= offsetTop - height / 3) {
        current = section.getAttribute('id') || ''
      }
    })

    activeSection.value = current
  }

  // 🔥 Scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollTo,
    scrollToTop,
    activeSection,
    scrollY
  }
}