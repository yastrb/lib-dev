import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ua from '../../assets/ukraine.svg';
import uk from '../../assets/united-kingdom.svg';
import arrow from '../../assets/arrow.svg';

const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <div onClick={toggleDropdown} className='flex flex-row items-center cursor-pointer'>
        <img src={i18n.language === 'uk' ? ua : uk} alt={i18n.language === 'uk' ? 'українська' : 'english'} />
        <img src={arrow} alt="dropdown arrow" className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </div>

      {isOpen && (
        <div className='absolute my-4 py-3 w-40 bg-white border border-gray-200 rounded shadow-lg'>
          <div className='flex flex-col'>
            <button
              onClick={() => handleLanguageChange('uk')}
              className='flex items-center px-4 hover:bg-gray-100'
            >
              <img src={ua} alt="українська" className='mr-2' />
              Українська
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className='flex items-center px-4 hover:bg-gray-100'
            >
              <img src={uk} alt="english" className='mr-2' />
              English
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectLanguage;
