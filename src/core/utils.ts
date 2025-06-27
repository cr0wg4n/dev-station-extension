import type { LoremIpsumProps, RssItem } from './types'

import { getRssUrlsFromUrl } from 'rss-url-finder'
import { loremIpsum } from 'lorem-ipsum'

export async function getCurrentTab() {
  const queryOptions = { active: true, lastFocusedWindow: true }
  const [tab] = await chrome.tabs.query(queryOptions)
  return tab
}

async function insertCSS(tabId: number, css: string) {
  try {
    await chrome.scripting.insertCSS({
      target: { tabId },
      css,
    })
  }
  catch (error) {
    console.error('Insert CSS is not possible:', error)
  }
}

export async function enableCssDebugger(tabId?: number) {
  const css = `
    * {
      outline: 1px solid red !important;
    }
  `

  const { id } = await getCurrentTab() || {}
  tabId ? insertCSS(tabId, css) : id && insertCSS(id, css)
}

export async function disableCssDebugger(tabId?: number) {
  const css = `
    * {
      outline: none !important;
    }
  `

  const { id } = await getCurrentTab() || {}
  tabId ? insertCSS(tabId, css) : id && insertCSS(id, css)
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

export function generateLoremIpsum({
  format,
  count,
  paragraphLowerBound,
  paragraphUpperBound,
}: LoremIpsumProps): string {
  return loremIpsum({
    format,
    count,
    units: 'paragraph',
    paragraphLowerBound,
    paragraphUpperBound,
  })
}
