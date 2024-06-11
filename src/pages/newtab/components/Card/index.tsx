import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Switch } from "antd";
const Card: React.FC<{
  url: string;
  name: string;
  allActivePage: string[];
  setInitActivePage: Dispatch<SetStateAction<string[]>>;
}> = ({ url, name, allActivePage, setInitActivePage }) => {
  const [isChecked, setIsChecked] = useState(
    allActivePage.includes(url) ? true : false
  );
  const [activePage, setActivePage] = useState<string[]>(allActivePage);

  useEffect(() => {
    console.log(allActivePage);
  });
  // Initialize activePage from storage
  // useEffect(() => {
  //   setActivePage(allActivePage);
  //   console.log("data: ", allActivePage);
  //   setIsChecked(allActivePage.includes(url) ? true : false);
  // });
  // useEffect(() => {
  //   chrome.storage.sync.set({ allPages: activePage }, function () {
  //     console.log("Data saved");
  //   });
  //   chrome.storage.sync.get(["allPages"], function (result) {
  //     setActivePage(result.allPages || []);
  //     setIsChecked(result.allPages.includes(url) ? true : false);
  //   });
  // }, [activePage]);
  return (
    <div className="bg-white p-2 rounded-lg shadow-lg">
      <div>{name}</div>
      <div>abc {isChecked.toString()}</div>
      <Switch
        checked={isChecked}
        onChange={() => {
          console.log("before check: ", activePage);
          if (isChecked) {
            setActivePage((prevPages) =>
              prevPages.filter((page) => page !== url)
            );
            setInitActivePage((prevPages) =>
              prevPages.filter((page) => page !== url)
            );
          } else {
            setActivePage((prevPages) => [...prevPages, url]);
            setInitActivePage((prevPages) => [...prevPages, url]);
          }
          setIsChecked(!isChecked);
        }}
      />
    </div>
  );
};

export default Card;
