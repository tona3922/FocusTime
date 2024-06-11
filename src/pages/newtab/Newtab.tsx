import React, { useEffect, useState } from "react";
import "@pages/newtab/Newtab.css";
import worker from "@assets/img/worker.png";
import Card from "./components/Card";

export default function Newtab({ data }: { data: string[] }): JSX.Element {
  const [initactivepage, setInitActivePage] = useState<string[]>(data);

  useEffect(() => {
    // Initialize activePage from storage
    console.log("reload data", initactivepage);
    chrome.storage.sync.set({ allPages: initactivepage }, function () {
      console.log("Data saved");
    });
  }, [initactivepage]);
  return (
    <div className="flex h-screen bg-white">
      <div className="m-auto shadow-lg p-6 flex flex-col items-center justify-center gap-2 rounded-xl border-t border-gray-300">
        <img src={worker} alt="sample" width={200} height={200} />
        <Card
          name="LinkedIn"
          url="www.linkedin.com"
          allActivePage={initactivepage}
          setInitActivePage={setInitActivePage}
        />
        <Card
          name="Youtube"
          url="www.youtube.com"
          allActivePage={initactivepage}
          setInitActivePage={setInitActivePage}
        />
        <Card
          name="Facebook"
          url="www.facebook.com"
          allActivePage={initactivepage}
          setInitActivePage={setInitActivePage}
        />
        <Card
          name="Messenger"
          url="www.messenger.com"
          allActivePage={initactivepage}
          setInitActivePage={setInitActivePage}
        />
        <Card
          name="Pinterest"
          url="www.pinterest.com"
          allActivePage={initactivepage}
          setInitActivePage={setInitActivePage}
        />
        <Card
          name="Twitter"
          url="www.twitter.com"
          allActivePage={initactivepage}
          setInitActivePage={setInitActivePage}
        />
      </div>
    </div>
  );
}
