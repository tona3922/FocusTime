import React, { useEffect, useState } from "react";
import "@pages/newtab/Newtab.css";
import worker from "@assets/img/worker.png";
import Card from "./components/Card";
import { pagesDetail } from "@src/assets/allpages";
import { Divider } from "antd";
import Additional from "./components/Additional";

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
        <div className="mx-auto my-3 flex flex-col justify-center items-center">
          <img src={worker} alt="sample" width={200} height={200} />
          <div className="font-customDetail text-3xl font-bold">
            It does not matter how slowly you go so long as you do not stop
          </div>
        </div>
        <Divider
          orientation="left"
          style={{ paddingLeft: 200, paddingRight: 200, height: 30 }}
        >
          <div className="text-lg font-semibold font-customDetail">
            Default block site
          </div>
        </Divider>
        <div className="grid grid-cols-5 place-items-center w-8/12 mx-auto gap-4">
          {pagesDetail.map((item: { name: string; url: string }) => {
            return (
              <Card
                key={item.name}
                name={item.name}
                url={item.url}
                allActivePage={initactivepage}
                setInitActivePage={setInitActivePage}
              />
            );
          })}
        </div>
        <Divider
          orientation="left"
          style={{ paddingLeft: 200, paddingRight: 200, height: 30 }}
        >
          <div className="text-lg font-semibold font-customDetail">
            Additional block site by yourself
          </div>
        </Divider>
        <div>
          {/* <Additional loadAddedPage={loadAddedPage} /> */}
          <Additional />
        </div>
      </div>
    </div>
  );
}
