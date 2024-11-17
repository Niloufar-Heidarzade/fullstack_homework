
import CardsContainer from "./components/CardsContainer";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import NewModal from "./components/NewModal";
import EditModal  from "./components/EditModal";

function App() {
  return(
    <>
      <Sidebar />
      <Header />
      <CardsContainer />
      <NewModal />
      <EditModal />
    </>
  )
}

export default App;