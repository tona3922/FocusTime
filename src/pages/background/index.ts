console.log("background script loaded");
chrome.action.onClicked.addListener(function (tab) {
  chrome.tabs.create({
    url: chrome.runtime.getURL("src/pages/newtab/index.html"),
    active: true,
  });
});
