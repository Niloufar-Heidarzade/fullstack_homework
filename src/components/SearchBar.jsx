import "../styles/search-bar.css";

function SearchBar({size}) {
  return(
    <div className={size === "small" ? "search-task-bar" : "search-task-bar big-search-task-bar"} tabindex="0">
      <input type="text" placeholder="Search task" className="search-task-input"/>
      <img src="./images/search.svg" className="search-task-svg"/>
    </div>
  )
}

export default SearchBar;