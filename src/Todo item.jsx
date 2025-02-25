function Todoitem( { todoname , tododate }) {
  return <div class="container text-center">
     
  <div class="row">
    <div class="col-6">
      <p> { todoname  } </p>
    </div>
    <div class="col-4">{tododate}</div>
    <div class="col-2"> <button type="button" class="btn btn-danger">Delete</button></div>
</div>
</div>
}
export default Todoitem