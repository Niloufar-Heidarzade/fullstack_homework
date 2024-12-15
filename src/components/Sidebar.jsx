import { useDispatch, useSelector } from "react-redux";
import "../styles/sidebar.css";
import AddNewTaskButton from "./AddNewTaskButton";
import DirectoryDropdown from "./DirectoryDropdown";
import { useEffect, useRef } from "react";
import { controlSidebar } from "../redux/sidebarSlice";
import { Link , useLocation} from "react-router-dom";

function Sidebar({screenSize}) {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  const sidebarRef = useRef(null);
  const location = useLocation();

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
      <Link to="/" className={`sidebar-option ${location.pathname === '/' ? 'active-option' : ''}`}>All tasks</Link>
      <Link to="/important" className={`sidebar-option ${location.pathname === '/important' ? 'active-option' : ''}`}>Important tasks</Link>
      <Link to="/completed" className={`sidebar-option ${location.pathname === '/completed' ? 'active-option' : ''}`}>Completed tasks</Link>
      <Link to="/uncompleted" className={`sidebar-option ${location.pathname === '/uncompleted' ? 'active-option' : ''}`}>Uncompleted tasks</Link>
      <DirectoryDropdown size={screenSize === "small" ? "small" : "big"}/>
    </aside>
  )
}

export default Sidebar;