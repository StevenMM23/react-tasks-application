import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  return (
    <div className="bg-zinc-900 h-screen p-4">
      <div className="container mx-auto">
        <h1 class=" text-center mb-4 text-3xl font-extrabold text-white dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Tasks
          </span>{" "}
          Notes.
        </h1>
        
        <TaskForm></TaskForm>
        <TaskList></TaskList>
      </div>
    </div>
  );
}

export default App;
