import MainSlider from 'components/MainSlider'
import { useBreakpointMF } from 'react-responsive-tools'
import { Link } from 'react-router-dom'
import s from './Promotion.module.scss'

import BookPreview from 'components/BookPreview'
import useGetAllBooksPromotionQry from 'queries/books/useGetAllBooksPromotionQry'

export default function Promotion() {
  const { data, isLoading } = useGetAllBooksPromotionQry()
  const isMedium = useBreakpointMF("md")
  const isLarge = useBreakpointMF("lg")
  const isExtraLarge = useBreakpointMF("ltm")

  console.log("Promotion", data)

  const getItemsToShow = () => {
    if (isExtraLarge) return 5
    if (isLarge) return 4
    if (isMedium) return 3
    return 1
  }
  const getGap = () => {
    if (isExtraLarge) return 60
    if (isMedium) return 36
    return 0
  }
  if (isLoading) {
    return <div className={s.Promotion}>Loading...</div>
  }
  return <section className={s.Promotion}>
    <div className={s.header}>
      <h3 className={s.title}>Акції</h3>
      {isMedium && <Link to="/catalog" className={s.viewAll}>Переглянути повністю</Link>}
    </div>
    <MainSlider itemsToShow={getItemsToShow()} gap={getGap()} className={s.Slider}>
      {data?.data.content.map(el => (
        <div className={s.sliderItem} key={el.id}>
          <BookPreview key={el.id} contextValue={{ offer: el.book }}>
            <BookPreview.Image className={s.image} />
            <BookPreview.Title className={s.bookTitle} />
            <BookPreview.Author className={s.author} />
            <BookPreview.Price className={s.price} />
            <BookPreview.AddToCartButton className={s.addToCartBtn} />
          </BookPreview>
        </div>
      ))}
    </MainSlider>
    {!isMedium && <Link to="/catalog" className={s.viewAll}>Переглянути повністю</Link>}
  </section>
}


