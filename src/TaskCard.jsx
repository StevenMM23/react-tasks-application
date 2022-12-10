function TaskCard({ notes: { title, id, description }, deleteTask }) {
  
 
  
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => deleteTask(id)}>Eliminar Tarea</button>
    </>
  );
}

export default TaskCard;
