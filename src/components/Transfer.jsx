import React from "react";
import classNames from "classnames";
import { space } from "postcss/lib/list";

// Функция для преобразования HEX в RGBA с прозрачностью


const Transfer = ({ data,category_data }) => {
  const timeStamp = new Date(data.date);

  const GREEN = "#86efac";
  const RED = "#fca5a5";
  const TYPECOLOR = category_data.color;
  
 
  const hour = String(timeStamp.getHours()).padStart(2, "0");
  const minutes = String(timeStamp.getMinutes()).padStart(2, "0");
  const isMinus = data.count < 0;
  const BgColor = isMinus ? RED : GREEN;
  return (
    <li
      className={classNames(
        "flex p-2 m-2 w-auto bg-gre  font-semibold rounded-xl"
        // {
        //   "border-green-300 bg-green-50": !isMinus,
        //   "border-red-300 bg-red-50": isMinus,
        // }
      )}
      style={{
        background: `linear-gradient(to right, ${TYPECOLOR} 50%, ${BgColor  } 90%)`,
      }}
    >
      <div className="p-1 flex-grow-[1] ">{`${hour}:${minutes}`}</div>
      <div className=" flex p-1 flex-grow-[7]  ">{data.name}</div>
      <div className="p-1 flex-grow-[1] flex justify-center">
        {Math.abs(data.count)}
      </div>
      <div className="p-1 flex-grow-[1] flex justify-center">
        {isMinus && <span>Расход</span>}
        {!isMinus && <span>Доход</span>}
      </div>
      <div className="p-1 flex-grow-[2] flex justify-center">
        {category_data.name}
      </div>
    </li>
  );
};
// data = {
//     date: ,
//     name: ,
//     count: ,
//     category: ,

// }

export default Transfer;
