
import CardsContainer from "./components/CardsContainer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NewModal from "./components/NewModal";
import EditModal  from "./components/EditModal";
import { useSelector } from "react-redux";
import AddTaskForm from "./components/AddTaskForm";
import RemoveTaskModal from "./components/RemoveTaskModal";
import EditTaskForm from "./components/EditTaskForm";

function App() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return(
    <>
      <Sidebar screenSize={"big"} />
      {isSidebarOpen && <Sidebar screenSize={"small"}/>}
      <div className="page-container">
        <Header />
        <CardsContainer />
      </div>
      <NewModal />
      <EditModal />
      <AddTaskForm />
      <RemoveTaskModal />
      <EditTaskForm />
    </>
  )
}

export default App;