import { useDispatch, useSelector } from "react-redux";
import "../styles/new-modal.css";
import { useEffect, useRef } from "react";
import { controlNew , addDirectory} from "../redux/directoriesSlice";

function NewModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.directory.isNewModalOpen);
  const modalRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if(modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(controlNew());
      }
    }
    if(isModalOpen) {
      document.addEventListener("mousedown" , handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown" , handleClickOutside);
    }
  },[isModalOpen , dispatch]);

  function handleCloseModal() {
    dispatch(controlNew());
  }
  function handleCreate() {
    const directoryName = document.getElementById("directoryName").value.trim();
    if (directoryName) {
      dispatch(addDirectory(directoryName));
      document.getElementById("directoryName").value = ""; 
      dispatch(controlNew());
    } else {
      alert("Directory name cannot be empty!");
    }
  }

  return  (
    <div className={isModalOpen ? "new-modal" : "no-new-modal"} ref={modalRef}>
      <div className="first-line">
        <h3>Create new directory</h3>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6" onClick={handleCloseModal}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div className="second-line">
        <label for="directoryName">Title</label>
        <input type="text" placeholder="Enter a directory name" id="directoryName"/>
      </div>
      <button onClick={handleCreate}>Create</button>
    </div>
  )
}

export default NewModal;