import React, { useEffect, useState } from "react";
import "@pages/newtab/Newtab.css";
import worker from "@assets/img/worker.png";
import Card from "./components/Card";
import { Switch } from "antd";

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
    <div className="tailwind-container">
      <div className="flex h-screen bg-white flex-col">
        <div className="mx-auto">
          <img src={worker} alt="sample" width={200} height={200} />
          <Switch />
        </div>
        <div>
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
    </div>
  );
}
