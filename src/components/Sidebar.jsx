import "../styles/sidebar.css";
import AddNewTaskButton from "./AddNewTaskButton";
import DirectoryDropdown from "./DirectoryDropdown";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="title">TO-DO LIST</div>
      <AddNewTaskButton size="big" className="new-task-btn"/>
      <div className="all-tasks sidebar-option">All tasks</div>
      <div className="sidebar-option">Important tasks</div>
      <div className="sidebar-option">Completed tasks</div>
      <div className="sidebar-option">Uncompleted tasks</div>
      <DirectoryDropdown />
    </aside>
  )
}

export default Sidebar;