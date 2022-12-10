import React from "react";
import TaskCard from "./TaskCard";
function TaskList({ task, deleteTask}) {
  if (task.length === 0) {
    return <h1>No hay Tareas aun</h1>;
  }
  
  return (
    <div>
      {task.map((data) => {
        return (
          <div key={data.id}>
            <TaskCard notes={data} deleteTask={deleteTask}></TaskCard>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
