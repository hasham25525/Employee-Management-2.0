import { useState } from "react";
import MyTable from "./components/MyTable";
import Modal from "./components/Modal";

function App() {

  const [tableRows, setTableRows] = useState([
    {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",

    },
    {
      name: "Mike ",
      job: "Manager",
      date: "23/04/18",

    },
    {
      name: "mem ",
      job: "Employee",
      date: "23/04/20",

    },
  ]);

   const handleDeleteRow =(targetRow)=>{
    setTableRows(tableRows.filter((_,idx)=>idx!== targetRow))   ;
   }

   const handleSubmit=(newRow)=>{
    setTableRows([...tableRows,newRow])
   }

  return (
    <>
      <Modal onSubmit={handleSubmit}/>
      <MyTable tableRows={tableRows} handleDeleteRow={handleDeleteRow} />
    </>
  )
}

export default App
