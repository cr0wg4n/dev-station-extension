import type { Color } from './types'

// Convert hex to RGB and HSL
export function hexToFormats(hex: string): Color {
  const r = Number.parseInt(hex.slice(1, 3), 16)
  const g = Number.parseInt(hex.slice(3, 5), 16)
  const b = Number.parseInt(hex.slice(5, 7), 16)

  // RGB format
  const rgb = `rgb(${r}, ${g}, ${b})`

  // HSL calculation
  const rn = r / 255
  const gn = g / 255
  const bn = b / 255
  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    if (max === rn)
      h = (gn - bn) / d + (gn < bn ? 6 : 0)
    else if (max === gn)
      h = (bn - rn) / d + 2
    else h = (rn - gn) / d + 4

    h /= 6
  }

  const hsl = `hsl(${Math.round(h * 360)}, ${Math.round(
    s * 100,
  )}%, ${Math.round(l * 100)}%)`
  const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  return { hex, rgb, hsl, time }
}

// Copy to clipboard with visual feedback
export async function copyToClipboard(text: string) {
  await navigator.clipboard.writeText(text)
  // Simple feedback without external alert system
  const btn = document.activeElement as HTMLElement
  if (btn) {
    btn.classList.add('scale-75')
    setTimeout(() => btn.classList.remove('scale-75'), 200)
  }
}

// Export colors to JSON file
export function exportColorsToFile(colors: Color[]) {
  if (!colors.length)
    return

  const data = {
    date: new Date().toISOString(),
    colors,
  }

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `colors-${Date.now()}.json`
  a.click()
  URL.revokeObjectURL(url)
}
