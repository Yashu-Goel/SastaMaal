import './App.css';
import Header from './Header/Header';
import Offer from './Components/Offer';
<link rel="stylesheet" href="carousel.css"/>
// const ProductImage="https://rukminim1.flixcart.com/image/832/832/kziqvm80/t-shirt/r/l/a/xl-ausk0128-ausk-original-imagbgd7wvgj8yrh.jpeg?q=70";
// const BrandImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png";
// const Discount="50%";
// const Cashback=200;
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
  }
]
function App() {
  return (
    <div>
      <Header/>
      {/* <Recommendations/> */}
      <div className='OfferContainer'>

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
        Cashback={MockData[0].Cashback}/>

        <Offer ProductImage={MockData[0].ProductImage} 
        BrandImage={MockData[0].BrandImage} 
        Discount = {MockData[0].Discount}
        Cashback={MockData[0].Cashback}/>
      </div>
    </div>
  );
}
export default App;
