chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("stackoverflow.com/questions")) {

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
    })
  }
})