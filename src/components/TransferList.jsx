import React from "react";
import Transfer from "./Transfer";
import { getYearMonthDay } from "../utils/utils";

const TransferList = ({ List, Category, viewSelector }) => {
  let lastDate = "";
  return (
    <ul className="w-full ">
      {List.filter((itemF) => {
        return(new Date(itemF.date) >= new Date(viewSelector.start))
      }).sort((a, b)=>new Date(b.date) - new Date(a.date)).map((item) => {
        const { year, month, day } = getYearMonthDay(item.date);
        let stringDate = `${day}.${month}.${year}`;
        const showDateSeparator = stringDate !== lastDate;
        const categoryItem = Category.filter(
          (cat) => cat.id === item.category_id
        )[0];
        lastDate = stringDate;
        return (
          <>
            {showDateSeparator && (
              <div className="w-auto font-bold bg-slate-200 rounded-md mx-4 my-2 px-4 py-1">
                {" "}
                {stringDate}{" "}
              </div>
            )}
            <Transfer
              data={item}
              category_data={categoryItem}
              key={item.name + item.date}
            />
          </>
        );
      })}
    </ul>
  );
};

export default TransferList;
