import React from 'react'
import ImageCarousel from './ImageCarousel/ImageCarousel';
import TopCategories from './TopCategories/TopCategories';
import TopCashbackStores from './TopCashbackStores/TopCashbackStores';
import Header from '../Header/Header/Header';
import ReferFriend from './ReferFriend/ReferFriend';
import Footer from './Footer/Footer';

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