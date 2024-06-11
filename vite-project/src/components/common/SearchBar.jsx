import { useState } from "react";
import search from "../../assets/search.svg"
import clear from "../../assets/xmark.svg"
import { useEffect } from 'react';
import axios from '/node_modules/axios';



const SearchBar = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://backend-tan-phi.vercel.app/api')
      // .get('/api/')
      .get('https://backend-tan-phi.vercel.app/api')
      .then(({ data }) => {
        const { newBooks, salesBooks, bestsellerBooks } = data;
        const combinedBooks = [...newBooks, ...salesBooks, ...bestsellerBooks];
        // setBooks(combinedBooks);
        setFilteredBooks(combinedBooks);
        console.log(combinedBooks);
        console.log(filteredBooks.length);
      })
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord)
    const res = filteredBooks.filter(b => b && b.title ? b.title.toLowerCase().includes(searchWord) : false);

    if (searchWord === "") {
      setFilteredBooks([]);
    } else {
      setBooks(res);
    }
  };

  const clearInput = () => {
    setFilteredBooks([]);
    setWordEntered("")
  };


  return (
    <>
      <div className='flex xl:min-w-[500px] lg:min-w-[400px] md:min-w-[208px] px-4 items-center h-12 bg-main border-[1px] rounded-md border-grey cursor-pointer'>
       
        <img
          src={search}
          alt="search"
          className='flex-shrink-0 pr-[14px]'
        />

        <input
          type="text"
          placeholder='Пошук'
          className='flex-grow bg-transparent outline-none'
          onChange={handleFilter}
          value={wordEntered}
        />

        {/* close icon */}
        {wordEntered.length > 0 && (
          <img
            src={clear}
            alt="clear"
            className="flex-shrink-0"
            onClick={clearInput}
          />
        )}
      </div>

      {/* search  results  */}
      {filteredBooks.length != 0 && (
        <ul className='list px-2 absolute top-20 z-50 rounded-md shadow bg-white w-full'>
          {books.map(item => (
            <li className='my-2' key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default SearchBar
