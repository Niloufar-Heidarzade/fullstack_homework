import "../styles/tasks-number.css";
import data from "../assets/data/sample-data.json";

function TasksNumber() {
  const tasksCount = data.tasks.length;
  return(
    <p className="tasks-number">All tasks ({tasksCount} tasks)</p>
  )
}

export default TasksNumber;