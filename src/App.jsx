import Todoname from "./components/1 Todo name";
import Addtodo from "./components/2 ADD Todo";
import "./App.css"
import Container from "./components/Container";
import Todoitems from "./components/Todo items";
import { useState } from "react";
function App() {

  const initialtodoitems = [{

    name: "buy milk",
    duedate: "7/7/2027",
  },
  {
    name: "  Rajput worldwide",
    duedate: "7/7/2027",

  },
  ];
  const [todoitems, settodoitems] = useState(initialtodoitems)

  function handleNewITEM(itemname, itemdate) {
    console.log(itemname, itemdate)

    const newiteams = [
       ...todoitems,

      {
        name:   itemname  ,
        duedate: itemdate,
    
      },
    ]
    settodoitems(newiteams)

  }

  return (
    <>
      <Container>
        <center class=' todo container'>
          <Todoname></Todoname>
          <Addtodo onNewItem={handleNewITEM}></Addtodo>
          <Todoitems todoitems={todoitems}></Todoitems>
        </center>

      </Container >
    </>
  );
}

export default App
