import React from "react";
import "./style.css";

const Block: React.FC = () => {
  return (
    <div className="flex h-screen bg-white">
      <div className="m-auto flex flex-col gap-4 items-center justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/256/7167/7167923.png"
          className="self-center"
          width={150}
          height={120}
          alt="block-page-image"
        />
        <h3 className="text-3xl font-medium font-customDetail">
          Keep working, it&apos;s almost done
        </h3>
      </div>
    </div>
  );
};
export default Block;
