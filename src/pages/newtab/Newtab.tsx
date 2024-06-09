import React from "react";
import "@pages/newtab/Newtab.css";
import worker from "@assets/img/worker.png";
import Card from "./components/Card";

export default function Newtab(): JSX.Element {
  return (
    <div className="flex h-screen bg-white">
      <div className="m-auto shadow-lg p-6 flex flex-col items-center justify-center gap-2 rounded-xl border-t border-gray-300">
        <img src={worker} alt="sample" width={200} height={200} />
        <Card />
      </div>
    </div>
  );
}
