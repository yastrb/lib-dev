import { Suspense } from 'react'
// import { useTranslation } from 'react-i18next'
import styles from '../../../../style.ts'
import bgImage from '../../images/bgImage.jpg'
interface Props {
  className?: string;
}

/**
 *  StoreDescription
 *  @param className
 */

export default function StoreDescription({ className = '' }: Props) {
  return (
      <Suspense fallback='loading'>
            <div className='relative w-full h-[235px] md:h-[262px] lg:h-[348px]'>
              <img
                src={bgImage}
                alt='bg-image'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 flex items-center justify-center'>
                <article
                  className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} text-[12px] md:text-base lg:text-2xl text-center leading-[1.6]`}
                >
                  Book Shop - ваш провідник у світі незабутніх пригод та неповторних
                  історій. У нашому асортименті ви знайдете все: від класичних
                  шедеврів до найсвіжіших бестселерів. Дозвольте словам стати вашими
                  компаньйонами, а книгам - вашими найкращими друзями. Ласкаво просимо
                  до нас, де кожна сторінка - це нова можливість відкрити для себе
                  щось неймовірне!
                </article>
              </div>
            </div>
          </Suspense> 
  );
}