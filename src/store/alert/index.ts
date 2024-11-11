import { create } from 'zustand'

export interface AlertState {
  active: boolean
  message: string
  type: AlertTypes
  toogle: (type: AlertTypes, message: string) => void
}

export type AlertTypes = 'error' | 'success'

const useAlertStore = create<AlertState>(set => ({
  active: false,
  message: '',
  type: 'success',
  toogle: (type: AlertTypes, message: string) => {
    // On
    set((state) => {
      return { ...state, active: true, message, type }
    })
    setTimeout(() => {
      // Of
      set((state) => {
        return { ...state, active: false }
      })
    }, 1500)
  },
}))

export default useAlertStore
