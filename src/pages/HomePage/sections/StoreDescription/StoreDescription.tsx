
import s from './StoreDescription.module.scss'



/**
 *  StoreDescription
 */

export default function StoreDescription() {
  return (
    <section className={s.StoreDescription}>
      <article className={s.article}>
        <span>Book Shop</span> - ваш провідник у світі незабутніх пригод та неповторних
        історій. У нашому асортименті ви знайдете все: від класичних
        шедеврів до найсвіжіших бестселерів. Дозвольте словам стати вашими
        компаньйонами, а книгам - вашими найкращими друзями. Ласкаво просимо
        до нас, де кожна сторінка - це нова можливість відкрити для себе
        щось неймовірне!
      </article>
    </section>
  )
}