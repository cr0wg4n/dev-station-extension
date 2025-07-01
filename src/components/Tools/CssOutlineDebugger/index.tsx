import Switch from '@/components/Generic/Switch'
import { Tools } from '@/core/tools'
import { keyStorageName } from '@/core/utils'
import { useChromeStorageLocal } from 'use-chrome-storage'

export const toolName = Tools.CSS_OUTLINE

const CssOutlineDebugger: React.FC = () => {
  const [enabled, setEnabled] = useChromeStorageLocal(
    keyStorageName(toolName, 'status'),
    false,
  )

  const changeState = () => {
    setEnabled(!enabled)
  }

  return (
    <div className="flex w-full justify-center">
      <Switch onChange={changeState} state={enabled} />
    </div>
  )
}

export default CssOutlineDebugger
