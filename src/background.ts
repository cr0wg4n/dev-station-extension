import { disableCssDebugger, enableCssDebugger } from './core/styling'

import { Tools } from './core/tools'
import { keyStorageName } from './core/utils'

// CSS Debuger
const CSS_OUTLINE_STATUS = keyStorageName(Tools.CSS_OUTLINE, 'status')

function toggleCssDebugger(status: boolean, tabId?: number): void {
  status ? enableCssDebugger(tabId) : disableCssDebugger(tabId)
}

// General Events
chrome.tabs.onActivated.addListener((active) => {
  chrome.storage.local.get([CSS_OUTLINE_STATUS]).then((result) => {
    toggleCssDebugger(result[CSS_OUTLINE_STATUS], active.tabId)
  })
})

chrome.tabs.onUpdated.addListener((tabId: number, changeInfo, _tab) => {
  // Persistent CSS Debugger
  if (changeInfo.status === 'complete') {
    chrome.storage.local.get([CSS_OUTLINE_STATUS]).then((result) => {
      result[CSS_OUTLINE_STATUS]
      && toggleCssDebugger(result[CSS_OUTLINE_STATUS], tabId)
    })
  }
})

chrome.storage.onChanged.addListener((changes, _namespace) => {
  for (const [key, { oldValue, newValue }] of Object.entries(changes)) {
    if (key === CSS_OUTLINE_STATUS) {
      toggleCssDebugger(newValue)
    }
  }
})
