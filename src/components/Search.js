import React from 'react'
 

const Search = (props) => {
    return (
        <div className="searchBox">
            <input type="search" placeholder="Search Robots" onChange={props.handleChange} name="" id=""/>
        </div>
    )
}

export default Search

