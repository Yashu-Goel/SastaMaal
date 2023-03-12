import './MenuBar.css'
import React from 'react'
import { useState } from 'react';
import { FaLessThan, FaListUl } from "react-icons/fa";

const MenuBar = () => {
  
  const [visible, setVisible] = useState(false);
  const Hide = () => {
    if (!visible) {
      setVisible(true);
      console.log(visible);
    }
    else if (visible) {
      setVisible(false);
      console.log(visible);
    }
  }
  return (
    <div className='TitleBarContainer'>

      <div className='MenuBarBox'>

        <div className='Back' onClick={Hide}>{visible ? <FaLessThan /> : <FaListUl />} </div>
        {visible &&

          <div>
            <div className='Title'>Categories</div>
            <div className='Items'>
              <div className='Item'>Beauty</div>
              <div className='Item'>Electronics</div>
              <div className='Item'>Furnitures</div>
              <div className='Item'>Grocery</div>
            </div>
          </div>}
      </div>
    </div>
  )
}

export default MenuBar