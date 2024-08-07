import { useEffect, useState } from 'react'
import search from '../../assets/search.svg'
import clear from '../../assets/xmark.svg'
import axios from 'axios'

const SearchBar = () => {
	const [books, setBooks] = useState([])
	const [filteredBooks, setFilteredBooks] = useState([])
	const [wordEntered, setWordEntered] = useState('')

	useEffect(() => {
		axios.get('https://backend-tan-phi.vercel.app/api').then(({ data }) => {
			const { newBooks, salesBooks, bestsellerBooks } = data
			const combinedBooks = [...newBooks, ...salesBooks, ...bestsellerBooks]
			setBooks(combinedBooks)
			setFilteredBooks([])
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
			setFilteredBooks([]) // Якщо рядок пошуку пустий, показуємо пустий список
		} else {
			setFilteredBooks(res)
		}
	}

	const clearInput = () => {
		setFilteredBooks([]) // Очищуємо відфільтрований список
		setWordEntered('') // Очищуємо рядок пошуку
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

			{filteredBooks.length !== 0 && (
				<ul className='list px-2 absolute top-20 z-50 rounded-md shadow bg-white w-full'>
					{filteredBooks.map(item => {
						const isUkrainian = /[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]/.test(wordEntered)
						return (
							<li className='my-2' key={item.id}>
								{isUkrainian ? 
									`${item.author.map(a => `${a.name_ukr} ${a.surname_ukr}`).join(', ')} - ${item.title_ukr}` : 
									`${item.author.map(a => `${a.name} ${a.surname}`).join(', ')} - ${item.title}`}
							</li>
						)
					})}
				</ul>
			)}
		</>
	)
}

export default SearchBar
