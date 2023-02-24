import React from 'react'
import ImageCarousel from './ImageCarousel';
import TopCategories from './TopCategories';
import TopCashbackStores from './TopCashbackStores';
import Header from '../Header/Header';

const Homepage = () => {
    return (
        <div>
            <Header />
            <ImageCarousel />
            <TopCategories />
            <TopCashbackStores />
        </div>
    )
}

export default Homepage