import { FaCss3Alt, FaRssSquare } from 'react-icons/fa'

import { BsTextParagraph } from 'react-icons/bs'
import CssOutlineDebugger from '@/components/Tools/CssOutlineDebugger'
import LoremIpsumGenerator from '@/components/Tools/LoremIpsumGenerator'
import { MdBlock } from 'react-icons/md'
import RssChecker from '@/components/Tools/RssChecker'
import type { Tool } from './types'
import type { ToolComponent } from '@/core/tools'
import { Tools } from '@/core/tools'
import WebsiteBlocker from '@/components/Tools/WebsiteBlocker'

const toolComponents: ToolComponent[] = [
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
    name: Tools.WEBSITE_BLOCKER,
    rootComponent: <WebsiteBlocker />,
    icon: <MdBlock size={16} className="mr-1 text-white" />,
  },
]

export function findTool(name: string): ToolComponent | undefined {
  const index = toolComponents.findIndex(t => t.name === name)
  return index >= 0 ? toolComponents[index] : undefined
}

// Enabled Tools
export const tools: Tool[] = [
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
    description: 'Checks if the domain have some RSS sources, it scrapes and verifies common URL patterns for RSS feeds',
  },
  // {
  //   id: Tools.WEBSITE_BLOCKER,
  //   title: 'Website Blocker',
  //   active: false,
  //   description: 'Block your anoying websites and be more productive'
  // },
  {
    id: Tools.LOREM_GENERATOR,
    title: 'Lorem Ipsum Generator',
    active: false,
    description: 'Customize your Lorem Ipsums, and generate paragraphs aleatorily',
  },
]
