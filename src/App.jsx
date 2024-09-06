import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim) {
      return alert("adlkfjsjshdf");
    }
    const newTodo = {
      title: value,
      id: Date.now().toString(),
    };
    setTodo([...todo, newTodo]);
    setValue("");
  };

  const deleteHandle = (todoId) => {
    setTodo(todo.filter((item) => item.id !== todoId));
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">add</button>
      </form>

      <div>
        {todo.map((item) => (
          <div>
            <h1 key={item.id}>{item.title}</h1>
            <button onClick={() => deleteHandle(item.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
