import React, { useEffect, useState } from "react";
import AddedCard from "./components/AddedCard";
import AddedModal from "./components/AddedModal";
import { TAddedPage } from "./AddedPage";

const Additional: React.FC = () => {
  // get(["allPages"], function (result) {

  let loadAddedPage: TAddedPage[] = [];
  const [addedPage, setAddedPage] = useState<TAddedPage[]>([]);
  useEffect(() => {
    chrome.storage.sync.get(["addedPage"], function (result) {
      console.log("loaded page : ", result.addedPage);
      if (result.addedPage) {
        loadAddedPage = result.addedPage;
      }
      setAddedPage(loadAddedPage);
    });
  }, []);
  useEffect(() => {
    chrome.storage.sync.set({ addedPage: addedPage }, function () {
      console.log("Data saved for added page");
    });
  }, [addedPage]);
  return (
    <div>
      <div>Additional</div>
      <AddedModal setAddedPage={setAddedPage} />
      {addedPage.map((page, index) => {
        return (
          <AddedCard key={index} setAddedPage={setAddedPage} page={page} />
        );
      })}
    </div>
  );
};

export default Additional;
