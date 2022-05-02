import React from 'react'

function Header() {
  return (
    <header>
      <div className = "wrapper" id="header-wrapper">
          <div className = "logo">SealPack</div>
          <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
          </nav>
          <div>
            <button>Login</button>
            <button>Register</button>
          </div>
      </div>
    </header>
  )
}

export default Header
