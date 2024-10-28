import React, { useState } from "react";
import Button from "./Button";
import TransferList from "./TransferList";
import AddTranferWindow from "./AddTranferWindow";

const History = ({ transferList, categoryList, setTransferList }) => {
  const [addModal, setAddModal] = useState(false);
  const [lastCategory, setLastCategory] = useState(categoryList[0])
  const handlerAddModalOpen = () => {
    setAddModal(true);
  };
  const handlerAddModalClose = () => {
    setAddModal(false);
  };

  return (
    <div className="flex w-full flex-col p-2">
      <div className="flex px-4 py-2 my-2 border-b-4 gap-4">
        <div className="flex-1 bg-slate-200 rounded-md flex justify-start p-2 items-center">
          <p>Все записи</p>
        </div>
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
        <TransferList List={transferList} Category={categoryList} />
        {transferList.length === 0 && (<p className=" m-auto text-lg text-gray-500 italic">Пока записей нет.</p>)}
        </>
      )}
    </div>
  );
};

export default History;
