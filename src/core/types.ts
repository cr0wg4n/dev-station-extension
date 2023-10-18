export interface RssSource {
  name?: string,
  url: string
}

export interface RssItem {
  url: string,
  rssSources: RssSource[]
}

export interface LoremIpsumProps {
  format: 'html'|'plain',
  count: number,
  paragraphLowerBound: number,
  paragraphUpperBound: number,
}
