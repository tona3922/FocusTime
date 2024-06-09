import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
const Card = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [activePage, setActivePage] = useState<string[]>([]);

  // Initialize activePage from storage
  useEffect(() => {
    chrome.storage.sync.get(["allPages"], function (result) {
      setActivePage(result.allPages || []);
      setIsChecked(result.allPages.includes("www.facebook.com") ? true : false);
    });
  }, []);

  useEffect(() => {
    // Synchronize activePage with Chrome storage whenever it changes
    chrome.storage.sync.set({ allPages: activePage }, function () {
      console.log("Data saved");
    });
    chrome.storage.sync.get(["allPages"], function (result) {
      console.log(result.allPages);
    });
  }, [activePage]);

  return (
    <div className="bg-white p-2 rounded-lg shadow-lg">
      <div>upper</div>
      <div>facebook</div>
      <Switch
        defaultChecked={isChecked}
        onChange={() => {
          if (isChecked) {
            setIsChecked(false);
            setActivePage((prevPages) =>
              prevPages.filter((page) => page !== "www.facebook.com")
            );
          } else {
            setIsChecked(true);
            setActivePage((prevPages) => [...prevPages, "www.facebook.com"]);
          }
        }}
      />
    </div>
  );
};

export default Card;
