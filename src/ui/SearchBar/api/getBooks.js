import axios from '/node_modules/axios';

const getBooks = async (content = {}) => {
  try {
    const response = await axios.get(
      'https://biblioteka-backend-btd3.onrender.com/api/books/search',
      {
        params: {
          title: content.title || '',   
          author: content.author || '', 
          category: content.category || '', 
          year: content.year || '',     
          language: content.language || '' 
        },
      }
    );
	console.log("search books",response.data.content);
    return response.data.content; 
  } catch (error) {
    console.error('Error fetching books:', error);
    return []; 
  }
};

export default getBooks;

