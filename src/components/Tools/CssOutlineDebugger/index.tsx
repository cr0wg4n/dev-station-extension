import { useChromeStorageLocal } from 'use-chrome-storage'
import { Tools } from '../../../core/tools'
import { keyStorageName } from '../../../core/utils'
import Switch from '../../Generic/Switch'

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
