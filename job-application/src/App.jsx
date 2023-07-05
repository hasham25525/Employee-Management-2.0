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
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",

    },

  ]);

  return (
    <>
      <Modal />
      <MyTable tableRows={tableRows} />
    </>
  )
}

export default App
