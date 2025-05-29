import { useEffect, useRef, useState } from 'react'
import IconDown from './BtnIconDown.svg'
import IconUp from './BtnIconUp.svg'
import styles from  './productDescription.module.scss'
const ProductDescription = ({ description }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const contentRef = useRef(null)
	const [contentHeight, setContentHeight] = useState('7rem')
	const [showButton, setShowButton] = useState(false)
	useEffect(() => {
		if (contentRef.current) {
			const totalHeight = contentRef.current.scrollHeight
			if (totalHeight > 7 * 16) {
				setShowButton(true)
			} else {
				setShowButton(false)
			}
			if (isExpanded) {
				setContentHeight(`${totalHeight}px`)
			} else {
				setContentHeight('7rem')
			}
		}
	}, [isExpanded])

	const handleToggle = () => {
		setIsExpanded(!isExpanded)
	}
	return (
	<div className={styles.descriptionWrapper}>
    <div
      ref={contentRef}
      style={{ height: contentHeight }}
      className={styles.descriptionContent}>
      <p>{description}</p>
    </div>
    {showButton && (
      <>
        {!isExpanded && <div className={styles.fadeOverlay}></div>}
        <button className={styles.toggleBtn} onClick={handleToggle}>
          {isExpanded ? (
            <p>
              Згорнути <img src={IconUp} alt='' />
            </p>
          ) : (
            <p>
              Читати все <img src={IconDown} alt='' />
            </p>
          )}
        </button>
      </>
    )}
  </div>
	)
}

export default ProductDescription
