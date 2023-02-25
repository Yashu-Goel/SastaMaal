import React from 'react'
import ImageCarousel from './ImageCarousel';
import TopCategories from './TopCategories';
import TopCashbackStores from './TopCashbackStores';
import Header from '../Header/Header';
import ReferFriend from './ReferFriend';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div>
            <Header />
            <ImageCarousel />
            <TopCategories />
            <TopCashbackStores />
            <ReferFriend/>
            <Footer/>
        </div>
    )
}

export default Homepage