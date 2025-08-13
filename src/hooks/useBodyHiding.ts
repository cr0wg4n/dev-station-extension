// Hides the extension popup body while an async action (like color picking) is active
// It preserves and restores the previous display style safely.
import { useEffect, useRef } from 'react'

export function useBodyHiding(shouldHide: boolean) {
  const prevBodyDisplay = useRef<string | null>(null)

  useEffect(() => {
    const body = document?.body
    if (!body)
      return

    if (shouldHide) {
      if (prevBodyDisplay.current === null)
        prevBodyDisplay.current = body.style.display
      body.style.display = 'none'
    }
    else {
      if (prevBodyDisplay.current !== null) {
        body.style.display = prevBodyDisplay.current
        prevBodyDisplay.current = null
      }
      else {
        body.style.display = ''
      }
    }

    return () => {
      if (!body)
        return
      body.style.display = prevBodyDisplay.current ?? ''
      prevBodyDisplay.current = null
    }
  }, [shouldHide])
}
