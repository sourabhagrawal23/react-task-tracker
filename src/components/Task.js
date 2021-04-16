import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onClick={() => onToggle(task.id)}>
            <h3>
                {task.text} <FaTimes style={{
                    color: 'red', cursor: 'pointer'
                }} onClick={() => onDelete(task.id)}
                />
            </h3>
            <p style={{ background: "#424854" }}>{task.day}</p>
        </div>
    )
}

export default Task
