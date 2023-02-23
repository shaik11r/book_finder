import React, { useState } from 'react'
import { useGlobalContext } from './context'

function SearchForm() {
    const {setQuery}=useGlobalContext();
    const [inputVal,setInputval]=useState("");
    const handleinput=(e)=>{
        setInputval(e.target.value)
    }
    const handleSearch=(e)=>{
        e.preventDefault();
        if(inputVal.trim()===""){
            <div>
                <h2>enter something</h2>
            </div>
        }
        else{
            setQuery(inputVal);
        }
    }
  return (
    <form className='search-form' onSubmit={handleSearch}>
        <h2>Search books</h2>
        <input
        text="text"
        className='form-input'
        value={inputVal}
        onChange={handleinput}></input>
        <button className='button-v' type="submit">
        Search
        </button>
    </form>
  )
}

export default SearchForm