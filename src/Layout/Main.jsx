import React from 'react';
import Home from '../HomePage/Home';
import NavBar from '../SharedComponent/NavBar';
import Footer from '../SharedComponent/Footer';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <div className='max-w-screen-xl mx-auto'>
            <Home/>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Main;