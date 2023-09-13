import { useState, useEffect } from 'react';
import './App.css';




function App() {

  const [todo, setTodo] = useState('')
  
  useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => setTodo(data)) 
  }, []);

  console.log('App rendered')
  console.log(todo)


  return (
    <div className="App">
     <h2>{`User ID: ${todo.id}`}</h2>
     <p>{`Title Content: ${todo.title}`}</p>
    </div>
  );
}

export default App;
