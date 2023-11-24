import React from 'react';
import Banner from './HomeComponent/Banner';
import StudentComment from './HomeComponent/StudentComment';
import Slider from './HomeComponent/Swiper/Slider';
import StudentDiscount from './HomeComponent/StudentDiscount';
import BookNow from './HomeComponent/BookNow';
import Testimonial from './HomeComponent/Testimonial';
import StuSpecialDis from './HomeComponent/StuSpecialDis';

const Home = () => {
    return (
        <div>
           <Banner/>
           <StudentComment/>
           <Slider/>
           <StudentDiscount/>
           <BookNow/>
           <Testimonial/>
           <StuSpecialDis/>
        </div>
    );
};

export default Home;