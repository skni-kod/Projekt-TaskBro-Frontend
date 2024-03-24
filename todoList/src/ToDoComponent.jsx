import React, {useState} from 'react'
import DoubleClickInput from './DoubleClickInput';
function ToDoComponent(){
    
    const [tasks, setTasks] = useState([]); 
    //task object [{title: "lorem" description: "lorem ipsum", startDate: date, finishDate: date, progress: 1, priority: 1}]
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState(new Date().getDate());
    const [progress, setProgress] = useState(0);
    const [priority, setPriority] = useState(0);
    
    
    
    return(
    <div className='taskContainer'> 
        
        <div className='tasks'></div>
        <button className='newTaskButton'>Add a task</button>
        <DoubleClickInput></DoubleClickInput>
    </div>
    );
}
export default ToDoComponent