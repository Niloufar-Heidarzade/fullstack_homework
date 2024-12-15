import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/cards-container.css";
import TaskCard from "./TaskCard";

function CardsContainer({ filter, sortOption }) {
  const { directoryName } = useParams();
  const tasksData = useSelector((state) => state.taskList.allTasks);
  const getFilteredTasks = () => {
    return tasksData.filter((task) => {
      const matchesDirectory = directoryName ? task.directory === directoryName : true;
      const matchesImportant = filter === "important" ? task.important : true;
      const matchesCompleted =
        filter === "completed" ? task.completed : filter === "uncompleted" ? !task.completed : true;

      return matchesDirectory && matchesImportant && matchesCompleted;
    });
  };

  const filteredTasks = getFilteredTasks();
  const sortTasks = (tasks) => {
    switch (sortOption) {
      case "added":
        return tasks.slice().sort((a, b) => a._id - b._id); 
      case "earlier":
        return tasks.slice().sort((a, b) => new Date(a.deadline) - new Date(b.deadline)); 
      case "later":
        return tasks.slice().sort((a, b) => new Date(b.deadline) - new Date(a.deadline)); 
      case "completed":
        return tasks.slice().sort((a, b) => b.completed - a.completed);
      case "uncompleted":
        return tasks.slice().sort((a, b) => a.completed - b.completed); 
      default:
        return tasks;
    }
  };

  const sortedTasks = sortTasks(filteredTasks);
  return (
    <section className="cards-container">
      <div className="cards">
        {sortedTasks.map((task, index) => (
          <TaskCard
            isFirst={index === 0}
            key={task._id}
            id={task._id}
            title={task.title}
            description={task.description}
            completed={task.completed}
            important={task.important}
            deadline={task.deadline}
            directory={task.directory}
          />
        ))}
      </div>
    </section>
  );
}

export default CardsContainer;

