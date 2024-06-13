import { Modal, Switch } from "antd";
import React, { Dispatch, SetStateAction, useState } from "react";
import { TAddedPage } from "../../AddedPage";

const AddedCard: React.FC<{
  page: TAddedPage;
  setAddedPage: Dispatch<SetStateAction<TAddedPage[]>>;
}> = ({ setAddedPage, page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(page.isChoosen);
  const showModal = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal open={isOpen} onCancel={handleCancel} footer={null}>
        <div>Delete Modal</div>
        <button
          onClick={() => {
            setAddedPage((prevPages) =>
              prevPages.filter(
                (pageChoosen) => pageChoosen.url_link !== page.url_link
              )
            );
            setIsOpen(false);
          }}
        >
          Sure
        </button>
      </Modal>
      <div className="bg-neutral-300 p-4 border border-blue-500">
        <div>
          <div>Added card</div>
          <div>{page.name}</div>
          <div>{page.url_link}</div>
          <Switch
            checked={isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
              // const value: TAddedPage = {
              //   name: page.name,
              //   url_link: page.url_link,
              //   isChoosen: !page.isChoosen,
              // };
              // const newObject = addedPage;
              // const index = newObject.findIndex(
              //   (item) => item.name === page.name
              // );
              // if (index !== -1) {
              //   console.log("changed");
              //   console.log(value);
              //   Object.assign(newObject[index], value);
              // }
              // console.log(newObject);
              // setAddedPage(newObject);
              setAddedPage((prev) => {
                const updatedItems = [...prev]; // must be with the ... (spread operator)
                updatedItems.forEach((item) => {
                  if (item.name === page.name) {
                    // Update the property of the item directly in the new array
                    item.isChoosen = !item.isChoosen; // Note: Directly toggle the value here
                  }
                });
                console.log(updatedItems); // Log the updated array
                // Return the new array to update the state
                return updatedItems;
              });
            }}
          />
        </div>
        <button onClick={showModal}>delete me</button>
      </div>
    </>
  );
};

export default AddedCard;
