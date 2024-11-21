import { useDispatch, useSelector } from "react-redux";
import "../styles/sidebar.css";
import AddNewTaskButton from "./AddNewTaskButton";
import DirectoryDropdown from "./DirectoryDropdown";
import { useEffect, useRef } from "react";
import { controlSidebar } from "../redux/sidebarSlice";


function Sidebar({screenSize}) {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  const sidebarRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if(sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        dispatch(controlSidebar());
      };
    }
    if(isSidebarOpen && screenSize === "small") {
      document.addEventListener("mousedown" , handleClickOutside);
    } 
    return () => {
      document.removeEventListener("mousedown" , handleClickOutside);
    }
  },[isSidebarOpen,dispatch]);
  return (
    <aside className={screenSize === "small" ? "small-sidebar" : "sidebar"} ref={sidebarRef} >
      <div className="title">TO-DO LIST</div>
      <AddNewTaskButton size={screenSize === "small" ? "medium" : "big"}/>
      <div className="all-tasks sidebar-option">All tasks</div>
      <div className="sidebar-option">Important tasks</div>
      <div className="sidebar-option">Completed tasks</div>
      <div className="sidebar-option">Uncompleted tasks</div>
      <DirectoryDropdown size={screenSize === "small" ? "small" : "big"}/>
    </aside>
  )
}

export default Sidebar;