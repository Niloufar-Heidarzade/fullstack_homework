import "../styles/today-date.css";

function TodayDate() {
    const today = new Date();
    const year = today.getFullYear(); 
    const month = today.toLocaleString("en-US", { month: "short" }); 
    const day = today.getDate(); 
    const formattedDate = `${year}, ${month} ${day}`;

  return (
    <p className="today-date">{formattedDate}</p>
  )

}

export default TodayDate;