import React, { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([]);
  const [task, setatsk] = useState("");

  const addTODO = async (e) => {
    e.preventDefault();

    settodos([...todos, task]);
    setatsk("");
  };

  const removeTodo = async (idx) =>{
   settodos(todos.filter((_, i) => i !== idx));
  }

  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-gray-100">
      <div className="flex flex-col gap-4 mb-4">
       {todos.map((todo, idx) => (
        <div className="flex justify-center items-center gap-2 ">
          <p key={idx} className='text-black mb-2 w-auto h-auto'>{todo}</p>
          <button onClick={() => removeTodo(idx)} className="bg-red-600 hover:bg-red-700 p-2 text-white font-semibold py-2 rounded-md transition-colors">Delete</button>
        </div>
            
            
          ))}
      </div>
    

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form  onSubmit={addTODO} className="flex flex-col gap-4">
          <label htmlFor="todo" className="text-gray-700 font-semibold">
            Enter Task
          </label>
          <input
            id="todo"
            type="text"
            value={task}
            onChange={(e) => setatsk(e.target.value)}
            placeholder="Enter task for todo"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
