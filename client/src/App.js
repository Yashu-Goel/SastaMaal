import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Authentication/Login/Login';
import Signup from './Authentication/Signup/Signup';
import Homepage from './Components/Homepage';
import React, { useState } from 'react';
import TotalAmount from './Components/TotalEarning/TotalAmount';
import  Settngs  from './Components/Settngs/Settings';
import Popup from './Components/Settngs/Popup';
import Support from './Components/Settngs/Support';
export const CredentialContext = React.createContext(null);

function App() {
  const credentialstate = useState(null);
  return (
    <div>
      <CredentialContext.Provider value={credentialstate}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/myearning' element={<TotalAmount />} />
            <Route exact path='/setting' element={<Settngs />} />
            <Route exact path='/setting/edit-name' element={<Popup />} />
            <Route exact path='/setting/support' element={<Support />} />
          </Routes>
        </Router>
      </CredentialContext.Provider>
    </div>
  );
}
export default App;