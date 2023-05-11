import CssOutlineDebugger from "../../components/Tools/CssOutlineDebugger"
import RssChecker from "../../components/Tools/RssChecker"
import LoremIpsumGenerator from "../../components/Tools/LoremIpsumGenerator"
import { ToolComponent, Tools } from "../../core/tools"
import { Tool } from "./types"
import { FaCss3Alt, FaRssSquare } from 'react-icons/fa'
import { BsTextParagraph } from 'react-icons/bs'


const toolComponents: ToolComponent[] = [
  {
    name: Tools.CSS_OUTLINE,
    rootComponent: <CssOutlineDebugger />,
    icon: <FaCss3Alt size={16} className="mr-1 text-white"/>
  },
  {
    name: Tools.RSS_CHECKER,
    rootComponent: <RssChecker />,
    icon: <FaRssSquare size={16} className="mr-1 text-white"/>
  },
  {
    name: Tools.LOREM_GENERATOR,
    rootComponent: <LoremIpsumGenerator />,
    icon: <BsTextParagraph size={16} className="mr-1 text-white"/>
  }
]

export function findTool(name: string): ToolComponent | undefined{
  const index = toolComponents.findIndex(t => t.name == name)
  return index >= 0 ? toolComponents[index] : undefined
}

// Enabled Tools
export const tools: Tool[] = [
  {
    id: Tools.CSS_OUTLINE,
    title: 'CSS Debugger',
    active: false,
    description: 'Enable and disable css outline globally'
  },
  {
    id: Tools.RSS_CHECKER,
    title: 'RSS Checker',
    active: false,
    description: ''
  },
  {
    id: Tools.LOREM_GENERATOR,
    title: 'Lorem Ipsum Generator',
    active: true,
    description: ''
  }
]
