
import FeaturedCarouselSection from 'components/FeaturedCarouselSection'
import useGetAllBooksQry from 'queries/books/useGetAllBooksQry'
import s from './NewArrival.module.scss'

export default function NewArrival() {
  const {data} = useGetAllBooksQry();
  console.log('NewArrival', data);
  
  return <section className={s.NewArrival}>
    <FeaturedCarouselSection
							data={data}
							title={"Новинки"}
						/>
  </section>;
}