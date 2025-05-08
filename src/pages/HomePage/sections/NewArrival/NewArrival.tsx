
import FeaturedCarouselSection from 'components/FeaturedCarouselSection'
import useGetAllBooksNewArrivalQry from 'queries/books/useGetAllBooksNewArrivalQry'
import s from './NewArrival.module.scss'

export default function NewArrival() {
  const { data, isLoading } = useGetAllBooksNewArrivalQry()
  if (isLoading) {
    return <div className={s.NewArrival}>Loading...</div>
  }
  return <section className={s.NewArrival}>
    <FeaturedCarouselSection
      data={data?.data.content}
      title={"Новинки"}
    />
  </section>
}
