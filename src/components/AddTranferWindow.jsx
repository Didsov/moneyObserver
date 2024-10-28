import React, { useState } from "react";
import LabelInput from "./LabelInput";
import Button from "./Button";
import InputDropDown from "./InputDropDown";

const AddTranferWindow = ({
  handlerClose,
  categoryList,
  setLastCategory,
  lastCategory,
  setTransferList,
}) => {
  if (categoryList === undefined || categoryList.lenght === 0) {
    console.log(
      "Передача пустого или undefined массива категорий в окно добавления записи ",
      categoryList
    );
  }
  if (categoryList.filter((item) => item.id === lastCategory.id).lenght == 0) {
    setLastCategory(categoryList[0]);
  }
  const now = new Date();
  const [sum, setSum] = useState("");
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [selectedCategory, setselectedCategory] = useState(lastCategory);
  const [trySubmit, setTrySubmit] = useState(false);

  const handlerSelectCategory = (id) => {
    setselectedCategory(categoryList.filter((item) => item.id === id)[0]);
  };
  const handleSubmit = () => {
    setTrySubmit(true);
    if (name.length !== 0 && sum.length !== 0 && date.length !== 0) {
      console.log("Save ", sum, new Date(date), name, selectedCategory);
      handleSave();
      handlerClose();
    }
  };
  const handleSave = () => {
    setTransferList((prev) => [
      { date: new Date(date), name: name, count: parseInt(sum), category_id: selectedCategory.id },
      ...prev,
    ].sort((a, b) => b.date - a.date));
  };

  return (
    <div className="p-8 flex flex-col gap-5 border-2 rounded-lg ">
      
      <LabelInput
        trySubmit={trySubmit}
        label={"Имя"}
        value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div className="flex gap-4">
        <LabelInput
          trySubmit={trySubmit}
          label={"Сумма"}
          value={sum}
          type={"tel"}
          onChange={(e) => {
            if (/^[+\-]?\d*$/.test(e.target.value)) {
              setSum(e.target.value);
            }
          }}
        />
        <LabelInput
          trySubmit={trySubmit}
          label={"Дата"}
          value={new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16)}
          type={"datetime-local"}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <InputDropDown
        label={"Категория"}
        selectedCategory={selectedCategory}
        setselectedCategory={handlerSelectCategory}
        categoryList={categoryList}
      />
      <div className="flex gap-4 justify-center">
        <Button onClick={handleSubmit}> Добавить </Button>
        <Button onClick={handlerClose}> Отмена </Button>
      </div>
    </div>
  );
};

export default AddTranferWindow;
