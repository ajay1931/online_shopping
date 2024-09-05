import React from 'react'
import './CategoryBanner.css'

const CategoryBanner = (props) => {
    const { ImgSrc, Title, Brand } = props
    return (
        <div className='categoryBanner'>
            <img src={ImgSrc} alt='' className='categoryBanner-img' />
            <p className='categoryBanner-title'>
                {Title.length < 25 ? Title: Title.slice(0, 15) + "..."}
            </p>
            <p className='categoryBanner-shopNow'>Shop Now!</p>
            <p className='categoryBanner-Brands'>{Brand}</p>
        </div>
    );
};

export default CategoryBanner
