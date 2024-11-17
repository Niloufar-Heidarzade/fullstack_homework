import { useState } from "react";
import "../styles/sort-by.css";

function SortBy() {
  const [isOpen , setIsOpen] = useState(false);
  return(
   <div className="dropdown">
    <div className={isOpen ? "dropdown-box-open" : "dropdown-box"} onClick={() => setIsOpen(!isOpen)}>
      <p className="sort-by">Sort by</p>
      <img src="./images/arrow.svg" className="arrow-icon"/>
    </div>
    <div className={isOpen ? "options" : "options-closed"}>
      <div>Sort by</div>
      <div>Order added</div>
      <div>Earlier first</div>
      <div>Later first</div>
      <div>Completetd first</div>
      <div>Uncompleted first</div>
    </div>
   </div>
  )
}

export default SortBy;