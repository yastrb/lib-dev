import { useGetNewBestsellersSalesBooks } from '../../redux/booksSlice'
import BookCard from '../product/BookCard'

const New = () => {
    const { data, error, isLoading } = useGetNewBestsellersSalesBooks()
    
    console.log('Data:', data)

    const filteredBooks = data?.newBooks?.filter(book => book && book._id) || [];

    return (
        <section className='my-4'>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {filteredBooks.length > 0 ? (
                <ul className='new-list grid grid-cols-3 gap-4'>
                    {filteredBooks.map(book => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </ul>
            ) : (
                !isLoading && !error && <p>No new books available</p>
            )}
        </section>
    )
}

export default New
