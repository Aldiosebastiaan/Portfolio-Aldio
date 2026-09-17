import { onMounted, onUnmounted } from 'vue'

export const useScrollReveal = () => {
  let observer: IntersectionObserver | null = null

  const initObserver = () => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const elements = document.querySelectorAll(
      '.reveal-init, .reveal-left, .reveal-right, .reveal-scale'
    )
    elements.forEach((el) => observer?.observe(el))
  }

  onMounted(() => {
    // Next tick + small timeout for DOM hydration
    setTimeout(() => {
      initObserver()
    }, 60)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    initObserver,
  }
}
