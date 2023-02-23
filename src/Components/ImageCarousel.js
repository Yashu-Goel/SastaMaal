import React from 'react'
import './ImageCarousel.css'
import OfferCard from './OfferCard'

let MockData=[
    {
      ProductImage: "https://rukminim1.flixcart.com/image/832/832/kziqvm80/t-shirt/r/l/a/xl-ausk0128-ausk-original-imagbgd7wvgj8yrh.jpeg?q=70",
      BrandImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
      Discount: "50%",
      Cashback: 200,
    },
    {
      ProductImage: "https://m.media-amazon.com/images/G/31/selldot/Images/WebpImages/BannerImage-PopularcategoriestoSellOnline.webp",
      BrandImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
      Discount: "20%",
      Cashback: 250,
    },
    {
      ProductImage: "https://m.media-amazon.com/images/G/31/selldot/Images/WebpImages/BannerImage-PopularcategoriestoSellOnline.webp",
      BrandImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
      Discount: "20%",
      Cashback: 250,
    }
  ]


const ImageCarousel = () => {
    let Box= document.querySelector('.ProductContainer')
    const PrevBtn = () =>
    {
        let Width=Box.clientWidth;
        Box.scrollLeft=(Box.scrollLeft - Width);
        console.log(Width);
    }
    const NextBtn = () =>
    {
        let Width=Box.clientWidth;
        Box.scrollLeft=(Box.scrollLeft + Width);
        console.log(Width);
    }
  return (
    <div className='ProductCarousel'>

        <button className='PrevBtn' onClick={PrevBtn}><p>&lt;</p></button>
        <button className='NextBtn' onClick={NextBtn}><p>&gt;</p></button>

        <div className='ProductContainer'>
        <OfferCard ProductImage={MockData[0].ProductImage} 
        BrandImage={MockData[0].BrandImage} 
        Discount = {MockData[0].Discount}
        Cashback={MockData[0].Cashback}/>

        <OfferCard ProductImage={MockData[0].ProductImage} 
        BrandImage={MockData[0].BrandImage} 
        Discount = {MockData[0].Discount}
        Cashback={MockData[0].Cashback}/>

        <OfferCard ProductImage={MockData[0].ProductImage} 
        BrandImage={MockData[0].BrandImage} 
        Discount = {MockData[0].Discount}
        Cashback={MockData[0].Cashback}/>

        <OfferCard ProductImage={MockData[0].ProductImage} 
        BrandImage={MockData[0].BrandImage} 
        Discount = {MockData[0].Discount}
        Cashback={MockData[0].Cashback}/>

        <OfferCard ProductImage={MockData[0].ProductImage} 
        BrandImage={MockData[0].BrandImage} 
        Discount = {MockData[0].Discount}
        Cashback={MockData[0].Cashback}/>

        <OfferCard ProductImage={MockData[0].ProductImage} 
        BrandImage={MockData[0].BrandImage} 
        Discount = {MockData[0].Discount}
        Cashback={MockData[0].Cashback}/>

        <OfferCard ProductImage={MockData[0].ProductImage} 
        BrandImage={MockData[0].BrandImage} 
        Discount = {MockData[0].Discount}
        Cashback={MockData[0].Cashback}/> 
        </div>
    </div>
  )
}

export default ImageCarousel