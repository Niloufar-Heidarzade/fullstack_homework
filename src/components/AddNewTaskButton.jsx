import "../styles/add-new-task-button.css";

function AddNewTaskButton({size}) {
  return (
    <button className="new-task-button" style={{ width: size === "big" ? "230px" : "medium" ? "160px"  : "100px" }}>Add new task</button>
  )
}

export default AddNewTaskButton;