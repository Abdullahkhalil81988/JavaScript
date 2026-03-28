import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  useEffect(() => {
    setFiltered(
      tasks.filter((task) =>
        task.text.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, tasks]);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        My Todo App
      </h1>

      <div className="max-w-md mx-auto flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 border border-gray-300 rounded-lg p-2 outline-none focus:border-indigo-500"
        />
        <button
          onClick={addTask}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Add
        </button>
      </div>

      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-indigo-500"
        />
      </div>

      <div className="max-w-md mx-auto flex flex-col gap-3">
        {filtered.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm"
          >
            <span
              onClick={() => toggleDone(task.id)}
              className={`cursor-pointer flex-1 ${
                task.done ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-400 hover:text-red-600 ml-4 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;