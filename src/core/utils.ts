import type { RssItem } from '@/core/types'
import { getRssUrlsFromUrl } from 'rss-url-finder'

export async function getCurrentTab() {
  const queryOptions = { active: true, lastFocusedWindow: true }
  const [tab] = await chrome.tabs.query(queryOptions)
  return tab
}

export function keyStorageName(toolName: string, key: string) {
  return `${toolName}:${key}`
}

export async function checkRss(url?: string): Promise<RssItem | undefined> {
  let targetUrl
  if (url) {
    targetUrl = url
  }
  else {
    const tab = await getCurrentTab()
    targetUrl = tab.url
  }
  return targetUrl
    ? {
        url: targetUrl,
        rssSources: await getRssUrlsFromUrl(targetUrl),
      }
    : undefined
}

export function copyToClipboard(text: string): void {
  navigator.clipboard.writeText(text)
}

export function random(max: number = 10, min: number = 1): number {
  return Math.floor((Math.random() * max) + min)
}
