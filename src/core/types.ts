export interface RssSource {
  name?: string,
  url: string
}

export interface RssItem {
  url: string,
  rssSources: RssSource[]
}