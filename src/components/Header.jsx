import "../styles/header.css";
import AddNewTaskButton from "./AddNewTaskButton";
import SearchBar from "./SearchBar";
import TodayDate from "./TodayDate";
import TasksNumber from "./TasksNumber";
import ShowInRows from "./ShowInRows";
import ShowInCards from "./ShowInCards";
import SortBy from "./SortBy";

function Header() {
  return (
    <header>
      <div className="header-first-line">
        <SearchBar />
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