import { useEffect } from "react"
import { enableCssDebugger, disableCssDebugger, keyStorageName } from "../../../core/utils"
import Switch from "../../Generic/Switch"
import { useChromeStorageLocal } from 'use-chrome-storage'
import { Tools } from "../../../core/tools"


export const toolName = Tools.CSS_OUTLINE

const CssOutlineDebugger: React.FC = () => {
  const [enabled, setEnabled ] = useChromeStorageLocal(
    keyStorageName(toolName, 'status'), false
  )

  const changeState = () => {
    setEnabled(!enabled)
  }

  return <div className="flex w-full justify-center">
    <Switch onChange={changeState} state={enabled} />
  </div>
}

export default CssOutlineDebugger