
import FeaturedCarouselSection from 'components/FeaturedCarouselSection'
import useGetAllBooksBestSellersQry from 'queries/books/useGetAllBooksBestSellersQry'
import s from './BestSellers.module.scss'

export default function BestSellers() {
  const { data, isLoading } = useGetAllBooksBestSellersQry()

  if (isLoading) {
    return <div className={s.BestSellers}>Loading...</div>
  }
  return <section className={s.BestSellers}><FeaturedCarouselSection
    data={data?.data.content}
    title={"Новинки"}
  /></section>
}


