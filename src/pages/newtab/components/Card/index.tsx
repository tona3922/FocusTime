import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Switch } from "antd";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Messenger,
  Netflix,
  Pinterest,
  Reddit,
  Tiktok,
  X_Twitter,
  Youtube,
} from "@src/assets/img";
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
  return (
    <div className="tailwind-container">
      <div className="bg-white h-40 w-40 rounded-lg shadow-lg flex flex-col justify-center items-center gap-2 hover:-translate-y-2 transition duration-300 ease-in-out delay-150">
        <img
          src={
            name === "Facebook"
              ? Facebook
              : name === "Instagram"
              ? Instagram
              : name === "YouTube"
              ? Youtube
              : name === "LinkedIn"
              ? LinkedIn
              : name === "Messenger"
              ? Messenger
              : name === "Netflix"
              ? Netflix
              : name === "Pinterest"
              ? Pinterest
              : name === "Reddit"
              ? Reddit
              : name === "Tiktok"
              ? Tiktok
              : X_Twitter
          }
          alt={`logo_${name}`}
          width={50}
          height={50}
        />
        <div className="text-xl font-customDetail font-semibold">{name}</div>
        <div className="flex flex-row items-center justify-center gap-2 px-2">
          <div className="font-customCardTitle font-medium">Inactive</div>
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
          <div className="font-customCardTitle font-medium">Active</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
