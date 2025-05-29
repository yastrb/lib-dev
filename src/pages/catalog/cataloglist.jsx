
const Cataloglist = ({ books }) => {
	return (
		<section className='my-4'>
			<ul className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center'>
				{books.map(book => (
					<div key={book._id}> 1</div>
				))}
			</ul>
		</section>
	);
};

export default Cataloglist;
