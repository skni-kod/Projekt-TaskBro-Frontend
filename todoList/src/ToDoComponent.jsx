import React, {useState} from 'react'
import DoubleClickInput from './DoubleClickInput';
function ToDoComponent(){
    //task object [{title: "lorem" description: "lorem ipsum", startDate: date, 
    //finishDate: date, progress: 1, priority: 1, checked: 1/0}]
    const [tasks, setTasks] = useState([
        { title: "lorem", description: "lorem ipsum", startDate: new Date().toISOString().split('T')[0], finishDate: null, progress: 1, priority: 1 },
        { title: "ipsum", description: "dolores", startDate: new Date().toISOString().split('T')[0], finishDate: null, progress: 1, priority: 1 }
    ]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [progress, setProgress] = useState("");
    const [priority, setPriority] = useState("");
    const [startDate, setStartDate] = useState("");
    const [finishDate, setFinishDate] = useState("");

    


    
    
    
    
    return(
    <div className='taskContainer'> 
        
        <div className='tasks'></div>
        <button className='newTaskButton'>Add a task</button>
    </div>
    );
}
export default ToDoComponent