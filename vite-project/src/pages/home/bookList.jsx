import { useEffect, useState } from 'react';
import axios from '/node_modules/axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const response = await axios.get('/api/');
  //       setBooks(response.data.newBooks);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err);
  //       setLoading(false);
  //     }
  //   };

  //   fetchBooks();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error fetching books</div>;

  // console.log(books);

  // return null;

  useEffect(()=> {
    axios.get('/api/')
    .then(response => {
      setBooks(response.data.newBooks);
      setLoading(false);
    })
    .catch(error=> {
      setError(error)
      setLoading(false)
    });
  },[]);
  
  if (loading) return <div>loading</div> ;
  if(error) return <div> error</div>;

  return (
    <div className='my-4'>
      <h1>Books:</h1>
      <ul className='my-4'>
        {books.map(item => (
          <li className='my-2' key={item.id}>{item.title}</li>
        ) )}
      </ul>
    </div>
  )


};

export default BookList;
