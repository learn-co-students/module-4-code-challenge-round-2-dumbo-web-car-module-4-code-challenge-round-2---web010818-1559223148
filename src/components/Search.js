import React from 'react'

const Search = (props) => {
  return (
    <div onChange={(event)=> props.handleChange(event)} className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
