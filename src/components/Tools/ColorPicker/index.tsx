import { useEffect, useState } from 'react'
import { FaClipboard, FaDownload, FaEyeDropper, FaTrash } from 'react-icons/fa'
import type { Color } from './types'
import { exportColorsToFile, hexToFormats } from './helpers'
import { copyToClipboard, getActualDateTime } from '@/core/utils'
import useAlertStore from '@/store/alert'
import {
  addColorToHistory,
  clearColorHistory,
  loadColorHistory,
  saveColorHistory,
} from './storage'

function ColorPicker() {
  const [currentColor, setCurrentColor] = useState<Color | null>(null)
  const [history, setHistory] = useState<Color[]>([])
  const { toggle: toggleAlert } = useAlertStore(state => state)

  // Load history on mount
  useEffect(() => {
    loadColorHistory().then(setHistory)
  }, [])

  // Save history
  const saveHistory = (colors: Color[]) => {
    setHistory(colors)
    saveColorHistory(colors)
  }

  // Hide extension body
  const hiddenExtensionBody = (shouldHide: boolean) => {
    const body = document?.body
    const appDiv = document?.getElementById('root')

    if (!body || !appDiv)
      return

    if (shouldHide) {
      body.style.setProperty('display', 'none', 'important')
      appDiv.style.setProperty('display', 'none', 'important')
    }
    else {
      body.style.display = ''
      appDiv.style.display = ''
    }
  }

  // Pick color using EyeDropper API
  const pickColor = async () => {
    try {
      hiddenExtensionBody(true)

      const eyeDropper = new (window as any).EyeDropper()

      await new Promise(resolve => setTimeout(resolve, 100)) // Wait for body to hide
      const result = await eyeDropper.open()

      const formattedColor = hexToFormats(result.sRGBHex.toUpperCase())
      const { time, datetime } = getActualDateTime()
      const color = {
        ...formattedColor,
        time,
        datetime,
      }
      setCurrentColor(color)
      const newHistory = addColorToHistory(color, history)
      saveHistory(newHistory)
    }
    catch {
      // User cancelled
    }
    finally {
      hiddenExtensionBody(false)
      const color: string = currentColor?.hex || ''
      toggleAlert('success', `Color ${color} picked!`)
      copyToClipboard(color)
    }
  }

  // Clear history
  const handleClearHistory = () => {
    setHistory([])
    setCurrentColor(null)
    clearColorHistory()
  }

  return (
    <div className="p-1 space-y-3">
      {/* Pick Color Button */}
      <button
        onClick={pickColor}
        className="w-full btn btn-xs gap-2"
      >
        <FaEyeDropper />
        Pick Color
      </button>

      {/* Current Color */}
      {currentColor && (
        <div className="p-2 bg-slate-200 rounded-lg">
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <div
                className="w-16 h-full rounded-lg cursor-pointer hover:scale-105 transition-transform"
                style={{ backgroundColor: currentColor.hex }}
                onClick={() => copyToClipboard(currentColor.hex)}
              />
              <div className="text-[10px] text-gray-400 leading-3 mt-0.5">
                {currentColor.time}
              </div>
            </div>
            <div className="flex-1 space-y-1">
              <ColorRow
                label="HEX"
                value={currentColor.hex}
                onCopy={() => copyToClipboard(currentColor.hex)}
              />
              <ColorRow
                label="RGB"
                value={currentColor.rgb}
                onCopy={() => copyToClipboard(currentColor.rgb)}
              />
              <ColorRow
                label="HSL"
                value={currentColor.hsl}
                onCopy={() => copyToClipboard(currentColor.hsl)}
              />
            </div>
          </div>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="p-2 bg-slate-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">History</h3>
            <div className="flex gap-1">
              <button
                onClick={() => exportColorsToFile(history)}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                title="Export history in JSON format"
              >
                <FaDownload className="w-3 h-3" />
              </button>
              <button
                onClick={handleClearHistory}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                title="Clear history"
              >
                <FaTrash className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-10 gap-1">
            {history.map((color, i) => (
              <button
                key={i}
                className="aspect-square rounded border border-gray-300 hover:scale-105 hover:border-gray-400 transition-all"
                style={{ backgroundColor: color.hex }}
                onClick={() => setCurrentColor(color)}
                title={color.hex}
              />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!currentColor && history.length === 0 && (
        <div className="mt-8 text-center text-gray-400">
          <p className="text-sm py-4">No color selected. Give it a try!</p>
        </div>
      )}
    </div>
  )
}

// Color Row Component
function ColorRow({
  label,
  value,
  onCopy,
}: {
  label: string
  value: string
  onCopy: () => void
}) {
  return (
    <div className="flex items-center gap-2 bg-white ps-2 p-0.5 rounded">
      <span className="text-xs font-medium text-gray-500 w-8">{label}</span>
      <code className="text-xs font-mono flex-1 truncate">{value}</code>
      <button
        onClick={onCopy}
        className="p-1 hover:bg-gray-100 rounded transition-all"
      >
        <FaClipboard className="w-3 h-3 text-gray-400" />
      </button>
    </div>
  )
}

export default ColorPicker
