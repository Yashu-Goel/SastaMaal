import React from 'react'
import TitleBar from './TitleBar'
import './Header.css'
import MenuBar from './MenuBar'

const Header = () => {
  return (
    <div>
        <MenuBar/>
        <TitleBar/>
    </div>
  )
}

export default Header