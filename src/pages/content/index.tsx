import ReactDOMServer from "react-dom/server";
import "./style.css";
import Block from "../block";
import { TAddedPage } from "../newtab/components/Additional/AddedPage";

let bannedPage: string[] = [];
let bannedAddedPage: TAddedPage[] = [];
chrome.storage.sync.get(["addedPage"], function (result) {
  console.log("Data added page retrieved:", result.addedPage);
  bannedAddedPage = result.addedPage;
  for (const item of bannedAddedPage) {
    if (item.url_link === window.location.origin && item.isChoosen) {
      const staticMarkup = ReactDOMServer.renderToStaticMarkup(<Block />);
      document.body.innerHTML = staticMarkup;
    }
  }
});
chrome.storage.sync.get(["allPages"], function (result) {
  console.log("Data retrieved:", result.allPages);
  bannedPage = result.allPages;
  if (bannedPage.includes(window.location.hostname)) {
    const staticMarkup = ReactDOMServer.renderToStaticMarkup(<Block />);
    document.body.innerHTML = staticMarkup;
  }
});
