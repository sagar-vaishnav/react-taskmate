export const ShowTask = ({tasklist, setTaskList, task, setTask}) => {   
    const handleEdit = (id) => {
        const selectedTask = tasklist.find((todo) => todo.id === id);        
        setTask(selectedTask); // Set the selected task to the state for editing        
    }
    const handleDelete = (id) => {
        const updatedTaskList = tasklist.filter((todo) => todo.id !== id); // Filter out the task to be deleted
        setTaskList(updatedTaskList); // Update the task list state        
    }

  return (
   <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{tasklist.length}</span>
            </div>
            <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
        </div>
        <ul>
           { tasklist.map((todo) => (
                <li key={todo.id}>
                    <p>
                        <span className="name"> {todo.name} </span>
                        <span className="time"> {todo.time}</span>                    
                    </p>
                    <i className="bi bi-pencil-square" onClick={()=> handleEdit(todo.id)}></i>
                    <i className="bi bi-trash" onClick={()=> handleDelete(todo.id)}></i>
                </li>
            ))
            }
        </ul>
   </section>
  )
}
