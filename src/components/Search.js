import React, {useState} from "react";
import "../styles/search.css"

function Search() {
    const [searchText, setSearchText] = useState("")
  return (
   <> <form className="search-form">
   <input className="search-input" type="text" onChange={(e)=> setSearchText(e.target.value)} value={searchText}/>
  <button className="search-button" type="submit">Search</button>
  </form>
  </>
  )
}

export default Search
