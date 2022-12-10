import { useEffect, useState } from "react";

function TaskForm({ createTask, currentId }) {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  //Capturar en el componente los cambios del Input
  const captureTitle = ({ target: { value } }) => {
    setTitle(value);
  };

  const captureTextArea = ({ target: { value } }) => {
    setdescription(value);
  };

  //Hacer que el form no haga refesh
  const HandleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: currentId,
      title,
      description,
    };
    createTask(newTask);
    setTitle("")
    setdescription("")
  };
  useEffect(() => {
    console.log("Render");
  }, []);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Escribe tu Tarea"
          onChange={captureTitle}
          value={title}
          autoFocus
        />
        <textarea style={{display: "flex"}}
          placeholder="Escribe la descripcion de la tarea"
          cols="30"
          rows="10"
          onChange={captureTextArea}
          value={description}
        ></textarea>

        <button onClick={HandleSubmit}>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
