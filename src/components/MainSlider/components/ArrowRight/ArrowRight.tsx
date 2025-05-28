import cn from 'classnames'
import s from './ArrowRight.module.scss'

interface Props {
	className?: string;
  onClick?: () => void;
}

/**
 *  ArrowRight
 *  @param className
 */

export default function ArrowRight({ className = '',onClick}: Props) {
  return (
    <button onClick={onClick} className={cn(s.ArrowRight, className)}> 

			<svg
				width='16'
				height='28'
				viewBox='0 0 16 28'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='text-gray-500 hover:text-black duration-500'
			>
				<path
					d='M2 2L14 14L2 26'
					stroke='currentColor'
					strokeWidth='3'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</button>
  );
}