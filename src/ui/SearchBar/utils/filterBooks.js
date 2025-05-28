export const filterBooks = (books, searchTerm, searchType) => {
	if (!searchTerm) return [];

	const lowerSearchTerm = searchTerm.toLowerCase();

	return books.filter(book => {
		if (searchType === 'books') {
			return (
				book.title?.toLowerCase().includes(lowerSearchTerm) ||
				book.author?.toLowerCase().includes(lowerSearchTerm)
			);
		}
		if (searchType === 'authors') {
			return book.author?.toLowerCase().includes(lowerSearchTerm);
		}
		return false;
	});
};
