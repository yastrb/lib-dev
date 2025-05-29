import cn from 'classnames'
import { Children, useRef, useState } from 'react'
import s from './MainSlider.module.scss'
import ArrowLeft from './components/ArrowLeft/ArrowLeft'
import ArrowRight from './components/ArrowRight/ArrowRight'

interface Props {
  className?: string;
  children: React.ReactNode;
  itemsToShow?: number;
  gap?: number;
}

export default function MainSlider({ 
  className = '', 
  children,
  itemsToShow = 4,
  gap = 20 
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemsCount = Children.count(children);
  const shouldShowArrows = itemsCount > itemsToShow;
  const handleNext = () => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.offsetWidth / itemsToShow;
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.offsetWidth;
      const nextScroll = (currentIndex + 1) * itemWidth;

      if (nextScroll <= maxScroll) {
        sliderRef.current.scrollTo({
          left: nextScroll,
          behavior: 'smooth'
        });
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.offsetWidth / itemsToShow;
      const prevScroll = (currentIndex - 1) * itemWidth;

      if (prevScroll >= 0) {
        sliderRef.current.scrollTo({
          left: prevScroll,
          behavior: 'smooth'
        });
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  return (
    <section className={cn(s.MainSlider, className)}>
      <div className={s.sliderWrapper}>
         {shouldShowArrows && <ArrowLeft className={s.arrowLeft} onClick={handlePrev} />}
        <div 
          ref={sliderRef} 
          className={s.slider}
          style={{
            '--items-to-show': itemsToShow,
            '--gap': `${gap}px`
          } as React.CSSProperties}
        >
          {children}
        </div>
        {shouldShowArrows && <ArrowRight className={s.arrowRight} onClick={handleNext} />}
      </div>
    </section>
  );
}
