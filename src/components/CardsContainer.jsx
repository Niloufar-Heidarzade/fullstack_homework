import { useSelector } from "react-redux";
import "../styles/cards-container.css";
import TaskCard from "./TaskCard";

function CardsContainer() {

  const tasksData = useSelector((state) => state.taskList.allTasks);

  return(
    <section className="cards-container">
      <div className="cards">
      {tasksData.map((task , index) => {
        return(
          <TaskCard isFirst={index === 0} key={task._id} title={task.title} description={task.description}  completed={task.completed} important={task.important} deadline={task.deadline}/>
        )
      })}
      </div>
    </section>
  )
}

export default CardsContainer;