import axios from '/node_modules/axios';

// const getBooks = async (searchTerm) => {
// 	try {
// 		const response = await axios.get(
// 			'https://backend-o1yz.onrender.com/search',
// 			{params: {search: searchTerm}}
// 		);
// 		return response.data;
// 	} catch (error) {
// 		console.error("error fetching books:", error);
// 	}
// };

// export default getBooks;

const getBooks = async (searchTerm) => {
	try {
		const response = await axios.get(
			'https://backend-o1yz.onrender.com/search',
			{ params: { search: searchTerm } }
		);
		console.log("Search term:", searchTerm);

		// Дістаємо масив із відповіді
		return response.data.data.searchResult || []; 
	} catch (error) {
		console.error("error fetching books:", error);
		return []; // У разі помилки повертаємо порожній масив
	}
};

export default getBooks;

