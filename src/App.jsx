import { useEffect, useState } from "react";
import AddTranferWindow from "./components/AddTranferWindow";
import Button from "./components/Button";
import History from "./components/History";
import TransferList from "./components/TransferList";
import Plots from "./components/Plots";
import classNames from "classnames";
// data = {
//     date: ,
//     name: ,
//     count: ,
//     category: ,

// }

const CATEGORY = [
  {
    id: 1,
    name: "uno",
    color: "#ccccff",
  },
  {
    id: 2,
    name: "dos",
    color: "#ffffcc",
  },
  {
    id: 3,
    name: "tres",
    color: "#ffccff",
  },
  {
    id: 4,
    name: "quadro",
    color: "#ccffff",
  },
  {
    id: 5,
    name: "quinto",
    color: "#ccffcc",
  },
];

const LIST = [];

function App() {
  const [categoryList, setLastCategoryList] = useState(() => {
    // Инициируем состояние сразу из local storage
    const savedCategories = window.localStorage.getItem("CATEGORIES"); // берем изначение из локала по ключу
    return savedCategories !== null ? JSON.parse(savedCategories) : CATEGORY; // если значение не null присваиваем состоянию данные из локал, иначе стандартное значение
  });
  useEffect(() => {
    // Запись состояния в localStorage только если settings изменились
    window.localStorage.setItem("CATEGORIES", JSON.stringify(categoryList));
  }, [categoryList]);

  const [transferList, setTransferList] = useState(() => {
    // Инициируем состояние сразу из local storage
    const savedTranfers = window.localStorage.getItem("TRANSFERS"); // берем изначение из локала по ключу
    return savedTranfers !== null ? JSON.parse(savedTranfers) : LIST; // если значение не null присваиваем состоянию данные из локал, иначе стандартное значение
  });
  useEffect(() => {
    // Запись состояния в localStorage только если settings изменились
    window.localStorage.setItem("TRANSFERS", JSON.stringify(transferList));
  }, [transferList]);

  const [isShowGrafs, setIsShowGrafs] = useState(false);
  return (
    <div className="w-screen h-screen relative ">
      <div className="w-[95%] gap-4 p-4 mx-auto mb-4 border-b-4 border-black flex items-center ">
        <p className=" font-bold text-xl block">Операции</p>
        <Button style={"ml-auto"}>Настройки</Button>

        {isShowGrafs ? (
          <Button
            style={"md:hidden flex"}
            onClick={() => setIsShowGrafs(false)}
          >
            История
          </Button>
        ) : (
          <Button onClick={() => setIsShowGrafs(true)} style={"md:hidden flex"}>
            Графики
          </Button>
        )}
      </div>
      <div className="flex h-full  ">
        <div
          className={classNames("md:max-w-lg w-full md:block", {
            hidden: isShowGrafs,
            block: !isShowGrafs,
          })}
        >
          <History
            transferList={transferList}
            categoryList={categoryList}
            setTransferList={setTransferList}
          />
        </div>
        <div
          className={classNames("w-full h-full md:block", {
            block: isShowGrafs,
            hidden: !isShowGrafs,
          })}
        >
          <Plots transferList={transferList} categoryList={categoryList} />
        </div>
      </div>
    </div>
  );
}

export default App;
