import { Tools } from "./core/tools";
import { disableCssDebugger, enableCssDebugger, keyStorageName } from "./core/utils";

// CSS Debuger
const CSS_OUTLINE_STATUS = keyStorageName(Tools.CSS_OUTLINE, 'status')

function toogleCssDebugger(status: boolean, tabId?: number): void {
  status ? enableCssDebugger(tabId) : disableCssDebugger(tabId)
}

// General Events
chrome.tabs.onActivated.addListener((active)=>{
  chrome.storage.local.get([CSS_OUTLINE_STATUS]).then((result) => {
    toogleCssDebugger(result[CSS_OUTLINE_STATUS], active.tabId)
  });
})

chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    if(key === CSS_OUTLINE_STATUS){
      toogleCssDebugger(newValue)
    }
  }
});
