import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchSearchResults } from '../../../redux/searchBarSlice'
import { useDebounce } from '../../../utils/hooks'
import searchBar from './SearchBarFiltersMenu.svg'
import './styles.css'

const SearchBarFitresMenu = ({ title, placeholder, searchUrl, id }) => {
	const [input, setInput] = useState('')
	const dispatch = useDispatch()

	const selectSearchResults = state => state.search[id] || {}
	const { results, status, error } = useSelector(
		selectSearchResults,
		shallowEqual
	)

	const debouncedInput = useDebounce(input, 500)

	useEffect(() => {
		if (debouncedInput) {
			dispatch(
				fetchSearchResults({
					id,
					url: searchUrl,
					params: { q: debouncedInput },
				})
			)
		}
	}, [debouncedInput, dispatch, searchUrl, id])

	return (
		<div className='SearchBar'>
			<h3 className='SearchBar__tittle'>{title}</h3>
			<div className='SearchBar__inputContainer'>
				<img
					className='SearchBar__inputContainer_img'
					src={searchBar}
					alt='Search Icon'
				/>
				<input
					className='SearchBar__inputContainer__input'
					type='text'
					placeholder={placeholder}
					value={input}
					onChange={e => setInput(e.target.value)}
				/>
			</div>

			{status === 'loading' && <p>Loading...</p>}
			{status === 'failed' && <p>Error: {error}</p>}
			{status === 'succeeded' && (
				<ul>
					{results?.newBooks?.map((e, index) => (
						<li key={index}>{e.isbn}</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default SearchBarFitresMenu
