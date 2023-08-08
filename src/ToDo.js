import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [toDo, setToDo] = React.useState("");
  const [toDos, setToDos] = React.useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  return (
    <div>
      <h1>To Do List({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do..." />
        <button>Submit</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}

export default App;