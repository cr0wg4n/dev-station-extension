import { getRssUrlsFromUrl } from 'rss-url-finder';
import { RssItem } from './types';

export async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true, lastFocusedWindow: true}
  const [tab] = await chrome.tabs.query(queryOptions)
  return tab
}

async function insertCSS(tabId: number, css: string) {
  try {
    await chrome.scripting.insertCSS({
      target: { tabId: tabId},
      css
    })
  } catch (error) {
    console.log('Insert CSS is not possible:', error)
  }
}

export async function enableCssDebugger(tabId?: number) {
  const {id} = await getCurrentTab()
  const css = `
    * {
      outline: 1px solid red !important;
    }
  `
  tabId ? insertCSS(tabId, css) : id && insertCSS(id, css)
}

export async function disableCssDebugger(tabId?: number) {
  const {id} = await getCurrentTab()
  const css = `
    * {
      outline: none !important;
    }
  `
  tabId ? insertCSS(tabId, css) : id && insertCSS(id, css)
}

export function keyStorageName(toolName: string, key: string) {
  return `${toolName}:${key}`
}

export async function checkRss(url?: string): Promise<RssItem | undefined> {
  if(url) {
    return {
      url,
      rssSources: await getRssUrlsFromUrl(url)
    }
  }

  const tab = await getCurrentTab()
  if(!url && tab.url) {
    return {
      url: tab.url,
      rssSources: await getRssUrlsFromUrl(tab.url)
    }
  }

  return undefined
}

export function copyToClipboard(text: string): void {
  navigator.clipboard.writeText(text)
}
