import { useGetNewBestsellersSalesBooks } from '../../redux/booksSlice'
import BookCard from '../../components/product/BookCard'

const Cataloglist = () => {
    const { data, error, isLoading } = useGetNewBestsellersSalesBooks()

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error loading books</div>

    const allBooks = [
        ...(data.newBooks || []),
        ...(data.salesBooks || []),
        ...(data.bestsellerBooks || [])
    ];

    return (
        <section className='my-4'>
            <ul className='grid grid-cols-1 gap-4'>
                {allBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </ul>
        </section>
    )
}

export default Cataloglist