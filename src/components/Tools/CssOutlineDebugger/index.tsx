import { useEffect } from "react"
import { enableCssDebugger, disableCssDebugger, keyStorageName } from "../../../core/utils"
import useCssDebuggerStore from "../../../store/cssDebugger"
import Switch from "../../Generic/Switch"
import { useChromeStorageLocal } from 'use-chrome-storage'
import { Tools } from "../../../core/tools"


export const toolName = Tools.CSS_OUTLINE

const CssOutlineDebugger: React.FC = () => {

  // const enabled = useCssDebuggerStore((state)=>state.enabled)
  // const setEnabled = useCssDebuggerStore((state)=>state.setEnabled)
  
  const [enabled, setEnabled ] = useChromeStorageLocal(
    keyStorageName(toolName, 'status'), false
  )
  // const [enabled, setEnabled] = storage

  useEffect(()=>{
    enabled ? enableCssDebugger() : disableCssDebugger()
  }, [enabled])

  const changeState = () => {
    setEnabled(!enabled)
  }

  return <div className="flex w-full justify-center">
    <Switch onClick={changeState} state={enabled} />
  </div>
}

export default CssOutlineDebugger