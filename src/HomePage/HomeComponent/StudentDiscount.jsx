import stuImg from '../../assets/Webtaskresources/Mask group.png';

const StudentDiscount = () => {
    return (
        <div className="flex flex-col-reverse   md:flex-row  justify-evenly items-center  my-40">
      

      {/* stu discount */}
      <div>
      <p className=" font-medium py-2">Student Tropical Vacation: Relax and Recharge</p>
        <h2 className=" text-4xl font-bold">
          Student discounts available. 
        </h2>
        
          <p className='text-2xl pb-5'>Get ready for some fun in the sun!</p>
         <ul className=" list-disc mb-14">
            <li>Lorem ipsum dolor sit amet, <br /></li>
            <li>Massa quis natoque sit quam</li>
            <li>Eros non pellentesque elit </li>
            <li>tortor id euismod habitant</li>
            <li>tortor id euismod habitant</li>
         </ul>
         <button className="btn bg-orange-500 font-light text-white text-base rounded-full  px-10">Explore More</button>
      </div>


      {/* student img */}
      <div className="ps-10">
            <img src={stuImg} alt="" className='h-[700px]'/>
      </div>
    </div>                          
    );
};

export default StudentDiscount;