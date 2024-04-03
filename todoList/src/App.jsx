
import Header from "./Header.jsx";
import ToDoComponent from "./ToDoComponent.jsx";
import ToDoComponentPrev from "./ToDoComponentPrev.jsx";
import TaskAddForm from "./TaskAddForm.jsx"
import Task from "./Task.jsx";
import { useEffect, useState } from "react";
function App() {

  const [tasks,setTasks] = useState([])



  useEffect(()=>{
    if(tasks.length ===0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks);
  },[tasks]);
  useEffect(()=>{
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks);

  },[]);
  function addTask(name){
    setTasks(prev=>{
      return [...prev,{name:name,done:false}];
    })
  }

  function updateTaskDone(taskIndex, newDone){
    setTasks(prev=>{
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    })}
    
  function removeTask(indexForRemoval){
    setTasks(prev=>{
      return prev.filter((taskObject,index) => index !== indexForRemoval);
    })
  }
  function renameTask(index,newName) {
    setTasks(prev =>{
      const newTasks =[...prev];
      newTasks[index].name = newName;
      return newTasks;
    })
  }
  return(
    <main>
      <Header></Header>
      <TaskAddForm onAdd={name=> addTask(name)}></TaskAddForm>
      {tasks.map((task, index) => (
        <Task {...task} 
        onRename={newName => renameTask(index,newName)}
        onToggle={done => updateTaskDone(index,done)}
        onDelete={() => removeTask(index)}>
        </Task>
      ))}
    </main>
   
    
    );
}

export default App;
