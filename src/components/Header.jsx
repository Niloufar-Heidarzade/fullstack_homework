import "../styles/header.css";
import AddNewTaskButton from "./AddNewTaskButton";
import SearchBar from "./SearchBar";
import TodayDate from "./TodayDate";
import TasksNumber from "./TasksNumber";
import ShowInRows from "./ShowInRows";
import ShowInCards from "./ShowInCards";
import SortBy from "./SortBy";
import { useSelector , useDispatch} from "react-redux";
import {controlSidebar} from "../redux/sidebarSlice.js";

function Header() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen)
  const dispatch = useDispatch();
  function openSidebar() {
    dispatch(controlSidebar())
  }
  return (
    <header>
      <div className="header-first-line">
        <div className="menuAndSearch">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(40 , 40 , 40)" class="w-6 h-6" className="menu-icon" onClick={() => openSidebar()}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
          <SearchBar />
        </div>
        <TodayDate />
        <AddNewTaskButton size="small" />
      </div>
      <TasksNumber className="number-of-tasks"/>
      <div className="header-second-line">
        <div className="header-icons">
          <ShowInRows />
          <ShowInCards />
        </div>
        <SortBy className="sort-dropdown"/>
      </div>
    </header>
  )
}

export default Header;