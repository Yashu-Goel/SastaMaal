import React from 'react'
import './CategoryCard.css'
const CategoryCard = (props) => {
  return (
    <div className='CategoryImage'>
        <img src={props.CategoryImage}/>
    </div>
  )
}

export default CategoryCard