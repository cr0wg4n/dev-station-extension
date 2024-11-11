import type { ReactElement } from 'react'

export enum Tools {
  QUOTES = 'Quotes and Mantras',
  CSS_OUTLINE = 'CSS Outline',
  RSS_CHECKER = 'RSS Checker',
  LOREM_GENERATOR = 'Lorem Generator',
  ELEMENT_SIZES = 'Element Sizes',
  IMAGE_DOWNLOADER = 'Image Downloader',
  METADATA_SEARCHER = 'Metadata Searcher',
  WEBSITE_BLOCKER = 'Website Blocker',
  FAST_SEARCHER = 'Fast Searcher',
  URL_ENVIRONMENT = 'URl Environment',
  CODE_SHOT = 'Code Shot',
  WINDOWS_RESIZER = 'Windows Resizer',
}

export interface ToolComponent {
  name: string
  rootComponent: ReactElement
  icon: ReactElement
}
