import { useState } from "react"

function Addtodo({ onNewItem }) {
  const[ todoname,settodoname] = useState("  ");
  const[ tododate,settododate] = useState("  ");
  function handlenamechange (event){
     settodoname( event.target.value)
     
  }
  function handledatechange(event){

    settododate( event.target.value)

  }

  function handlebuttonclicked() {
    onNewItem( todoname, tododate )
    todoname
       settodoname("")
       settododate("")

  }
  return <div class="container text-center">
    <div class="row">
      <div class="col-6">
        <input type="text" placeholder="enter todo here "  value={todoname}  onChange={  handlenamechange}  /> 
      </div>
      <div class="col-4"><input type="date" onChange={handledatechange }  value={tododate}/></div>

      <div class="col-2"><button type="button" class="btn btn-success"
        onClick={ handlebuttonclicked }>Add</button></div>
    </div>
  </div >
}
export default Addtodo