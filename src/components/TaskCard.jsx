import "../styles/task-card.css";
import { controlRemove } from "../redux/directoriesSlice";
import { useDispatch } from "react-redux";
import { setSelectedTaskId } from "../redux/taskListslice";
import { useState } from "react";
import { toggleTaskImportant } from "../redux/taskListslice";

function TaskCard({isFirst ,id ,title , description , completed , important , deadline}) {
  const formatDate = (dateString) => {
    const options = { month: "2-digit", day: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  const dispatch = useDispatch();
  return (
    <div className={isFirst ? "card-first" : "card"}>
      <div className="tag">Main</div>
      <div className="title-and-description">
        <h4 className={isFirst && "first-title"}>{title}</h4>
        <p className={isFirst && "first-description"}>{description}</p>
      </div>
      <div className="date">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className={completed && "first-date-icon"}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>
        <p className={isFirst && "first-date"}>{formatDate(deadline)}</p>
      </div>
      <p className="divider">------------------------------------------</p>
      <div className="carrd-bottom">
        <button className={completed ? "completed-button" : "uncompleted-button"}>
          {completed ? "completed" : "uncompleted"}
        </button>
        <div className="card-icons">

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"  class="w-6 h-6" className={important ? "important-star" : isFirst ? "first-star" : "star-icon"}
          onClick={() => {
            dispatch(toggleTaskImportant(id))
          }}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  class="w-6 h-6" className={isFirst ? "first-trash" : "trash-icon" } onClick={() => {
            dispatch(controlRemove());
            dispatch(setSelectedTaskId(id));
            }
          }>
          <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"  className={isFirst ? "first-options" : "options-icon"}><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"/></svg>

        </div>
      </div>
    </div>
  )
}

export default TaskCard;
