import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/common/SearchBar';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get('/api/')
  //     .then(({ data }) => {
  //       const { newBooks, salesBooks, bestsellerBooks } = data;
  //       const combinedBooks = [...newBooks, ...salesBooks, ...bestsellerBooks];
  //       setBooks(combinedBooks);
  //       setFilteredBooks(combinedBooks);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);
  useEffect(()=> {
    axios.get('/api/')
    .then(response => {
      setFilteredBooks(response.data.newBooks)
      setLoading(false);
      console.log(response.data.newBooks)
    })
    .catch(error=> {
      setError(error)
      setLoading(false)
    });
  },[]);

  const handleFilter = (event) => {
    const res = filteredBooks.filter(b => b && b.title ? b.title.toLowerCase().includes(event.target.value) : false);
    setBooks(res);
  };

  if (loading) return <div>Завантаження книг...</div>;
  if (error) return <div>Помилка при завантаженні книг: {error.message}</div>; 

  return (
    <div className='my-4'>
      <h1>Книги:</h1>
      <SearchBar onChange={handleFilter} />  
        <ul className='my-4'>
          {books.map(item => (
            <li className='my-2' key={item.id}>{item.title}</li>
          ))}
        </ul>
      
    </div>
  );
};

export default BookList;
