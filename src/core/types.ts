import type { ReactElement } from 'react'
import type { Tools } from '@/core/enums'

export interface RssSource {
  name?: string
  url: string
}

export interface RssItem {
  url: string
  rssSources: RssSource[]
}

export interface LoremIpsumProps {
  format: 'html' | 'plain'
  count: number
  paragraphLowerBound: number
  paragraphUpperBound: number
}

export interface ToolComponent {
  name: string
  rootComponent: ReactElement
  icon: ReactElement
}

export interface Tool {
  id: Tools
  title: string
  active: boolean
  description?: string
}
