import "../styles/search-bar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/taskListSlice";



function SearchBar({size}) {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  
  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    dispatch(setSearchQuery(searchQuery)); // Update the search query in Redux or local state
  };
  return(
    <div className={size === "small" ? "search-task-bar" : "search-task-bar big-search-task-bar"} tabindex="0">
      <input 
      type="text" 
      placeholder="Search task" 
      className="search-task-input"
      value={query}
      onChange={handleSearch}
      />
      <img src="./images/search.svg" className="search-task-svg"/>
    </div>
  )
}

export default SearchBar;