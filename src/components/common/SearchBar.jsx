import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../../style'
import search from '../../assets/search.svg'
import clear from '../../assets/xmark.svg'
import stock from '../../assets/stock.svg'
import axios from '/node_modules/axios'

const SearchBar = () => {
	const [books, setBooks] = useState([])
	const [filteredBooks, setFilteredBooks] = useState([])
	const [wordEntered, setWordEntered] = useState('')

	useEffect(() => {
		axios.get('https://backend-tan-phi.vercel.app/api').then(({ data }) => {
			const { newBooks } = data
			const combinedBooks = [...newBooks]
			setBooks(combinedBooks)
			setFilteredBooks([])
			console.log(combinedBooks)
		})
	}, [])

	const handleFilter = (event) => {
		const searchWord = event.target.value.toLowerCase()
		setWordEntered(searchWord)

		const isUkrainian = /[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]/.test(searchWord)

		const res = books.filter(b => {
			if (isUkrainian) {
				const hasTitleUkr = b && b.title_ukr ? b.title_ukr.toLowerCase().includes(searchWord) : false

				const hasAuthorUkr = b && b.author && b.author.length > 0
					? b.author.some(a => a.name_ukr.toLowerCase().includes(searchWord) || a.surname_ukr.toLowerCase().includes(searchWord))
					: false

				return hasTitleUkr || hasAuthorUkr
			} else {
				const hasTitleEng = b && b.title ? b.title.toLowerCase().includes(searchWord) : false

				const hasAuthorEng = b && b.author && b.author.length > 0
					? b.author.some(a => a.name.toLowerCase().includes(searchWord) || a.surname.toLowerCase().includes(searchWord))
					: false

				return hasTitleEng || hasAuthorEng
			}
		})

		if (searchWord === '') {
			setFilteredBooks([])
		} else {
			setFilteredBooks(res)
		}
	}

	const clearInput = () => {
		setFilteredBooks([])
		setWordEntered('')
	}

	return (
		<>
			<div className='flex xl:min-w-[500px] lg:min-w-[400px] md:min-w-[208px] px-4 items-center h-12 bg-main border-[1px] rounded-md border-grey cursor-pointer'>
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
								<Link to={`/catalog/${item._id}`} className='p-3 flex gap-2' key={item._id}>
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
											{isUkrainian ?
												<p >{item.title_ukr}</p> :
												<p>{item.title}</p>}
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
