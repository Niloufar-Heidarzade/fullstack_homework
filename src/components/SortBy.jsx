import { useState } from "react";
import "../styles/sort-by.css";

function SortBy({ onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSort = (option) => {
    onSortChange(option);  
    setIsOpen(false);  
  };

  return (
    <div className="dropdown">
      <div
        className={isOpen ? "dropdown-box-open" : "dropdown-box"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="sort-by">Sort by</p>
        <img src="./images/arrow.svg" className="arrow-icon" />
      </div>
      <div className={isOpen ? "options" : "options-closed"}>
        <div onClick={() => handleSort("added")}>Order added</div>
        <div onClick={() => handleSort("earlier")}>Earlier first</div>
        <div onClick={() => handleSort("later")}>Later first</div>
        <div onClick={() => handleSort("completed")}>Completed first</div>
        <div onClick={() => handleSort("uncompleted")}>Uncompleted first</div>
      </div>
    </div>
  );
}

export default SortBy;
