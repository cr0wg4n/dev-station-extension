import { useEffect, useState } from 'react'
import { FaClipboard, FaDownload, FaEyeDropper, FaTrash } from 'react-icons/fa'
import { useBodyHiding } from '@/hooks/useBodyHiding'
import type { Color } from './types'
import { copyToClipboard, exportColorsToFile, hexToFormats } from './utils'
import {
  addColorToHistory,
  clearColorHistory,
  loadColorHistory,
  saveColorHistory,
} from './storage'

function ColorPicker() {
  const [currentColor, setCurrentColor] = useState<Color | null>(null)
  const [history, setHistory] = useState<Color[]>([])
  const [isPicking, setIsPicking] = useState(false)

  // Hide the extension popup while waiting for user color selection
  useBodyHiding(isPicking)

  // Load history on mount
  useEffect(() => {
    loadColorHistory().then(setHistory)
  }, [])

  // Save history
  const saveHistory = (colors: Color[]) => {
    setHistory(colors)
    saveColorHistory(colors)
  }

  // Pick color using EyeDropper API
  const pickColor = async () => {
    try {
      setIsPicking(true)

      const eyeDropper = new (window as any).EyeDropper()
      const result = await eyeDropper.open()

      const color = hexToFormats(result.sRGBHex.toUpperCase())
      setCurrentColor(color)

      const newHistory = addColorToHistory(color, history)
      saveHistory(newHistory)
    }
    catch {
      // User cancelled
    }
    finally {
      setIsPicking(false)
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
        className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-gray-400 hover:text-white py-2 px-4 rounded-lg transition-colors shadow-md shadow-neutral-400/70"
      >
        <FaEyeDropper className="w-4 h-4" />
        Pick Color
      </button>

      {/* Current Color */}
      {currentColor && (
        <div className="p-2 bg-gray-200/70 rounded-lg">
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <div
                className="w-16 h-full rounded-lg border-2 border-gray-200 cursor-pointer hover:scale-105 transition-transform"
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
        <div className="bg-gradient-to-b from-gray-200/70 to-gray-50 p-2 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">History</h3>
            <div className="flex gap-1">
              <button
                onClick={() => exportColorsToFile(history)}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                title="Export"
              >
                <FaDownload className="w-3 h-3" />
              </button>
              <button
                onClick={handleClearHistory}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors text-red-500"
                title="Clear"
              >
                <FaTrash className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-10 gap-1">
            {history.map((color, i) => (
              <button
                key={i}
                className="aspect-square rounded border border-gray-200 hover:scale-110 hover:border-gray-400 transition-all"
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
          <FaEyeDropper className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p className="text-sm">No colors yet</p>
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
