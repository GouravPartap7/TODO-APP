import Todoitem from "../Todo item"

function Todoitems({ todoitems }) {

  return (  

<div>
    { todoitems.map((item) => (<Todoitem todoname = { item.name} tododate= { item.duedate} ></Todoitem>))} 
    </div>

);              


};
export default Todoitems ;