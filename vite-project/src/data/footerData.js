import address from '../assets/icons/address.svg'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import mail from '../assets/icons/mail.svg'
import phone from '../assets/icons/telephone.svg'

export const footerData = [
	{
		id: '1',
		links: [
			{ id: 'a', text: 'Каталог', link: '/catalog' },
			{ id: 'b', text: 'Про нас', link: '/about' },
		],
	},
	{
		id: '2',
		links: [
			{ id: 'c', text: 'Топ книг', link: '/top-books' },
			{ id: 'd', text: 'Акції', link: '/sales' },
		],
	},
]

export const contactData = [
	{
		id: '1',
		icon: mail,
		text: 'biblioteka.gmail.com',
		link: 'mailto:biblioteka@gmail.com',
	},
	{
		id: '2',
		icon: phone,
		text: '+380 053 088 3635',
		link: 'tel:+',
	},
	{
		id: '3',
		icon: address,
		text: 'м. Київ, вул.Шевченка, 22',
		link: 'https://maps.app.goo.gl/n6jEMvHCrsoa32Eb7',
	},
]

export const socialData = [
	{
		id: 'id1',
		image: instagram,
		alt: 'instagram icon',
		url: 'https://www.instagram.com',
	},
	{
		id: 'id2',
		image: facebook,
		alt: 'facebook icon',
		url: 'https://uk-ua.facebook.com',
	},
]
