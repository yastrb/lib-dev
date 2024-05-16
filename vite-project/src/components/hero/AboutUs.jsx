import React from 'react'
import styles from '../../style'
import bgImage from "../../assets/bgImage.jpg"
import { textContent } from '../../constants'

const AboutUs = () => (
    <div className='relative w-full h-[235px] md:h-[262px] lg:h-[348px]'>
        <img src={bgImage} alt="bg-image" className=' w-full h-full object-cover' />
        <div className='absolute inset-0 flex items-center justify-center'>
            <article className={`${styles.boxWidth}${styles.paddingX} ${styles.paddingY} text-[12px] md:text-base lg:text-2xl text-center leading-[1.6]`}>{textContent}</article>
        </div>
    </div>
)

export default AboutUs