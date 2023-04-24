import CssOutlineDebugger from "../../components/Tools/CssOutlineDebugger"
import { ToolComponent, Tools } from "../../core/tools"
import { Tool } from "./types"
import { FaCss3Alt } from 'react-icons/fa'

const toolComponents: ToolComponent[] = [
  {
    name: Tools.CSS_OUTLINE,
    rootComponent: <CssOutlineDebugger />,
    icon: <FaCss3Alt size={16} className="mr-1"/>
  },
]

export function findTool(name: string): ToolComponent | undefined{
  const index = toolComponents.findIndex(t => t.name == name)
  return index >= 0 ? toolComponents[index] : undefined
}

export const tools: Tool[] = [
  {
    id: Tools.CSS_OUTLINE,
    title: 'CSS Debugger',
    active: false,
    description: 'This is a css debugger tool'
  }
]
