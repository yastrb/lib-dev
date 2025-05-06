﻿import SearchResults from '@components/SearchResults';
import axios from '/node_modules/axios';
import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import search from '../../assets/search.svg';
import clear from '../../assets/xmark.svg';

const SearchBar = ({ searchType }) => {
	const [books, setBooks] = useState([]);
	const [filteredBooks, setFilteredBooks] = useState([]);
	const [wordEntered, setWordEntered] = useState('');
	const [debouncedText, setDebouncedText] = useState('');

	const debouncedFetchBooks = useCallback(
		debounce(value => setDebouncedText(value), 500),
		[]
	);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const { data } = await axios.get(
					'https://backend-o1yz.onrender.com/get-books'
				);
				const { newBooks } = data;
				setBooks([...newBooks]);
				setFilteredBooks([]);
				console.log(newBooks);
			} catch (error) {
				console.error('Ошибка при получении данных:', error);
			}
		};
		fetchBooks();
	}, []);

	const handleFilter = event => {
		const searchWord = event.target.value.toLowerCase();
		setWordEntered(searchWord);
		debouncedFetchBooks(searchWord);
	};

	useEffect(() => {
		if (debouncedText === '') {
			setFilteredBooks([]);
			return;
		}

		const isUkrainian = /[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]/.test(debouncedText);

		let res = [];
		if (searchType === 'books') {
			res = books.filter(b => {
				if (isUkrainian) {
					const hasTitleUkr =
						b?.title_ukr?.toLowerCase().includes(debouncedText) || false;
					const hasAuthorUkr =
						b?.author?.some(
							a =>
								a?.name_ukr?.toLowerCase().includes(debouncedText) ||
								a?.surname_ukr?.toLowerCase().includes(debouncedText)
						) || false;

					return hasTitleUkr || hasAuthorUkr;
				} else {
					const hasTitleEng =
						b?.title?.toLowerCase().includes(debouncedText) || false;
					const hasAuthorEng =
						b?.author?.some(
							a =>
								a?.name?.toLowerCase().includes(debouncedText) ||
								a?.surname?.toLowerCase().includes(debouncedText)
						) || false;

					return hasTitleEng || hasAuthorEng;
				}
			});
		} else if (searchType === 'authors') {
			res = books.filter(b =>
				b?.author?.some(a =>
					isUkrainian
						? a?.name_ukr?.toLowerCase().includes(debouncedText) ||
						  a?.surname_ukr?.toLowerCase().includes(debouncedText)
						: a?.name?.toLowerCase().includes(debouncedText) ||
						  a?.surname?.toLowerCase().includes(debouncedText)
				)
			);
		}

		setFilteredBooks(res);
	}, [debouncedText, books, searchType]);

	const clearInput = () => {
		setFilteredBooks([]);
		setWordEntered('');
	};

	const { t } = useTranslation();

	return (
		<>
			<div className='flex w-[208px] xxl:min-w-[575px] xl:min-w-[575px] lg:min-w-[400px] md:max-w-[208px] px-4 items-center h-12 bg-main border-[1px] rounded-lg border-grey cursor-pointer'>
				<img src={search} alt='search' className='flex-shrink-0 pr-[14px]' />

				<input
					type='text'
					placeholder={t('main.searchField')}
					className='flex-grow bg-transparent outline-none'
					onChange={handleFilter}
					value={wordEntered}
				/>

				{wordEntered.length > 0 && (
					<img
						src={clear}
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
