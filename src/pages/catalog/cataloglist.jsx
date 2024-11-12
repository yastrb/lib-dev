import { BookCard }from '../../components/BookCard';

const Cataloglist = ({ books }) => {
    return (
        <section className='my-4'>
            <ul className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center'>
                  {books.map(book => (
                    <BookCard key={book._id} book={book} />
                ))}
             
            </ul>
        </section>
    );
};

export default Cataloglist;
