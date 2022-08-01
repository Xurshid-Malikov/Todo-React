export const ListItem = ({ item, todos, setTodos }) => {

  const { id, isComplated, text } = item;

  const handleDeleteTodo = (todoId) => {
    const filteredTodos = todos.filter(todo => todo.id !== todoId);
    setTodos([...filteredTodos]);
  }

  const handleEditTodo = (todoId) => {
    const editText = prompt("Yangi todo kiriting!")
    const findedTodo = todos.find(todo => todo.id === todoId)
    findedTodo.text = editText;
    setTodos([...todos])
  }

  const handleCheckTodo = (todoId) => {
    const findedTodo = todos.find(todo => todo.id === todoId)
    findedTodo.isComplated = !findedTodo.isComplated;
    setTodos([...todos])
  }
  return (
    <li className="d-flex align-items-center mt-3">
      <span>ID: {id}</span>
      <input onChange={() => handleCheckTodo(id)} defaultChecked={isComplated} className="form-check-input mx-3" type="checkbox" />
      <strong className={isComplated && "text-decoration-line-through"}>{text}</strong>
      <button onClick={() => handleEditTodo(id)} className="btn btn-danger mx-3">Edit</button>
      <button onClick={() => handleDeleteTodo(id)} className="btn btn-warning">Delete</button>
    </li>

  )
}