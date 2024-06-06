import { useState } from "react";
import search from "../../assets/search.svg"
import clear from "../../assets/xmark.svg"



const SearchBar = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='flex xl:min-w-[500px] lg:min-w-[400px] md:min-w-[208px] px-4 items-center h-12 bg-main border-[1px] rounded-md border-grey cursor-pointer'>
      <img 
      src={search} 
      alt="search" 
      className='flex-shrink-0 pr-[14px]' />
      <input
        type="text"
        placeholder='Пошук'
        className='flex-grow bg-transparent outline-none'
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm} />
      {searchTerm && (
        <img
          src={clear}
          alt="clear"
          className=" flex-shrink-0"
          onClick={() => {
            setSearchTerm('');
          }}
        />
      )}
    </div>
  )
}

export default SearchBar
