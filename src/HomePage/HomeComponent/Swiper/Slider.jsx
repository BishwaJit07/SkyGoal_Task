import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cardImg1 from '../../../assets/Webtaskresources/card-image-1.png'
import cardImg2 from '../../../assets/Webtaskresources/card-image-2.png'
import cardImg3 from '../../../assets/Webtaskresources/card-image-3.png'
import cardImg4 from '../../../assets/Webtaskresources/card-image.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

const Slider = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    
    // Create array with 500 slides
    

  
   

    return (
        <div>
            <h2 className='text-4xl font-medium'>Our Destinations</h2>
  <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3.5}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
       <SwiperSlide >
       <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src={cardImg4} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">University</h2>
    
   <div className='flex justify-between items-center text-center'>
   <p className='text-xs'>Cambridge, Massachusetts, UK</p> 
   <button className='btn rounded-full m-2'>...</button>
   </div>
  </div>
</div>

          </SwiperSlide>
       <SwiperSlide >
       <div className="card  w-80 bg-base-100 shadow-xl">
  <figure><img src={cardImg2}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Oxford University</h2>
 
    <div className='flex justify-between items-center text-center'>
   <p>Oxford, England</p>
   <button className='btn rounded-full m-2'>...</button>
   </div>
  </div>
</div>

          </SwiperSlide>
       <SwiperSlide >
       <div className="card  w-80   bg-base-100 shadow-xl">
  <figure><img src={cardImg1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Stanford University</h2>
   
    <div className='flex justify-between items-center text-center'>
    <p>Stanford, California </p>
    <button className='btn rounded-full m-2'>...</button>
    </div>
  </div>
</div>

          </SwiperSlide>
       <SwiperSlide >
       <div className="card  w-80  bg-base-100 shadow-xl">
  <figure><img src={cardImg3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Nanyang Technological University</h2>
   
    <div className='flex justify-between items-center text-center'>
    <p>Nanyang Ave, Singapura</p>
    <button className='btn rounded-full m-2'>...</button>

    </div>
  </div>
</div>

          </SwiperSlide>
      </Swiper>

    
        </div>
    );
};

export default Slider;