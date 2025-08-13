import type { Color } from './types'

const STORAGE_KEY = 'colors'
const MAX_HISTORY_SIZE = 20

export function loadColorHistory(): Promise<Color[]> {
  return new Promise((resolve) => {
    chrome?.storage?.local?.get(STORAGE_KEY, (result) => {
      resolve(result[STORAGE_KEY] || [])
    })
  })
}

export function saveColorHistory(colors: Color[]) {
  chrome?.storage?.local?.set({ [STORAGE_KEY]: colors })
}

export function addColorToHistory(newColor: Color, currentHistory: Color[]): Color[] {
  return [
    newColor,
    ...currentHistory.filter(c => c.hex !== newColor.hex),
  ].slice(0, MAX_HISTORY_SIZE)
}

export function clearColorHistory() {
  chrome?.storage?.local?.remove(STORAGE_KEY)
}
