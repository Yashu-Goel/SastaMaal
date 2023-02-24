import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Authentication/Login/Login';
import Signup from './Authentication/Signup/Signup';
import Homepage from './Components/Homepage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
