import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="todo..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={() => setTodos([...todos, text])}>Add Todo</button>
      </form>
      {todos.map((item, index) => (
        <p>
          {item}
          <button
            onClick={() =>
              setTodos(todos.filter((_, filterIndex) => filterIndex !== index))
            }
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
