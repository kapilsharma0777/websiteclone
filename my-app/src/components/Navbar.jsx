import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';
function Navbar() {

  const [nav, setNav] = useState(false)
  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className="w-full h-[90px] bg-[#EBF4FE] text-black">
      <nav className=" max-w-[1240px] flex justify-between items-center mx-auto px-4 h-full ">
        <div><img className=" h-12" src={logo} alt="" srcset="" /></div>
        <div className="hidden md:flex ">
          <ul className="flex items-center gap-4 font-mono text-sm cursor-pointer ">
            <li>
              <Link to="Hero" smooth={true} duration={800}>
                Home
              </Link>
            </li>
            <li> <Link to="Special" smooth={true} duration={800}>
              Special Offer
            </Link></li>
            <li>
              <Link to="Services" smooth={true} duration={800}>
                Services
              </Link>
            </li>
            <li>
              <Link to="Testimonials" smooth={true} duration={800}>
                Testimonials
              </Link>
            </li>
            <li> <Link to="Gallery" smooth={true} duration={800}>
              Gallery
            </Link></li>
            <li>About</li>
            <li>Easy Financing</li>
            <li>Business Hours</li>
            <button  className="ml-4 bg-[#0560c2] text-white
        px-7 rounded-xl py-2">Book Now
        
        </button>
          </ul>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose className="h-8 w-8 text-black" /> : <AiOutlineMenu className="h-8 w-8 text-black" />}
        </div>

        {/* mobile navbar */}
        <div className={nav ? 'text-black bg-[#EBF4FE] w-full absolute top-[90px] left-0 flex justify-center text-center '
          : 'hidden'}>
          <ul className="flex flex-col gap-6 cursor-pointer">
          <li>
              <Link to="Hero" smooth={true} duration={800}>
                Home
              </Link>
            </li>
            <li> <Link to="Special" smooth={true} duration={800}>
              Special Offer
            </Link></li>
            <li>
              <Link to="Services" smooth={true} duration={800}>
                Services
              </Link>
            </li>
            <li>
              <Link to="Testimonials" smooth={true} duration={800}>
                Testimonials
              </Link>
            </li>
            <li> <Link to="Gallery" smooth={true} duration={800}>
              Gallery
            </Link></li>
            <li>About</li>
            <li>Easy Financing</li>
            <li>Business Hours</li>
            <button className="m-5 bg-[#0560c2] text-white
        px-7 rounded-xl py-2">Book Now</button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
