import ReactDOMServer from "react-dom/server";
import "./style.css";
import Block from "../block";
const div = document.createElement("div");
div.id = "__root";
document.body.appendChild(div);

const rootContainer = document.querySelector("#__root");
if (!rootContainer) throw new Error("Can't find Content root element");
// const root = createRoot(rootContainer);
const bannedPage = [
  "www.pinterest.com",
  "www.linkedin.com",
  "www.facebook.com",
  "www.messenger.com",
  "www.youtube.com",
];
if (bannedPage.includes(window.location.hostname)) {
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(<Block />);
  document.body.innerHTML = staticMarkup;
}
