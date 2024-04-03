
import { useState } from "react";
import Checkbox from "./checkbox.jsx";
function Task({name,done,onToggle,onDelete,onRename}){
    const [editMode, setEditMode] = useState(false);
    return(
        <div className="task">
            <Checkbox checked={done} onClick={()=>onToggle(!done)}></Checkbox>

            {!editMode && (
                <div className="task-title" onDoubleClick={() => setEditMode(prev => !prev)}>
                    <span>
                        {name}
                    </span>
                </div> 

            )}
            {editMode && (
                <form action="" onSubmit={ev=>{ev.preventDefault();setEditMode(false)}}>
                    <input type="text" value={name} 
                    onChange={ev => onRename(ev.target.value)}/>
                </form>
            )}
            

            <button onClick={onDelete}>usuń</button>
        </div>

    )
}
export default Task;