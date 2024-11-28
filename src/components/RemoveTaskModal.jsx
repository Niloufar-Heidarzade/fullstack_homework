import { useState } from "react";
import "../styles/remove-task-modal.css";
import { useSelector, useDispatch } from "react-redux";
import {useRef , useEffect} from "react";
import { controlRemove } from "../redux/directoriesSlice";
import { removeTask } from "../redux/taskListslice";

function RemoveTaskModal() {
  const isOpen = useSelector((state) => state.directory.isRemoveModalOpen);
  const taskId = useSelector((state) => state.taskList.selectedTaskId);
  const modalRef = useRef(null)
  const dispatch = useDispatch();
  useEffect(() => {
    function handleClickOutside(event) {
      if(modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(controlRemove());
      }
    }
    if(isOpen) {
      document.addEventListener("mousedown" , handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown",handleClickOutside);
    }
  },[isOpen,dispatch])

  function handleClose() {
    dispatch(controlRemove());
  }
  function handleConfirm() {
    dispatch(removeTask(taskId));
    dispatch(controlRemove());
  }
  return(
    <div className={isOpen ? "remove-modal" : "no-remove-modal"} ref={modalRef}>
      <div className="first-line-remove-modal">
        <h4>Are you sure?</h4>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6" onClick={handleClose}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <p>This task will be deleted permanently.</p>
      <div className="remove-modal-btns">
        <button className="cancel-btn"onClick={handleClose}>Cancel</button>
        <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  )
}

export default RemoveTaskModal;