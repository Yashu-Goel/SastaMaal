import './App.css';
import Header from './Header/Header';

import ImageCarousel from './Components/ImageCarousel';

function App() {
  return (
    <div>
      <Header/>
      {/* <Recommendations/> */}
      <div className='OfferContainer'>
{/*  
        <Offer ProductImage={MockData[0].ProductImage} 
        BrandImage={MockData[0].BrandImage} 
        Discount = {MockData[0].Discount}
        Cashback={MockData[0].Cashback}/>

        <Offer ProductImage={MockData[0].ProductImage} 
        BrandImage={MockData[0].BrandImage} 
        Discount = {MockData[0].Discount}
        Cashback={MockData[0].Cashback}/>

        <Offer ProductImage={MockData[0].ProductImage} 
        BrandImage={MockData[0].BrandImage} 
        Discount = {MockData[0].Discount}
        Cashback={MockData[0].Cashback}/>  */}

        


      </div>
        <ImageCarousel/>
    </div>
  );
}
export default App;
