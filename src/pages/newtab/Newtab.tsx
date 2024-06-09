import React from "react";
import "@pages/newtab/Newtab.css";
import worker from "@assets/img/worker.png";

export default function Newtab(): JSX.Element {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/newtab/Newtab.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header> */}
      <div className="flex h-screen bg-white">
        <div className="m-auto shadow-lg p-6 flex flex-col items-center justify-center gap-2 rounded-xl border-t border-gray-300">
          <img src={worker} alt="sample" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}
