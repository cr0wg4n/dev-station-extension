import { getCurrentTab } from './utils'

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

async function enableCssDebugger(tabId?: number, color: string = 'red') {
  const css = `
    * {
      outline: 1px solid ${color} !important;
    }
  `

  const { id } = await getCurrentTab() || {}
  tabId ? insertCSS(tabId, css) : id && insertCSS(id, css)
}

async function disableCssDebugger(tabId?: number) {
  const css = `
    * {
      outline: none !important;
    }
  `

  const { id } = await getCurrentTab() || {}
  tabId ? insertCSS(tabId, css) : id && insertCSS(id, css)
}

export {
  disableCssDebugger,
  enableCssDebugger,
}
