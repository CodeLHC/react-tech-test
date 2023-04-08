import React, {useState} from "react";
import "../styles/search.css"
import getImages from "../requests/getImages";

function Search() {
    const [searchText, setSearchText] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        getImages(searchText)
    }
  return (
   <> <form className="search-form" onSubmit={handleSubmit}>
   <input className="search-input" type="text" onChange={(e)=> setSearchText(e.target.value)} value={searchText}/>
  <button className="search-button" type="submit">Search</button>
  </form>
  </>
  )
}

export default Search
