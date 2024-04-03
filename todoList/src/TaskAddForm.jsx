import {useState} from "react";

export default function TaskAddForm({onAdd}){
    const [taskTitle, setTaskTitle] = useState('');
    function handleSubmit(ev){

        ev.preventDefault();
        if(taskTitle.length === 0) return;
        onAdd(taskTitle);
        setTaskTitle('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <button>+</button>
            <input type="text" 
                placeholder="New Task" 
                value={taskTitle} 
                onChange={ev=>setTaskTitle(ev.target.value)}/>
        </form>
    )
}
