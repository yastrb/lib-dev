import SearchResults from '@components/SearchResults/SearchResults.jsx';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import searchIcon from '../../assets/search.svg';
import clearIcon from '../../assets/xmark.svg';
import getBooks from './api/getBooks';
import useDebounce from './hooks/useDebounce';
import './SearchBar.css';

const SearchBar = () => {
	const { t } = useTranslation();
	const [results, setResults] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	useEffect(() => {
		const handleSearch = async () => {
			try {
				if (searchTerm.trim() !== '') {
					const books = await getBooks(debouncedSearchTerm);
					console.log('Books from API:', books);
					if (Array.isArray(books)) {
						setResults(books);
					} else {
						setResults([]);
						console.error('Unexpected data format:', books);
					}
				} 
				else {
					setResults([]);
				}
			} catch (error) {
				console.error('Error during search:', error);
				setResults([]);
			}
		};
		handleSearch();
	}, [debouncedSearchTerm]);


	const handleFilter = event => {
		setSearchTerm(event.target.value);
	};

	const clearInput = () => {
		setResults([]);
		setSearchTerm('');
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
					value={searchTerm}
				/>

				{searchTerm.length > 0 && (
					<img
						src={clearIcon}
						alt='clear'
						className='flex-shrink-0'
						onClick={clearInput}
					/>
				)}
			</div>

			{/* results */}
			{results.length !== 0 && (
				<SearchResults
					results={results}
					searchTerm={searchTerm}
				/>
			)}
		</>
	);
};

export default SearchBar;
