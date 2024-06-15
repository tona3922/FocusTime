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
      <Modal open={isOpen} onCancel={handleCancel} centered footer={null}>
        <div className="tailwind-container">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-customDetail font-semibold">
              Delete Block Site
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/256/7167/7167918.png"
                width={200}
                height={200}
              />
            </div>
            <div className="text-lg">
              <span className="font-semibold">Site name:</span> {page.name}
            </div>
            <div className="text-lg">
              <span className="font-semibold">Site url(link):</span>{" "}
              {page.url_link}
            </div>
            <div className="flex flex-row justify-center">
              <button
                onClick={() => {
                  setAddedPage((prevPages) =>
                    prevPages.filter(
                      (pageChoosen) => pageChoosen.url_link !== page.url_link
                    )
                  );
                  setIsOpen(false);
                }}
                className="bg-red-500 text-white font-semibold px-4 py-2 text-lg rounded-lg border-none hover:cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="bg-neutral-50 h-40 w-40 rounded-lg shadow-lg">
        <div className="flex flex-col gap-3 justify-center items-center h-40 relative">
          <div className="text-lg font-customDetail font-semibold">
            {page.name}
          </div>
          <div className="text-md font-customTitle w-36 break-words">
            {page.url_link}
          </div>
          <div className="flex flex-row items-center justify-center gap-2 px-2">
            <div className="font-customCardTitle font-medium">Inactive</div>
            <Switch
              checked={isChecked}
              onChange={() => {
                setIsChecked(!isChecked);
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
            <div className="font-customCardTitle font-medium">Active</div>
          </div>
          <button
            className="absolute -top-2 -right-3 border-none bg-transparent hover:cursor-pointer"
            onClick={showModal}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"
              width={22}
              height={22}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default AddedCard;
