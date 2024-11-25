import { useDispatch } from "react-redux";
import "../styles/add-new-task-button.css";
import { controlAddTaskForm } from "../redux/addTaskFormSlice";

function AddNewTaskButton({size}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(controlAddTaskForm());
  }
  return (
    <button className="new-task-button" style={{ width: size === "big" ? "230px" : "medium" ? "160px"  : "100px" }} onClick={handleClick}>Add new task</button>
  )
}

export default AddNewTaskButton;