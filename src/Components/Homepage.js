import React from 'react'
import ImageCarousel from './ImageCarousel';
import TopCategories from './TopCategories';
import TopCashbackStores from './TopCashbackStores';
import Header from '../Header/Header';
import ReferFriend from './ReferFriend';

const Homepage = () => {
    return (
        <div>
            <Header />
            <ImageCarousel />
            <TopCategories />
            <TopCashbackStores />
            <ReferFriend/>
        </div>
    )
}

export default Homepage