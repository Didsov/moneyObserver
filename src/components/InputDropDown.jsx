import React, { useState } from "react";
import ArrowUpSvg from "./icons/ArrowUpSvg";
import classNames from "classnames";

const InputDropDown = ({
  label,
  selectedCategory,
  setselectedCategory,
  categoryList,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleToggle = () => {
    isOpen ? handleClose() : handleOpen();
  };
  const handlerSelect = (item) => {
    setselectedCategory(item.id);
    handleClose();
  };
  return (
    <div className="flex w-full flex-col overflow-hidden">
      <p className="font-bold mb-4">{label} </p>
      <p
        className="border pl-4 rounded-t-xl py-1 text-lg cursor-pointer relative z-10 "
        onClick={handleToggle}
        style={{
          background: `linear-gradient(-45deg, ${
            selectedCategory.color
          } 30%, ${"transparent "} 90%)`,
        }}
      >
        {selectedCategory.name}
        <span
          className={classNames(
            "w-6  absolute top-2 right-4 transition-all duration-75",
            { "rotate-0": isOpen, "rotate-180": !isOpen }
          )}
        >
          <ArrowUpSvg />
        </span>
      </p>

      {

      <ul
        className={classNames(
          "border rounded-b-xl transition-all duration-150 ",
        )}
      >
        {isOpen &&
          categoryList
            .filter((item) => item.id !== selectedCategory.id)
            .map((item) => (
              <li
                style={{
                  background: `linear-gradient(-45deg, ${
                    item.color
                  } 30%, ${"transparent "} 90%)`,
                }}
                className="border-b-2 text-lg py-1 pl-4 last:border-b-0 last:rounded-b-xl cursor-pointer "
                onClick={() => {
                  handlerSelect(item);
                }}
              >
                {item.name}
              </li>
            ))}
      </ul>
    }

    </div>
  );
};

export default InputDropDown;
