export const AddTask = ({tasklist, setTaskList, task, setTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.id) {
            const date = new Date();
            const updatedTaskList = tasklist.map((todo) => {
                if(todo.id === task.id) {
                    return { id: todo.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`};
                } else {
                    return todo;
                }
            });
            setTaskList(updatedTaskList); // Update the task list with the modified task            
        } else {
            const date = new Date();
            const newTask = { id: date.getTime(), name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`};
            setTaskList([...tasklist, newTask]);                      
        }
        setTask({}); // Clear the task state after editing
        
    };
  return (
   <section className="addTask">
    <form onSubmit={handleSubmit}>
        <input type="text" name="task" value={task.name || ""} placeholder="Add a new task" onChange={ e => setTask({...task, name: e.target.value})} autoComplete="off" maxLength="25" />
        <button type="submit" className="addTaskButton">{task.id ? "Update" : "Add"}</button>
    </form>
   </section>
  )
}
