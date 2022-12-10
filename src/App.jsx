import React, {useState, useEffect} from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { task as data, task } from "./task";
function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = function(task) { 
    setTasks([...tasks, task]);
  }

  function deleteTask(taskId) { 
    setTasks(tasks.filter((task) => task.id !== taskId ))
  }
  useEffect(() => {
    setTasks(data);
  }, []);

  
  return (
    <div>
      <TaskForm createTask = {createTask}  currentId = {tasks.length}></TaskForm>
      <TaskList task = {tasks} deleteTask={deleteTask}></TaskList>
    </div>
  );
}

export default App;
