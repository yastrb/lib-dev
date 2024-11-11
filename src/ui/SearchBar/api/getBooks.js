import axios from 'axios';

const getBooks = async () => {
	const response = await axios.get(
		'https://backend-o1yz.onrender.com/get-books'
	);
	return response.data.newBooks;
};

export default getBooks;
