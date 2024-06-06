
import styles from "../../style";
import logo from "../../assets/logo.svg"
import cart from "../../assets/cart.svg"
import user from "../../assets/user.svg"
import SearchBar from './SearchBar';
import SelectLanguage from './SelectLanguage';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



const Header = () => {

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('/api/')
      .then(({ data }) => {
        const { newBooks, salesBooks, bestsellerBooks } = data;
        const combinedBooks = [...newBooks, ...salesBooks, ...bestsellerBooks];
        // setBooks(combinedBooks);
        setFilteredBooks(combinedBooks);
        setLoading(false);
        console.log(combinedBooks)
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleFilter = (event) => {
    const res = filteredBooks.filter(b => b && b.title ? b.title.toLowerCase().includes(event.target.value) : false);
    setBooks(res);
    console.log("test")
  };

  if (loading) return <div>Завантаження книг...</div>;
  if (error) return <div>Помилка при завантаженні книг: {error.message}</div>;


  return (
    <header className=' w-full '>
      <div className='bg-main pt-[44px]'>
        <div className={`${styles.paddingX} ${styles.boxWidth} mx-auto justify-between flex py-5`}>

          <Link to='/'>
            <img src={logo} alt="BookShop" className=' w-[180px] h-[80px]' />
          </Link>

          <div className=' hidden md:flex md:flex-col md:items-center md:justify-center relative'>
            <SearchBar onChange={handleFilter} />
            
              <ul className=' px-2 absolute top-20 z-50 rounded-md shadow bg-white w-full'>
                {books.map(item => (
                  <li className='my-2' key={item.id}>{item.title}</li>
                ))}
              </ul>
        
          </div>

          <div className=' flex md:items-center md:justify-center'>

            <div className=" hidden md:flex  h-12">
              <SelectLanguage />
            </div>

            <div className="flex items-center justify-center">
              <div>
                <img className="icon" src={cart} alt="cart" />
              </div>
              <div
              ><img src={user} alt="user" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <Nav />
      </div>

    </header>
  )
}

export default Header