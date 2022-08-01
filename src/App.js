import { useRef, useState } from 'react';
import { List } from "./components"
import { ListItem } from "./components"
import "./app.scss";


function App() {

  const elInput = useRef()

  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("todos")) || [])

  const handleInputValue = (evt) => {
    evt.preventDefault()
    const newTodo = {
      id: todos.at(-1)?.id ? todos.at(-1).id + 1 : 1,
      text: elInput.current.value,
      isComplated: false
    }
    setTodos([...todos, newTodo]);
    elInput.current.value = null

    
  }
	let all = todos.length
	let complated = todos.filter(el => el.isComplated === true).length
	let unComplated = todos.filter(el => el.isComplated === false).length
	console.log(unComplated);

  window.localStorage.setItem("todos", JSON.stringify(todos))
  return (

    <div className="App mx-auto">
      <form onSubmit={handleInputValue}>
      <input ref={elInput} type="text" placeholder='Todo...' />
      <button className='btn btn-success ms-1' type='submit'>Submit</button>
      <div>
      <button className='btn btn-primary mt-3'>All {all}</button>
      <button className='btn btn-secondary mt-3 ms-1'>Aomplated {complated}</button>
      <button className='btn btn-dark mt-3 ms-1'>UnComplated {unComplated}</button>
      </div>
      </form>
      {todos.length > 0 && <List>
        {
          todos.map(e => (
            <ListItem key={e.id} item={e} todos={todos} setTodos={setTodos} />
          ))
        }
      </List>}
    </div>
  );
}

export default App;
