import axios from '/node_modules/axios';

const getBooks = async () => {
	const response = await axios.get(
		'https://biblioteka-backend-btd3.onrender.com/books'
	);
	return response.data.newBooks;
};

export default getBooks;
