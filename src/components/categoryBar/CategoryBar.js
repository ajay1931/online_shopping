import React from 'react'
import './CategoryBar.css'

const CategoryBar = (props) => {
    const { Imgsrc, CategoryName } = props
    return (
        <div className='categoryBar'>
            <div className='categoryBar-Img'>
                <img src={Imgsrc} alt='CategoryImg' />
            </div>
            <p className='categoryBar-Name'>{CategoryName}</p>
        </div>
    )
}

export default CategoryBar
