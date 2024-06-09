import { allPages } from "@src/assets/allpages";

console.log("background script loaded");
chrome.storage.sync.set({ allPages: allPages }, function () {
  console.log("Data saved");
});
chrome.action.onClicked.addListener(function (tab) {
  chrome.tabs.create({
    url: chrome.runtime.getURL("src/pages/newtab/index.html"),
    active: true,
  });
});
