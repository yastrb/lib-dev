// SearchResults.js
import React from 'react';
import { Link } from 'react-router-dom';
import stock from '../../assets/stock.svg';
import styles from '../../style';

const SearchResults = ({ results, searchTerm }) => {
	const isUkrainian = /[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]/.test(searchTerm);

	return (
		<div className='search-results absolute top-20 z-50 rounded-md shadow bg-white'>
			<p className='px-3 py-2 font-medium divider'>Результат пошуку</p>
			<ul>
				{results.map(item => {
					const price = item.price[0];
					const displayPrice = price.discounted_price > 0
						? price.discounted_price
						: price.original_price;

					return (
						<Link to={`/${item._id}`} className='p-3 flex gap-2' key={item._id}>
							{/* results img */}
							<div>
								<img
									className='w-[75px] h-[99px]'
									src={isUkrainian ? item.coverImageLink_ukr : item.coverImageLink}
									alt={isUkrainian ? item.title_ukr : item.title}
								/>
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
										item.author.map(a => `${a.name_ukr} ${a.surname_ukr}`).join(', ') :
										item.author.map(a => `${a.name} ${a.surname}`).join(', ')}
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
					);
				})}
			</ul>
		</div>
	);
};

export default SearchResults;
