import React from 'react'
import { my_asset } from '../../assets/asset'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="container-fluid d-flex justify-content-between px-5 pt-2 pb-0 border">
            <p>Free shipping on US orders $100+ & Free exchanges</p>
            <div>
                <span>English</span>
                <span>USD</span>
            </div>
        </div>
        <div className="container-fluid d-flex justify-content-between align-items-center px-5 py-3">
            <img src={my_asset.logo} alt="" height={30} />
            <div className="menu d-flex gap-3">
                <Link to={"/"} className='text-decoration-none text-dark'>Home</Link>
                <Link to={"/"} className='text-decoration-none text-dark'>Shop</Link>
                <Link to={"/"} className='text-decoration-none text-dark'>Contact</Link>
            </div>
            <div className="icon d-flex gap-3">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-bag-shopping"></i>
            </div>
        </div>
    </>
  )
}

export default Navbar