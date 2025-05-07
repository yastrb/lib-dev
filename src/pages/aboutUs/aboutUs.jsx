import Photo1 from '../../assets/images/AboutUs-Photo1.jpg'
import Photo2 from '../../assets/images/AboutUs-Photo2.jpg'
import Photo3 from '../../assets/images/AboutUs-Photo3.jpg'
import Photo4 from '../../assets/images/AboutUs-Photo4.jpg'
import './AboutUs.css'

const AboutUs = () => {
	
	return (
		<div className='AboutUS-container'>
			<div className='AboutUs-Header'>
				<h1 className='AboutUs-PageName'>ПРО НАС</h1>
			</div>
			<div className='AboutUS-Content_container'>
				<div>
					<h2 className='AboutUs-Tittle'>Місце вашого спокою - BIBLIOTEKA</h2>
					<p className='AboutUs-Tittle-Text'>
						BOOK SHOP - це не просто магазин книг, а справжній оазис для всіх,
						хто любить читати та шукає нові літературні пригоди. Він
						розташований у самому серці міста і приваблює увагу яскравими
						вітринами, де виблискують найновіші та найпопулярніші видання.
						<br /> <br />У BIBLIOTEKA представлений широкий асортимент книг на
						будь-який смак та вік: від класичних шедеврів до сучасних
						бестселерів, від дитячої літератури до наукових праць. Тут можна
						знайти різноманітні жанри - від фантастики до детективів, від
						романтики до філософії.
					</p>
				</div>

				<img className='AboutUs-Photo' src={Photo1} alt='Photo1' />
				<img className='AboutUs-Photo' src={Photo2} alt='Photo2' />
				<img className='AboutUs-Photo' src={Photo3} alt='Photo3' />

				<div>
					<h2 className='AboutUs-Tittle'>Історія створення</h2>
					<p className='AboutUs-Tittle-Text'>
						Колишня бібліотекарка на ім'я Емма завжди мріяла про власний
						книжковий магазин, де кожен може знайти книгу своєї мрії. Вона
						вірить у силу слова і знає, як книги можуть змінити життя.
						<br />
						<br /> Емма вирішила реалізувати свою мрію. Вона зібрала всі свої
						заощадження, вивчила ринок та потреби свого міста і зібрала команду
						однодумців.
						<br />
						<br />
						Разом зі своєю командою Емма знайшла ідеальне місце для свого
						магазину - просторий будинок у центрі міста з великими вітринами,
						які могли привабити увагу мандрівників. Вони назвали свій магазин
						&quot;BIBLIOTEKA&quot;, щоб кожен, хто зайшов через його двері,
						знав, що тут знаходиться те, що він шукав.
					</p>
				</div>
				<img className='AboutUs-Photo' src={Photo4} alt='Photo4' />
			</div>
		</div>
	);
};

export default AboutUs;
