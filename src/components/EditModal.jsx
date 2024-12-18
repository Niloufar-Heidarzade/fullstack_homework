import { controlEdit } from "../redux/directoriesSlice";
import "../styles/edit-modal.css";
import { useSelector, useDispatch} from "react-redux";
import {useRef , useEffect} from "react";
import { useState } from "react";
import { updateDirectory } from "../redux/directoriesSlice";

function EditModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.directory.isEditModalOpen);
  const modalRef = useRef(null);
  const editingIndex = useSelector((state) => state.directory.editingIndex);
  const directories = useSelector((state) => state.directory.directories);
  const [editingName, setEditingName] = useState("");

  useEffect(() => {
    if (isModalOpen && editingIndex !== null) {
      setEditingName(directories[editingIndex].name);
    }
  }, [isModalOpen, editingIndex, directories]);
  useEffect(() => {
    function handleClickOutside(event) {
      if(modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(controlEdit());
      }
    }
    if(isModalOpen) {
      document.addEventListener("mousedown" , handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown",handleClickOutside);
    }
  },[isModalOpen,dispatch])


  function handleSave() {
    if (editingName.trim() === "") return; 
    dispatch(updateDirectory({ index: editingIndex, newName: editingName }));
    dispatch(controlEdit()); 
  }
  function handleClose() {
    dispatch(controlEdit());
  }

  return(
    <div className={isModalOpen ? "edit-modal" : "no-edit-modal"} ref={modalRef}>
      <div className="first-line">
        <h3>Edit directory name</h3>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6" onClick={handleClose}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div className="second-line">
        <label htmlFor="directory">Title</label>
        <input 
        type="text"
        placeholder="Edit directory name"
        id="directory"
        value={editingName}
        onChange={(e) => setEditingName(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Edit</button>
    </div>
  )
}

export default EditModal;