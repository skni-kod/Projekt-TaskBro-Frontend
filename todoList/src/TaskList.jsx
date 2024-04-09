import Header from "./Header.jsx";
    import ToDoComponent from "./ToDoComponent.jsx";
    import ToDoComponentPrev from "./ToDoComponentPrev.jsx";
    import TaskAddForm from "./TaskAddForm.jsx"
    import Task from "./Task.jsx";
    import { useEffect, useState } from "react";
export default function TaskList(){

    
    
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
        setTasks(prev => {
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().split('T')[0];
            return [...prev, {name: name, description: "empty", done: false, date: formattedDate, priority:1}];
         });
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
      function renameDescription(index,newDescription) {
        setTasks(prev =>{
          const newTasks =[...prev];
          newTasks[index].description = newDescription;
          return newTasks;
        })
      }
      function renameDate(index,newDate) {
        setTasks(prev =>{
          const newTasks =[...prev];
          newTasks[index].date = newDate;
          return newTasks;
        })
      }
      function renamePriority(index,newPriority){
        setTasks(prev =>{
            const newTasks =[...prev];
            newTasks[index].priority = newPriority;
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
            onDelete={() => removeTask(index)}
            onRenameDescription={newDescription => renameDescription(index,newDescription)}
            onRenameDate={newDate=> renameDate(index,newDate)}
            onRenamePriority={newPriority=> renamePriority(index, newPriority)}
            >
            
            </Task>
          ))}
        </main>
       
        
        );
    }
