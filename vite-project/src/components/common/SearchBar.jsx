import React from 'react'
import search from "../../assets/search.svg"

const SearchBar = () => {
  return (
    <div className=' hidden mx-12 px-4 md:flex md:items-center w-[208px] h-12 bg-main border-[1px] rounded-md border-grey'>
        <img src={search} alt="search" />
        <input type="text" className=' bg-transparent outline-none' />
    </div>
  )
}

export default SearchBar