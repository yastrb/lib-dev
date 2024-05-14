import React from 'react'
import ua from "../../assets/ukraine.svg"
import uk from "../../assets/united-kingdom.svg"
import arrow from "../../assets/arrow.svg"

const SelectLanguage = () => {
  return (
    <div className=' hidden md:flex '>
        <img src={ua} alt="українська" />
        <img src={arrow} alt="" />
    </div>
  )
}

export default SelectLanguage