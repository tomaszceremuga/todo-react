import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  return (
    <div className="mt-[10vh] bg-white w-[500px] p-10 rounded">
      <h1 className="text-3xl font-semibold">Do zrobienia</h1>
      <h3 className="text-2xl font-semibold">{tasks.length} zadania</h3>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
