import { useState } from "react";
import "./Task.css";
import Checkbox from "./Checkbox.jsx";

function Task({
  name,
  description,
  progress,
  date,
  priority,
  onToggle,
  onDelete,
  onRename,
  onRenameDescription,
  onRenameDate,
  onRenamePriority
}) {
  const [titleEditMode, setTitleEditMode] = useState(false);
  const [descriptionEditMode, setDescriptionEditMode] = useState(false);
  const [dateEditMode, setDateEditMode] = useState(false);
  const [priorityEditMode, setPriorityEditMode] = useState(false);

  const handleTitleBlur = () => {
    setTitleEditMode(false);
  };

  const handleDescriptionBlur = () => {
    setDescriptionEditMode(false);
  };

  const handleDateBlur = () => {
    setDateEditMode(false);
  };

  const handlePriorityBlur = () => {
    setPriorityEditMode(false);
  };

  return (
    <div className="task">
      <Checkbox checked={progress} onClick={() => onToggle(!progress)}></Checkbox>

      {!titleEditMode && (
        <div className="task-title" onDoubleClick={() => setTitleEditMode(true)}>
          <span>{name}</span>
        </div>
      )}
      {titleEditMode && (
        <div className="task-title">
          <form
            action=""
            onSubmit={(ev) => {
              ev.preventDefault();
              setTitleEditMode(false);
            }}
          >
            <input
              type="text"
              value={name}
              onChange={(ev) => onRename(ev.target.value)}
              onBlur={handleTitleBlur}
              autoFocus // Focus the input field when entering edit mode
            />
          </form>
        </div>
      )}

      {/*!descriptionEditMode && (
        <div className="task-desc" onDoubleClick={() => setDescriptionEditMode(true)}>
          <span>{description}</span>
        </div>
      )*/}
      {/*descriptionEditMode && (
        <div className="task-desc">
          <form
            action=""
            onSubmit={(ev) => {
              ev.preventDefault();
              setDescriptionEditMode(false);
            }}
          >
            <input
              type="text"
              value={description}
              onChange={(ev) => onRenameDescription(ev.target.value)}
              onBlur={handleDescriptionBlur}
              autoFocus
            />
          </form>
        </div>
      )*/}

      {!dateEditMode && (
        <div className="task-date" onDoubleClick={() => setDateEditMode(true)}>
          <span>{date}</span>
        </div>
      )}
      {dateEditMode && (
        <div className="task-date">
          <form
            action=""
            onSubmit={(ev) => {
              ev.preventDefault();
              setDateEditMode(false);
            }}
          >
            <input
              type="date"
              value={date}
              onChange={(ev) => {
                onRenameDate(ev.target.value);
              }}
              onBlur={handleDateBlur}
              autoFocus
            />
          </form>
        </div>
      )}

      {!priorityEditMode && (
        <div className="task-priority" onDoubleClick={() => setPriorityEditMode(true)}>
          <span>{priority}</span>
        </div>
      )}
      {priorityEditMode && (
        <div className="task-priority">
          <form
            action=""
            onSubmit={(ev) => {
              ev.preventDefault();
              setPriorityEditMode(false);
            }}
          >
            <input
              type="number"
              value={priority}
              onChange={(ev) => {
                onRenamePriority(ev.target.value);
              }}
              onBlur={handlePriorityBlur}
              min="1"
              max="10"
              autoFocus
            />
          </form>
        </div>
      )}

      <button onClick={onDelete}>usuń</button>
    </div>
  );
}

export default Task;
