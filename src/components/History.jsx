import React, { useState } from "react";
import Button from "./Button";
import TransferList from "./TransferList";
import AddTranferWindow from "./AddTranferWindow";
import DropDownSelect from "./DropDownSelect";

const year = new Date().getFullYear()
const month = new Date().getMonth()
const date = new Date().getDate()
const day = new Date().getDay()
const timeSelectList = [
  {name: 'Эта неделя', id: 'week', start: new Date(year, month, date - day +1)},
  {name: 'Этот месяц', id: 'month', start: new Date(year, month)},
  {name: 'Все время', id: 'all', start: new Date(0)},
]


const History = ({ transferList, categoryList, setTransferList }) => {
  const [addModal, setAddModal] = useState(false);
  const [lastCategory, setLastCategory] = useState(categoryList[0])
  const [viewSelector, setViewSelector] = useState(timeSelectList.filter((item)=>item.id === 'all')[0])
  const handlerAddModalOpen = () => {
    setAddModal(true);
  };
  const handlerAddModalClose = () => {
    setAddModal(false);
  };


  return (

    <div className="flex w-full flex-col p-2  max-h-screen min-h-full" >
      <div className="flex px-4 py-2 my-2 border-b-4 gap-4">
        
        <DropDownSelect selected = {viewSelector} setSelected={setViewSelector} selectorList= {timeSelectList} />

        {addModal ? (
          <Button onClick={handlerAddModalClose} style={""}>
            Отмена
          </Button>
        ) : (
          <Button onClick={handlerAddModalOpen} style={""}>
            Новая запись
          </Button>
        )}
      </div>
      {addModal ? (
        <AddTranferWindow categoryList={categoryList} setTransferList={setTransferList} lastCategory={lastCategory} setLastCategory = {setLastCategory} handlerClose = {handlerAddModalClose}/>
      ) : (
        <>
        <TransferList List={transferList} Category={categoryList}  viewSelector={viewSelector}/>
        {transferList.length === 0 && (<p className=" m-auto text-lg text-gray-500 italic">Пока записей нет.</p>)}
        </>
      )}
    </div>
  );
};

export default History;
