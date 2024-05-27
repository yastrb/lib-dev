import React from 'react'
import search from "../../assets/search.svg"

const SearchBar = () => {
  return (
    <div className='flex lg:w-[588] md:mx-12 px-4 items-center h-12 bg-main border-[1px] rounded-md border-grey'>
        <img src={search} alt="search"  className=' pr-[14px]' />
        <input type="text" placeholder='Пошук' className=' bg-transparent outline-none' />
    </div>
  )
}

export default SearchBar