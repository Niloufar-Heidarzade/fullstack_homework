import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "../styles/add-task-form.css";
import { useEffect, useRef, useState } from "react";
import { controlAddTaskForm } from "../redux/addTaskFormSlice";
import { controlEdit } from "../redux/directoriesSlice";

function AddTaskForm() {
  const [important , setImportant] = useState(false);
  const [completed , setCompleted] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const isOpen = useSelector((state) => state.addTaskForm.isAddTaskFormOpen);
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    defaultValues:{
      date: today,
    }
  });
  const onSubmit = (values) => {
    console.log(values);
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if(formRef.current && !formRef.current.contains(event.target)) {
        dispatch(controlAddTaskForm());
      }
    }
    if(isOpen) {
      document.addEventListener("mousedown" , handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown" , handleClickOutside);
    }
  },[isOpen, dispatch])
  function closeForm() {
    dispatch(controlAddTaskForm());
  }
  return(
    <div className={isOpen ? "add-task-form" : "no-add-task-form"} ref={formRef}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-header">
          <h4>Add a task</h4>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={closeForm}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="input-and-label">
          <label htmlFor="task-title">Title</label>
          <input placeholder="e.g, study for the test" id="task-title" type="text" {...register("task" , {required : "This field is required"})}/>
        </div>
        <div className="input-and-label">
          <label htmlFor="date-input">Date</label>
          <input type="date" id="date-input" {...register("date")}/>
        </div>
        <div className="input-and-label">
          <label htmlFor="task-description">Description (optional)</label>
          <textarea type="text" placeholder="e.g, study for the test" id="task-description" {...register("description")} rows={3}/>
        </div>
        <div className="input-and-label">
          <label htmlFor="directory-selection">Select a directory</label>
          <select id="directory-selection" {...register("directory")}>
            <option>Main</option>
            <option>Secondary</option>
          </select>
        </div>
        <div className="radio-input">
          <input type="radio" id="mark-important" {...register("importance-status")} checked={important ? true : false} onClick={() => setImportant(!important)}/>
          <label htmlFor="mark-important">Mark as important</label>
        </div>
        <div className="radio-input">
          <input type="radio" id="mark-completed" {...register("completed-status")} checked={completed ? true : false} onClick={() => setCompleted(!completed)}/>
          <label htmlFor="mark-completed">Mark as completed</label>
        </div>
        <button type="submit" onClick={() => {
          closeForm();
        }}>Add a task</button>
      </form>
    </div>
  )
}

export default AddTaskForm;