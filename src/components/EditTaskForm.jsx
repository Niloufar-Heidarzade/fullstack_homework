import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "../styles/edit-task-form.css";
import { useEffect, useRef, useState } from "react";
import { controlEditTaskForm } from "../redux/addTaskFormSlice";
import { editTask } from "../redux/taskListslice";

function EditTaskForm() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const isOpen = useSelector((state) => state.addTaskForm.isEditTaskFormOpen);
  const selectedTaskId = useSelector((state) => state.taskList.selectedTaskId);
  const tasks = useSelector((state) => state.taskList.allTasks);

  const taskToEdit = tasks.find((task) => task._id === selectedTaskId);
  const today = new Date().toISOString().split("T")[0];

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  const [important, setImportant] = useState(false);
  const [completed, setCompleted] = useState(false);

  
  useEffect(() => {
    if (taskToEdit) {
      setImportant(taskToEdit.important);
      setCompleted(taskToEdit.completed);

      reset({
        task: taskToEdit.title,
        description: taskToEdit.description,
        completed: taskToEdit.completed,
        important: taskToEdit.important,
        date: today,
        directory: taskToEdit.directory || "Main",
      });
    }
  }, [taskToEdit, reset, today]);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        dispatch(controlEditTaskForm());
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, dispatch]);

  const onSubmit = (values) => {
    dispatch(
      editTask({
        _id: selectedTaskId,
        title: values.task,
        description: values.description,
        completed: completed,
        important: important,
        deadline: values.date,
        directory: values.directory,
      })
    );
    reset();
    closeForm();
  };

  function closeForm() {
    reset();
    dispatch(controlEditTaskForm());
  }

  if (!taskToEdit) return null;

  return (
    <div className={isOpen ? "edit-task-form" : "no-edit-task-form"} ref={formRef}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-header">
          <h4>Edit Task</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            onClick={closeForm}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="input-and-label">
          <label htmlFor="task-title">Title</label>
          <input
            placeholder="e.g., study for the test"
            id="task-title"
            type="text"
            {...register("task", { required: "This field is required" })}
          />
          {errors.task && <span className="error-message">{errors.task.message}</span>}
        </div>
        <div className="input-and-label">
          <label htmlFor="date-input">Date</label>
          <input type="date" id="date-input" {...register("date")} />
          {errors.date && <span className="error-message">{errors.date.message}</span>}
        </div>
        <div className="input-and-label">
          <label htmlFor="task-description">Description (optional)</label>
          <textarea
            placeholder="e.g., study for the test"
            id="task-description"
            {...register("description")}
            rows={3}
          />
        </div>
        <div className="input-and-label">
          <label htmlFor="directory-selection">Select a directory</label>
          <select id="directory-selection" {...register("directory")}>
            <option>Main</option>
            <option>Secondary</option>
          </select>
        </div>
        <div className="radio-input">
          <input
            type="radio"
            id="mark-important"
            checked={important}
            onChange={() => setImportant(true)}
          />
          <label htmlFor="mark-important">Mark as important</label>
        </div>
        <div className="radio-input">
          <input
            type="radio"
            id="mark-completed"
            checked={completed}
            onChange={() => setCompleted(true)}
          />
          <label htmlFor="mark-completed">Mark as completed</label>
        </div>
        <button type="submit">Edit Task</button>
      </form>
    </div>
  );
}

export default EditTaskForm;
