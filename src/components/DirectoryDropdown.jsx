import { useState } from "react";
import "../styles/directory-dropdown.css";
import {useDispatch, useSelector} from "react-redux";
import { controlEdit, controlNew, removeDirectory } from "../redux/directoriesSlice";
import { Link , useLocation} from "react-router-dom"; 

function DirectoryDropdown({size}) {
  
  const directoriesList = useSelector((state) => state.directory.directories);
  const dispatch = useDispatch();
  const [isOpen , setIsOpen] = useState(false);
  const [activeDirectory , setActiveDirectory] = useState(0);
  const location = useLocation();

  function handleEdit(index) {
    dispatch(controlEdit(index))
  }
  function handleNewModal() {
    dispatch(controlNew());
  }
  function handleRemove(index){
    dispatch(removeDirectory(index));
  }

  return(
    <div className={size === "small" ? "directory-dropdown small-directory-dropdown" : "directory-dropdown"}>
      <div className="directory-box" onClick={() => {setIsOpen(!isOpen)}}>
        <img src="./images/arrow.svg" />
        <p>Directories</p>
      </div>
      <div className={isOpen ? size === "small" ? "small-directories" : "directories" : "no-directories"}>
        {directoriesList.map((dir , index) => {
          return (
            <Link to={`/dir/${dir.name}`} className="link">
            <div 
            className={location.pathname === `/dir/${dir.name}` ? "activeDirectory" : ""}
            onClick = {() => {
              setActiveDirectory(index);
            }}
            >
              {dir.name}
              <img src="./images/edit.svg"  className="edit-icon" onClick={() => handleEdit(index)}/>
              <img src="./images/trash.svg" className="trash-icon" onClick={() => handleRemove(index)}/>
            </div>
            </Link>
          )
        })}
      </div>
      <button className="new-directory" onClick={handleNewModal}>+ New</button>
    </div>
  )
}

export default DirectoryDropdown;