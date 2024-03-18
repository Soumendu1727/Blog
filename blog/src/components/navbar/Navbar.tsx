import React from 'react'
import Logo from '../logo/Logo'

const Navbar = () => {
    const Navigation = [
        { title: "Home", href:"/"},
        { title: "About", href:"/about"},
        { title: "Features", href:"/features"},
        { title: "Studio", href:"/studio"},
        
];
  return (
    <div>
        <div>
            <Logo />
        </div>
        <div></div>
    </div>
  )
}

export default Navbar