import { useState } from "react";
import PropTypes from "prop-types";
const TaskItem = ({ task, completeTask, deleteTask }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleCompleteClick = () => {
    setIsCompleted(!isCompleted);
    completeTask(task.id);
  };

  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  return (
    <div style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
      <span>{task.name}</span>
      <button onClick={handleCompleteClick}>
        {isCompleted ? "Undo" : "Complete"}
      </button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
export default TaskItem;
