import "../styles/cards-container.css";
import data from "../assets/data/sample-data.json";
import TaskCard from "./TaskCard";

function CardsContainer() {

  const taskData = data.tasks;

  return(
    <section className="cards-container">
      <div className="cards">
      {taskData.map((task , index) => {
        return(
          <TaskCard isFirst={index === 0} key={task.id} title={task.title} description={task.description}  completed={task.completed} important={task.important} deadline={task.deadline}/>
        )
      })}
      </div>
    </section>
  )
}

export default CardsContainer;