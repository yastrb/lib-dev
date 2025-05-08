import s from './Promotion.module.scss'

import FeaturedCarouselSection from 'components/FeaturedCarouselSection'
import useGetAllBooksPromotionQry from 'queries/books/useGetAllBooksPromotionQry'
export default function Promotion() {
  const { data, isLoading } = useGetAllBooksPromotionQry()

  if (isLoading) {
    return <div className={s.Promotion}>Loading...</div>
  }
  return <section className={s.Promotion}>
    <FeaturedCarouselSection
      data={data?.data.content}
      title={"Акції"}
    />
  </section>
}


