import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a className='text-base font-medium '>Home</a></li>
              <li><a className='text-base font-medium'>About</a></li>
              <li><a className='text-base font-medium'>Schedules</a></li>
              <li><a className='text-base font-medium'>Membership</a></li>
              <li><a className='text-base font-medium'>Pricing</a></li>
              
            </ul>
          </div>
         
        </div>

        <div className="navbar-start hidden lg:flex justify-end items-center ">
          <ul className="menu menu-horizontal px-1">
          <li><a className='text-base font-medium '>Home</a></li>
              <li><a className='text-base font-medium'>About</a></li>
              <li><a className='text-base font-medium'>Schedules</a></li>
              <li><a className='text-base font-medium'>Membership</a></li>
              <li><a className='text-base font-medium'>Pricing</a></li>
               
          </ul>
        </div>

        <div className="navbar-end flex pe-20">
          <a className="btn btn-ghost text-gray-400">Offer</a>
          <a className="btn bg-orange-500 rounded-3xl text-white">Course</a>
        </div>
      </div>
    );
};

export default NavBar;