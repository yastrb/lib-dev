
// import FeaturedCarouselSection from 'components/FeaturedCarouselSection'
import { BookCard } from 'components/BookCard'
import MainSlider from 'components/MainSlider'
import useGetAllBooksNewArrivalQry from 'queries/books/useGetAllBooksNewArrivalQry'
import { useBreakpointMF } from 'react-responsive-tools'
import { Link } from 'react-router-dom'
import s from './NewArrival.module.scss'

export default function NewArrival() {
  const { data, isLoading } = useGetAllBooksNewArrivalQry()

  const isMedium = useBreakpointMF("md")
  const isLarge = useBreakpointMF("lg")
  const isExtraLarge = useBreakpointMF("ltm")

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
    return <div className={s.NewArrival}>Loading...</div>
  }

  return <section className={s.NewArrival}>
    <div className={s.header}>
  <h3 className={s.title}>Новинки</h3>
  {isMedium &&<Link to="/catalog" className={s.viewAll}>Переглянути повністю</Link>}
</div>
     <MainSlider itemsToShow={getItemsToShow()} gap={getGap()}>
      {data?.data.content.map(el => (
        <>
        <BookCard key={el.id} book={el} />
        </>
      ))}
    </MainSlider>
    {!isMedium &&<Link to="/catalog" className={s.viewAll}>Переглянути повністю</Link>}
  </section>
}
