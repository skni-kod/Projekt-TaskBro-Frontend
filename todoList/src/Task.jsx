
import { useState } from "react";
import "./Task.css"
import Checkbox from "./Checkbox.jsx";
function Task({name,description,progress,date,priority,onToggle,onDelete,onRename,onRenameDescription,onRenameDate,onRenamePriority}){
    const [titleEditMode, setTitleEditMode] = useState(false);
    const [descriptionEditMode, setDescriptionEditMode] = useState(false);
    const [dateEditMode, setDateEditMode] = useState(false);
    const [priorityEditMode, setPriorityEditMode] = useState(false);
    return(
        <div className="task">
            <Checkbox checked={progress} onClick={()=>onToggle(!progress)}></Checkbox>

            {!titleEditMode && (
                <div className="task-desc" onDoubleClick={() => setTitleEditMode(prev => !prev)}>
                    <span>
                        {name}
                    </span>
                </div> 

            )}
            {titleEditMode && (
                <div className="task-desc">
                    <form action="" onSubmit={ev=>{ev.preventDefault();setTitleEditMode(false)}}>
                    <input type="text" value={name} 
                    onChange={ev => onRename(ev.target.value)}/>
                    </form>
                </div>
                
            )}

            {!descriptionEditMode && (
                <div className="task-desc" onDoubleClick={() => setDescriptionEditMode(prev => !prev)}>
                    <span>
                        {description}
                    </span>
                </div> 

            )}
            {descriptionEditMode && (
                <div className="task-desc">
                    <form action="" onSubmit={ev=>{ev.preventDefault();setDescriptionEditMode(false)}}>
                        <input type="text" value={description} 
                            onChange={ev => onRenameDescription(ev.target.value)}/>
                    </form>
                </div>
                
            )}
            {!dateEditMode && (
                <div className="task-desc" onDoubleClick={() => setDateEditMode(prev => !prev)}>
                    <span>
                        {date}
                    </span>
                </div> 

            )}
            {dateEditMode && (
                <div className="task-desc">
                    <form action="" onSubmit={ev=>{ev.preventDefault();setDateEditMode(false)}}>
                        <input type="date" value={date} 
                            onChange={ev => {onRenameDate(ev.target.value)}}/>
                    </form>
                </div>
                
            )}
            {!priorityEditMode && (
                <div className="task-desc" onDoubleClick={() => setPriorityEditMode(prev => !prev)}>
                    <span>
                        {priority}
                    </span>
                </div> 

            )}
            {priorityEditMode && (
                <div className="task-desc">
                    <form action="" onSubmit={ev=>{ev.preventDefault();setPriorityEditMode(false)}}>
                        <input type="number" value={priority} 
                            onChange={ev => {onRenamePriority(ev.target.value);}}
                            min="1" max="10"
                            />
                    </form>
                </div>
                
            )}     
            

            <button onClick={onDelete}>usuń</button>
        </div>

    )
}
export default Task;