import { ReactElement } from "react";

export enum Tools {
  CSS_OUTLINE = 'CSS Outline',
  RSS_CHECKER = 'RSS Checker',
  ELEMENT_SIZES = 'Element Sizes',
  IMAGE_DOWNLOADER = 'Image Downloader',
  METADATA_SEARCHER = 'Metadata Searcher',
  WEBSITE_BLOCKER = 'Website Blocker',
  MANTRA = 'Mantra',
  FAST_SEARCHER = 'Fast Searcher',
  URL_ENVIRONMENT = 'URl Environment',
  LOREM_GENERATOR = 'Lorem Generator',
  CODE_SHOT = 'Code Shot',
  WINDOWS_RESIZER = 'Windows Resizer',
}

export interface ToolComponent {
  name: string,
  rootComponent: ReactElement,
  icon: ReactElement
}
