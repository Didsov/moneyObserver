import React, { useState } from "react";
import ArrowUpSvg from "./icons/ArrowUpSvg";
import classNames from "classnames";

const DropDownSelect = ({ selected, selectorList, setSelected }) => {
  const unSelectedList = selectorList.filter((item) => item.id !== selected.id);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex-1 flex-col bg-slate-200 rounded-t-md flex justify-start  pb-0 items-start relative cursor-pointer ">
      <p
        className=" p-4 font-bold bg-slate-200 rounded-t-md text-gray-800 z-10  w-full"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {selected.name}
        <span
          className={classNames(
            "w-6  absolute  right-4 transition-all duration-75",
            { "rotate-0": isOpen, "rotate-180": !isOpen }
          )}
        >
          <ArrowUpSvg />
        </span>
      </p>
      {(
        <div
          className={classNames(
            " w-full absolute  bg-slate-200 left-0 pb-2 px-2  rounded-b-md transition-all duration-75",
            {"top-[100%] ": isOpen, "top-[0] opacity-0 h-0 ": !isOpen}
          )}
        >
          {unSelectedList.map((item) => (
            <p
              onClick={() => {
                setSelected(item);
                setIsOpen(false);
              }}
              className="border-gray-300 text-gray-500 hover:text-gray-800 font-bold border-t-2 w-full p-2  "
              key={item.id}
            >
              {item.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownSelect;
