import { useEffect, useState } from "react"
import { enableCssDebugger, disableCssDebugger } from "../../../core/utils"
import useCssDebuggerStore from "../../../store/cssDebugger"

const CssOutlineDebugger: React.FC = () => {
  const enabled = useCssDebuggerStore((state)=>state.enabled)
  const setEnabled = useCssDebuggerStore((state)=>state.setEnabled)

  useEffect(()=>{
    enabled ? enableCssDebugger() : disableCssDebugger()
  },[enabled])
  return <div onClick={
    ()=>{setEnabled(!enabled)}
  }>
    { enabled ? 'on':'off'}
  </div>
}

export default CssOutlineDebugger
