import { useState } from 'react';
import { useGetNewBestsellersSalesBooks } from '../../redux/booksSlice'
import BookCard from '../../components/product/BookCard'
import DropDownCatalogSort from '../../components/dropDownCatalogSort';

const Cataloglist = () => {
    const { data, error, isLoading } = useGetNewBestsellersSalesBooks();
    const [sortedBooks, setSortedBooks] = useState([]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading books</div>;


    // не працює поки дублюються книги
    // const allBooks = [
    //     ...(data.newBooks || []),
    //     ...(data.salesBooks || []),
    //     ...(data.bestsellerBooks || [])
    // ];

    return (
        <section className='my-4'>
            <DropDownCatalogSort books={data.newBooks} onSort={setSortedBooks} />
            <ul className='grid grid-cols-1 gap-4'>
                {(sortedBooks.length > 0 ? sortedBooks : data.newBooks).map(book => (
                    <BookCard key={book._id} book={book} />
                ))}
            </ul>
        </section>
    )
}

export default Cataloglist;
