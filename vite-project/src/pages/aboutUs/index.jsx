
import { useQuery } from 'react-query';

const fetchBooks = async () => {
  const response = await fetch('https://backend-git-dev-bibliotekas-projects.vercel.app/');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const BookList = () => {
  const { data: books, isLoading, isError } = useQuery('books', fetchBooks);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching books</div>;

  console.log(books);

  return null;
};

export default BookList;
