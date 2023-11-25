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
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState();

  const updateIndex = () => {
    if (swiperRef !== null) {
      setCurrentIndex(swiperRef.activeIndex);
    }
  };
   

    return (
        <div>
            <h2 className='text-4xl font-medium'>Our Destinations</h2>
  <Swiper 
  
   breakpoints={{
    240: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }}
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3.5}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
         
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSlideChange={updateIndex}
        onInit={() => setInit(true)}
        virtual
        
      >
       <SwiperSlide >
       <div className="card w-80 h-96 bg-base-100 shadow-xl">
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
       <div className="card  w-80 h-96 bg-base-100 shadow-xl">
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
       <div className="card  w-80 h-96   bg-base-100 shadow-xl">
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
       <div className="card  w-80 h-96   bg-base-100 shadow-xl">
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
<div className='flex justify-center items-end text-center'>
<button ref={prevRef} className='mx-8'><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
  <path d="M45 21.0826H5.42659L14.3463 12.1628L12.3418 10.1583L0 22.4999L12.3418 34.8418L14.3463 32.8372L5.42659 23.9175H45V21.0826Z" fill="#262626"/>
</svg></button>

<div className='swiper-pagination flex items-center text-center'><p className='text-3xl'>{currentIndex + 1}</p>  <p className=' text-base text-gray-400'>/{swiperRef?.slides.length}</p></div>

      <button ref={nextRef} className='mx-8'><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
  <path d="M0 21.0826H39.5734L30.6537 12.1628L32.6582 10.1583L45 22.4999L32.6582 34.8418L30.6537 32.8372L39.5734 23.9175H0V21.0826Z" fill="#F27A44"/>
</svg></button>

</div>
      
        </div>
    );
};

export default Slider;