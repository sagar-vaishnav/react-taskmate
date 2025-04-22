import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';

import './App.css';


function App() {  
  const [tasklist, setTaskList] = useState(localStorage.getItem("tasklist") ? JSON.parse(localStorage.getItem("tasklist")) : []);  
  const [task, setTask] = useState({ id: "", name: "", time: "" });

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }
  , [tasklist]);


  return (
    <div className="App">
    <Header />
    <AddTask tasklist={tasklist} setTaskList={setTaskList} task={task} setTask={setTask} />
    <ShowTask tasklist={tasklist} setTaskList={setTaskList} task={task} setTask={setTask} />
    </div>
  );
}

export default App;
