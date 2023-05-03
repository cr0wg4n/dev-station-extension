import { useEffect } from "react"
import { enableCssDebugger, disableCssDebugger } from "../../../core/utils"
import useCssDebuggerStore from "../../../store/cssDebugger"
import Switch from "../../Generic/Switch"

const CssOutlineDebugger: React.FC = () => {
  const enabled = useCssDebuggerStore((state)=>state.enabled)
  const setEnabled = useCssDebuggerStore((state)=>state.setEnabled)

  useEffect(()=>{
    enabled ? enableCssDebugger() : disableCssDebugger()
  }, [enabled])

  return <div className="text-center">
    <Switch onClick={() => {
      setEnabled(!enabled)
    }} state={enabled} />
  </div>
}

export default CssOutlineDebugger
