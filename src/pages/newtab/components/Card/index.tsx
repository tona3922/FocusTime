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
  return (
    <div className="tailwind-container">
      <div className="bg-white h-40 w-40 rounded-lg shadow-lg border-t border-gray-300 flex flex-col justify-center items-center gap-2">
        <div className="text-xl font-customDetail">{name}</div>
        <Switch />
        <div className="flex flex-row items-center justify-center gap-2 px-2">
          <div>inactive</div>
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
          <div>active</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
