import './App.css';
import Header from './Header/Header';

import ImageCarousel from './Components/ImageCarousel';
import TopCategories from './Components/TopCategories';

function App() {
  return (
    <div>
      <Header/>
      {/* <Recommendations/> */}

        <ImageCarousel/>
        <TopCategories/>
    </div>
  );
}
export default App;
