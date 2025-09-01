import { create } from 'zustand'

export interface AlertState {
  active: boolean
  message: string
  type: AlertTypes
  timeoutId: number | undefined
  toggle: (type: AlertTypes, message: string, duration?: number) => void
}

export type AlertTypes = 'error' | 'success'

const useAlertStore = create<AlertState>((set, get) => ({
  active: false,
  message: '',
  type: 'success',
  timeoutId: undefined,
  toggle: (type: AlertTypes, message: string, duration = 2000) => {
    const { timeoutId } = get()
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    const newTimeoutId = window.setTimeout(() => {
      // Off
      set({ active: false, message: '', timeoutId: undefined })
    }, duration)

    // On
    set((state) => {
      return { ...state, active: true, message, type, timeoutId: newTimeoutId }
    })
  },
}))

export default useAlertStore
