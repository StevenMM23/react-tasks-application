import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "./context/TaskContext";
function TaskList() {
  const {tasks} = useContext(TaskContext)
  if (tasks.length === 0) {
    return <h1>No hay Tareas aun</h1>;
  }
  
  return (
    <div className="grid grid-cols-3 gap-2 ">
      {tasks.map((data) => {
        return (
          <div key={data.id} >
            <TaskCard notes={data}></TaskCard>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
