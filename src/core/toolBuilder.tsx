import { FaCss3Alt, FaEyeDropper, FaRssSquare } from 'react-icons/fa'
import type { Tool, ToolComponent } from '@/core/types'

import { BsTextParagraph } from 'react-icons/bs'
import CssOutlineDebugger from '@/components/Tools/CssOutlineDebugger'
import LoremIpsumGenerator from '@/components/Tools/LoremIpsumGenerator'
import { MdBlock } from 'react-icons/md'
import RssChecker from '@/components/Tools/RssChecker'
import { Tools } from '@/core/enums'
import WebsiteBlocker from '@/components/Tools/WebsiteBlocker'
import ColorPicker from '@/components/Tools/ColorPicker'

const enabledTools: Array<Tool> = [
  {
    id: Tools.CSS_OUTLINE,
    title: 'CSS Debugger',
    active: false,
    description: 'Shows the true appearance of HTML elements, save your time',
  },
  {
    id: Tools.RSS_CHECKER,
    title: 'RSS Checker',
    active: false,
    description:
      'Checks if the domain have some RSS sources, it scrapes and verifies common URL patterns for RSS feeds',
  },
  {
    id: Tools.LOREM_GENERATOR,
    title: 'Lorem Ipsum Generator',
    active: false,
    description:
      'Customize your Lorem Ipsums, and generate paragraphs aleatorily',
  },
  {
    id: Tools.COLOR_PICKER,
    title: 'Color Picker',
    active: false,
    description:
      'Capture colors directly from webpage elements with eyedropper tool',
  },
]

const toolComponents: Array<ToolComponent> = [
  {
    name: Tools.CSS_OUTLINE,
    rootComponent: <CssOutlineDebugger />,
    icon: <FaCss3Alt size={16} className="mr-1 text-white" />,
  },
  {
    name: Tools.RSS_CHECKER,
    rootComponent: <RssChecker />,
    icon: <FaRssSquare size={16} className="mr-1 text-white" />,
  },
  {
    name: Tools.LOREM_GENERATOR,
    rootComponent: <LoremIpsumGenerator />,
    icon: <BsTextParagraph size={16} className="mr-1 text-white" />,
  },
  {
    name: Tools.COLOR_PICKER,
    rootComponent: <ColorPicker />,
    icon: <FaEyeDropper size={16} className="mr-1 text-white" />,
  },
  {
    name: Tools.WEBSITE_BLOCKER,
    rootComponent: <WebsiteBlocker />,
    icon: <MdBlock size={16} className="mr-1 text-white" />,
  },
]

function buildTool(name: Tools): ToolComponent | undefined {
  const index = toolComponents.findIndex(t => t.name === name)
  return index >= 0 ? toolComponents[index] : undefined
}

export { buildTool, enabledTools }
