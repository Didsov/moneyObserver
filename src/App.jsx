import { useState } from "react";
import AddTranferWindow from "./components/AddTranferWindow";
import Button from "./components/Button";
import History from "./components/History";
import TransferList from "./components/TransferList";
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
  },{
    id: 3,
    name: "tres",
    color: "#ffccff",
  },{
    id: 4,
    name: "quadro",
    color: "#ccffff",
  },{
    id: 5,
    name: "quinto",
    color: "#ccffcc",
  },
];

const LIST = [
  
];

function App() {
  const [categoryList, setLastCategoryList] = useState(CATEGORY)
  const [ transferList, setTransferList] = useState(LIST)
  
  return (
    <div className="w-screen h-screen">
      <div className="w-[95%] gap-4 p-4 mx-auto mb-4 border-b-4 border-black flex items-center">
        <p className=" font-bold text-xl block">Операции</p>
        <Button style={"ml-auto"}>Настройки</Button>
      </div>
      <div className="max-w-lg">
      <History transferList={transferList} setTransferList={setTransferList} categoryList={categoryList}/>
      </div>
    </div>
  );
}

export default App;
