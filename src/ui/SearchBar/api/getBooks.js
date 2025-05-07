import axios from '/node_modules/axios';

const getBooks = async () => {
	const response = await axios.get(
		'https://biblioteka-backend-btd3.onrender.com/api/books'
	);
	return response.data.content;
};

export default getBooks;
