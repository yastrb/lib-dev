import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../../../redux/catalogFilterItemsSlice';
import BtnDelete from '../../UI/BtnDelete/BtnDelete';
import './SelectedFilters.css';
const SelectedFilters = () => {
	const catalogFilterItems = useSelector(state => state.catalogFilterItems);
	const dispatch = useDispatch();

	const handleClick = id => {
		dispatch(removeItem(id));
	};

	return (
		<div className='SelectedFilters'>
			{catalogFilterItems.map((e, index) => {
				return (
					<BtnDelete
						key={index}
						text={e.text}
						func={() => {
							handleClick(e.id);
						}}
					/>
				);
			})}
		</div>
	);
};

export default SelectedFilters;
