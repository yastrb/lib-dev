import { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://backend-git-dev-bibliotekas-projects.vercel.app/');
        setBooks(response.data.newBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    console.log(books);
  }, [books]);

  return null;
};

export default BookList;
