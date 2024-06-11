import ReactDOMServer from "react-dom/server";
import "./style.css";
import Block from "../block";

let bannedPage: string[] = [];
chrome.storage.sync.get(["allPages"], function (result) {
  console.log("Data retrieved:", result.allPages);
  bannedPage = result.allPages;
  if (bannedPage.includes(window.location.hostname)) {
    const staticMarkup = ReactDOMServer.renderToStaticMarkup(<Block />);
    document.body.innerHTML = staticMarkup;
  }
});
