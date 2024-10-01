import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../../style'
import search from '../../assets/search.svg'
import clear from '../../assets/xmark.svg'
import stock from '../../assets/stock.svg'
import axios from '/node_modules/axios'
import { debounce } from "lodash";

const SearchBar = () => {
	const [books, setBooks] = useState([])
	const [filteredBooks, setFilteredBooks] = useState([])
	const [wordEntered, setWordEntered] = useState('')
	const [debouncedText, setDebouncedText] = useState('')

	const debouncedFetchBooks = debounce((value) => {
		setDebouncedText(value)
	}, 500);

	useEffect(() => {
		axios.get('https://backend-o1yz.onrender.com/api').then(({ data }) => {
			const { newBooks, salesBooks, bestsellerBooks} = data
			const combinedBooks = [...newBooks, ...salesBooks, ...bestsellerBooks]
			setBooks(combinedBooks)
			setFilteredBooks([])
			console.log(combinedBooks)
		})
	}, [])

	// Виклик debounce при кожній зміні вводу користувача
	const handleFilter = (event) => {
		const searchWord = event.target.value.toLowerCase()
		setWordEntered(searchWord)
		debouncedFetchBooks(searchWord)
	}

	// Виконання фільтрації, коли оновлюється debouncedText
	useEffect(() => {
		if (debouncedText === '') {
			setFilteredBooks([])
			return
		}

		const isUkrainian = /[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]/.test(debouncedText)

		const res = books.filter(b => {
			if (isUkrainian) {
				const hasTitleUkr = b?.title_ukr?.toLowerCase().includes(debouncedText) || false
				const hasAuthorUkr = b?.author?.some(a => a.name_ukr.toLowerCase().includes(debouncedText) || a.surname_ukr.toLowerCase().includes(debouncedText)) || false

				return hasTitleUkr || hasAuthorUkr
			} else {
				const hasTitleEng = b?.title?.toLowerCase().includes(debouncedText) || false
				const hasAuthorEng = b?.author?.some(a => a.name.toLowerCase().includes(debouncedText) || a.surname.toLowerCase().includes(debouncedText)) || false

				return hasTitleEng || hasAuthorEng
			}
		})

		setFilteredBooks(res)
	}, [debouncedText, books])

	const clearInput = () => {
		setFilteredBooks([])
		setWordEntered('')
	}

	return (
		<>
			<div className='flex w-[208px] xxl:min-w-[575px] xl:min-w-[575px] lg:min-w-[400px] md:max-w-[208px] px-4 items-center h-12 bg-main border-[1px] rounded-lg border-grey cursor-pointer'>
				<img src={search} alt='search' className='flex-shrink-0 pr-[14px]' />

				<input
					type='text'
					placeholder='Пошук'
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
				<div className='search-results absolute top-20 z-50 rounded-md shadow bg-white'>
					<p className='px-3 py-2 font-medium divider'>Результат пошуку</p>
					<ul>
						{filteredBooks.map(item => {

							const isUkrainian = /[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]/.test(wordEntered)

							const price = item.price[0]
							const displayPrice = price.discounted_price > 0
								? price.discounted_price
								: price.original_price

							return (
								<Link to={`/${item._id}`} className='p-3 flex gap-2' key={item._id}>
									{/* results img */}
									<div>
										{isUkrainian ?
											<img className='w-[75px] h-[99px]' src={item.coverImageLink_ukr} alt={item.title_ukr} /> :
											<img className='w-[75px] h-[99px]' src={item.coverImageLink} alt={item.title} />}
									</div>

									{/* results info */}
									<div className='flex flex-col'>
										{/* title */}
										<p className={`${styles.bodyRegular}`}>
											{isUkrainian ? item.title_ukr : item.title}
										</p>

										{/* author */}
										<p className={`${styles.captionRegular} mb-2`}>
											{isUkrainian ?
												`${item.author.map(a => `${a.name_ukr} ${a.surname_ukr}`).join(', ')}` :
												`${item.author.map(a => `${a.name} ${a.surname}`).join(', ')}`}
										</p>

										{/* price */}
										<p className={`${styles.bodyMedium} mb-2`}>{displayPrice} грн</p>

										{/* stock */}
										<p className='flex gap-2 items-center'>
											<img src={stock} alt="in stock" />
											<span className={`${styles.bodyRegular} text-green`}>В наявності</span>
										</p>
									</div>
								</Link>
							)
						})}
					</ul>
				</div>
			)}
		</>
	)
}

export default SearchBar
