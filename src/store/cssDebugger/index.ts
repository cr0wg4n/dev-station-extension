import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CssDebugger {
  enabled: boolean,
  setEnabled: (newState: boolean)=>void
}

const useCssDebuggerStore = create<CssDebugger>(
  (set) => ({
    enabled: false,
    setEnabled: (newState: boolean) => {
      set((state)=>{
        return {...state, enabled: newState}
      })
    }
  })
)

export default useCssDebuggerStore
