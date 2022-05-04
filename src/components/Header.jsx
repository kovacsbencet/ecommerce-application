import React from 'react'

function Header() {
  return (
    <header>
      <div className = "wrapper" id="header-wrapper">
          <div className="logo"><a href="#"><h4>SealPack</h4></a></div>
          <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
          </nav>
          <div className='header-buttons'>
            <button className="login-btn">Login</button>
            <button>Register</button>
          </div>
      </div>
    </header>
  )
}

export default Header
