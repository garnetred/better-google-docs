chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === "complete" &&
    tabUrl &&
    tabUrl.includes("docs.google.com/document")
  ) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["css/global.css"],
    });
  }
});
