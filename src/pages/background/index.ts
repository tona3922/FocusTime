import { allPages } from "@src/assets/allpages";
chrome.storage.sync.get(["allPages"], function (result) {
  console.log("Data reload:", result.allPages);
  if (!result.allPages) {
    chrome.storage.sync.set({ allPages: allPages }, function () {
      console.log("Data init first time");
    });
  }
});
chrome.action.onClicked.addListener(function (tab) {
  chrome.tabs.create({
    url: chrome.runtime.getURL("src/pages/newtab/index.html"),
    active: true,
  });
});
