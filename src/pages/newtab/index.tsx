import React from "react";
import { createRoot } from "react-dom/client";
import Newtab from "@pages/newtab/Newtab";
import "@pages/newtab/index.css";
import "@assets/styles/tailwind.css";

function init() {
  chrome.storage.sync.get(["allPages"], function (result) {
    const rootContainer = document.querySelector("#__root");
    if (!rootContainer) throw new Error("Can't find Newtab root element");
    const root = createRoot(rootContainer);
    root.render(<Newtab data={result.allPages} />);
  });
}

init();
