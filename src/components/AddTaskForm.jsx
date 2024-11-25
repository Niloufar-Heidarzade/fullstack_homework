import { useSelector } from "react-redux";
import "../styles/add-task-form.css";

function AddTaskForm() {
  const isOpen = useSelector((state) => state.addTaskForm.isAddTaskFormOpen)
  return(
    <div className={isOpen ? "add-task-form" : "no-add-task-form"}>
      <form>
        <h4>Add a task</h4>
        <label htmlFor="task-title">Title</label>
        <input placeholder="e.g, study for the test" id="task-title" type="text"/>
        <label htmlFor="date-input">Date</label>
        <input type="date" id="date-input" />
        <label>des</label>
      </form>
    </div>
  )
}

export default AddTaskForm;