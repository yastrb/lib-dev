import { useGetNewBestsellersSalesBooks } from '../../redux/booksSlice.js'
import BookCard from '../product/BookCard.jsx'

const New = () => {
	const { data, error, isLoading } = useGetNewBestsellersSalesBooks()
	console.log('Data:', data)
	return (
		<section className=' my-4'>
			{isLoading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{data && data.newBooks && data.newBooks.length > 0 && (
				<ul className=' new-list grid grid-cols-3 gap-4'>
					{data.newBooks.map(book => (
						<BookCard key={book.id} book={book} />
					))}
				</ul>
			)}
			{!isLoading && !error && (!data || (data && !data.newBooks)) && (
				<p>No new books available</p>
			)}
		</section>
	)
}

export default New
