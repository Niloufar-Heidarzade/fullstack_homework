import { useState } from "react";
import "../styles/directory-dropdown.css";
import {useDispatch} from "react-redux";
import { controlEdit, controlNew } from "../redux/directoriesSlice";
controlEdit

function DirectoryDropdown() {
  const dispatch = useDispatch();
  const [isOpen , setIsOpen] = useState(false);
  function handleEdit() {
    dispatch(controlEdit())
  }
  function handleNewModal() {
    dispatch(controlNew());
  }
  return(
    <div className="directory-dropdown">
      <div className="directory-box" onClick={() => {setIsOpen(!isOpen)}}>
        <img src="./images/arrow.svg" />
        <p>Directories</p>
      </div>
      <div className={isOpen ? "directories" : "no-directories"}>
        <div className="activeDirectory">
          Main
          <img src="./images/edit.svg"  className="edit-icon" onClick={handleEdit}/>
          <img src="./images/trash.svg" className="trash-icon"/>
        </div>
        <div>
          Secondary
          <img src="./images/edit.svg"  className="edit-icon" onClick={handleEdit}/>
          <img src="./images/trash.svg" className="trash-icon"/>
        </div>
      </div>
      <button className="new-directory" onClick={handleNewModal}>+ New</button>
    </div>
  )
}

export default DirectoryDropdown;