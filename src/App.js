import './App.css';
import Header from './Header/Header';

import ImageCarousel from './Components/ImageCarousel';
import TopCategories from './Components/TopCategories';
import TopCashbackStores from './Components/TopCashbackStores';

function App() {
  return (
    <div>
      <Header/>
      {/* <Recommendations/> */}

        <ImageCarousel/>
        <TopCategories/>
        <TopCashbackStores/>
    </div>
  );
}
export default App;
