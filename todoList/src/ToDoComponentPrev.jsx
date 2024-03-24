import React, { useState } from 'react';
import DoubleClickInput from './DoubleClickInput';

function ToDoComponentPrev() {
    const [tasks, setTasks] = useState([
        { title: "lorem", description: "lorem ipsum", startDate: new Date().toISOString().split('T')[0], finishDate: null, progress: 1, priority: 1 },
        { title: "ipsum", description: "dolores", startDate: new Date().toISOString().split('T')[0], finishDate: null, progress: 1, priority: 1 }
    ]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [progress, setProgress] = useState();
    const [priority, setPriority] = useState();


    /*const titleSetter = (title, index) => {
        const currentTask = tasks[index];
    };
    */


    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handleProgressChange = (event) => setProgress(event.target.value);
    const handlePriorityChange = (event) => setPriority(event.target.value);

    const addTask = () => {
        const newTask = {
            title: title,
            description: description,
            startDate: new Date().toISOString().split('T')[0],
            finishDate: null,
            progress: progress,
            priority: priority
        };
        setTasks([...tasks, newTask]);
        setTitle("");
        setDescription("");
        setProgress("");
        setPriority();
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    const moveTaskUp = (index) => {
        if (index === 0) return;
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
    };

    const moveTaskDown = (index) => {
        if (index === tasks.length - 1) return;
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    };

    return (
        <div className='taskContainer'>
            <input type="text" placeholder='Enter a task' value={title} onChange={handleTitleChange} />
            <input type="text" placeholder='Description' value={description} onChange={handleDescriptionChange} />
            <input type="number" placeholder='Progress' value={progress} onChange={handleProgressChange} />
            <input type='number' placeholder='Priority' value={priority} onChange={handlePriorityChange} />
            <button className="add-button" onClick={addTask}>Add</button>

            <div className='tasks'>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index} className='task-list'>
                            <div className='title'> {task.title}</div>
                            <div className='description'>{task.description}</div>
                            <div className='startDate'>{task.startDate}</div>
                            <div className='dueDate'>{task.finishDate}</div>
                            <div className='progress'>{task.progress}</div>
                            <div className='priority'>{task.priority}</div>
                            <button className='task-button' id='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                            <button className='task-button' id='move-up-button' onClick={() => moveTaskUp(index)}>Move Up</button>
                            <button className='task-button' id='move-down-button' onClick={() => moveTaskDown(index)}>Move Down</button>
                        </li>
                    )}
                </ol>
            </div>
            <button onClick={()=>console.log(tasks)}>DEV LOG TASKS</button>
        </div>
    );
}

export default ToDoComponentPrev;
