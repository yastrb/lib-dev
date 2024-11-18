import SearchResults from '@components/SearchResults';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import searchIcon from '../../assets/search.svg';
import clearIcon from '../../assets/xmark.svg';
import getBooks from './api/getBooks';
import useDebounce from './hooks/useDebounce';
import './SearchBar.css';
import { filterBooks } from './utils/filterBooks';
const SearchBar = ({ searchType }) => {
	const { t } = useTranslation();
	const [books, setBooks] = useState([]);
	const [filteredBooks, setFilteredBooks] = useState([]);
	const [wordEntered, setWordEntered] = useState('');
	const debouncedText = useDebounce(wordEntered, 500);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const newBooks = await getBooks();
				setBooks(newBooks);
				console.log(newBooks);
			} catch (error) {
				console.error('Error fetching books:', error);
			}
		};
		fetchBooks();
	}, []);

	useEffect(() => {
		setFilteredBooks(filterBooks(books, debouncedText, searchType));
	}, [debouncedText, books, searchType]);

	const handleFilter = event => {
		setWordEntered(event.target.value);
	};

	const clearInput = () => {
		setFilteredBooks([]);
		setWordEntered('');
	};

	return (
		<>
			<div className='flex w-[208px] xxl:min-w-[575px] xl:min-w-[575px] lg:min-w-[400px] md:max-w-[208px] px-4 items-center h-12 bg-main border-[1px] rounded-lg border-grey cursor-pointer'>
				<img
					src={searchIcon}
					alt='search'
					className='flex-shrink-0 pr-[14px]'
				/>

				<input
					type='text'
					placeholder={t('main.searchField')}
					className='flex-grow bg-transparent outline-none font-montserrat'
					onChange={handleFilter}
					value={wordEntered}
				/>

				{wordEntered.length > 0 && (
					<img
						src={clearIcon}
						alt='clear'
						className='flex-shrink-0'
						onClick={clearInput}
					/>
				)}
			</div>

			{/* results */}
			{filteredBooks.length !== 0 && (
				<SearchResults
					filteredBooks={filteredBooks}
					wordEntered={wordEntered}
				/>
			)}
		</>
	);
};

export default SearchBar;
