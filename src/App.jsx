import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardsContainer from "./components/CardsContainer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NewModal from "./components/NewModal";
import EditModal  from "./components/EditModal";
import { useSelector } from "react-redux";
import AddTaskForm from "./components/AddTaskForm";
import RemoveTaskModal from "./components/RemoveTaskModal";
import EditTaskForm from "./components/EditTaskForm";
import { useState } from "react";

function App() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const [sortOption, setSortOption] = useState("");
  const handleSortChange = (option) => {
    setSortOption(option); 
  };

  return(
    <Router>
      <Sidebar screenSize={"big"} />
      {isSidebarOpen && <Sidebar screenSize={"small"} />}
      <div className="page-container">
        <Header onSortChange={handleSortChange}/>
        <Routes>
          <Route path="/" element={<CardsContainer sortOption={sortOption}/>} /> 
          <Route path="/important" element={<CardsContainer filter="important" sortOption={sortOption}/>} /> 
          <Route path="/completed" element={<CardsContainer filter="completed" sortOption={sortOption}/>} /> 
          <Route path="/uncompleted" element={<CardsContainer filter="uncompleted" sortOption={sortOption}/>} /> 
          <Route path="/dir/:directoryName" element={<CardsContainer sortOption={sortOption}/>} /> 
        </Routes>
      </div>
      <NewModal />
      <EditModal />
      <AddTaskForm />
      <RemoveTaskModal />
      <EditTaskForm />
    </Router>
  )
}

export default App;