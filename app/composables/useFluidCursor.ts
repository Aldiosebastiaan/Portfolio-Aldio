import { useStorage } from '@vueuse/core'

export const useFluidCursor = () => {
  // Store state in localStorage with default true
  const isFluidCursorEnabled = useStorage('fluid-cursor-enabled', true)

  const toggleFluidCursor = () => {
    isFluidCursorEnabled.value = !isFluidCursorEnabled.value
  }

  const setFluidCursor = (enabled: boolean) => {
    isFluidCursorEnabled.value = enabled
  }

  return {
    isFluidCursorEnabled,
    toggleFluidCursor,
    setFluidCursor,
  }
}
