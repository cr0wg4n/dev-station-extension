export async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true, lastFocusedWindow: true}
  const [tab] = await chrome.tabs.query(queryOptions)
  return tab
}

async function insertCss(css: string) {
  const tab = await getCurrentTab()
  if(tab.id){
    try {
      await chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        css
      })
    } catch (error) {
      console.log('Insert CSS is not possible:', error)
    }
  }
}

export async function enableCssDebugger() {
  insertCss(`
    * {
      outline: 1px solid red !important;
    }
  `)
}

export async function disableCssDebugger() {
  insertCss(`
    * {
      outline: none !important;
    }
  `)
}

