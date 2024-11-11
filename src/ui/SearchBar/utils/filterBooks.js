export const filterBooks = (books, searchTerm, searchType) => {
	if (!searchTerm) return [];

	const isUkrainian = /[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]/.test(searchTerm);
	return books.filter(book => {
		if (searchType === 'books') {
			return isUkrainian
				? book?.title_ukr?.toLowerCase().includes(searchTerm) ||
						book?.author?.some(
							a =>
								a?.name_ukr?.toLowerCase().includes(searchTerm) ||
								a?.surname_ukr?.toLowerCase().includes(searchTerm)
						)
				: book?.title?.toLowerCase().includes(searchTerm) ||
						book?.author?.some(
							a =>
								a?.name?.toLowerCase().includes(searchTerm) ||
								a?.surname?.toLowerCase().includes(searchTerm)
						);
		} 
		if (searchType === 'authors') {
			return book?.author?.some(a =>
				isUkrainian
					? a?.name_ukr?.toLowerCase().includes(searchTerm) ||
					  a?.surname_ukr?.toLowerCase().includes(searchTerm)
					: a?.name?.toLowerCase().includes(searchTerm) ||
					  a?.surname?.toLowerCase().includes(searchTerm)
			);
		}
		return false;
	});
};
