import stuimages from '../../assets/Webtaskresources/Group 167.png';

const BookNow = () => {
    return (
        <div className="flex flex-col-reverse   md:flex-row  justify-between  items-center  my-40 ">
        {/* student img */}
     
      
     <div>
        <img src={stuimages} alt="" className='h-[700px]'/>
     </div>
 
      {/* Book from */}
        <div className='drop-shadow-md shadow-[rgba(0,_0,_0,_0.2)_0px_30px_40px_-4px] p-8 rounded-xl'>
             <h3 className='text-3xl font-black'>Book Now</h3>
             <p className='pb-5 pt-2'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit</p>

             {/* from */}
             <form>
  <label className='my-2 font-medium   '>
   City <br />
    <input type="text" name="City" placeholder='Enter City' className="input bg-gray-100 w-full max-w-xs "/>
  </label>

  <div className='flex font-medium mt-4'>
  <label >
  Arrival <br />
    <input type="text" name="Arrival" placeholder='10 October' className="input bg-gray-100  max-w-xs"/>
  </label>

  <label className='px-4'>
  Departure <br />
    <input type="text" name="Departure" placeholder='11 October' className="input bg-gray-100  max-w-xs"/>
  </label>
  </div>

  <div className='flex my-4 font-medium '>
  <label>
    Start <br />
    <div className="input-group ">
    <button type="button" className='bg-gray-200 p-2  text-black font-bold text-2xl rounded-md w-10  '>-</button>
      <input type="number" name="Arrival" placeholder='4' className="input bg-gray-100 w-16  max-w-xs" />
      <button type="button" className='bg-gray-200 p-2  text-black font-bold text-2xl rounded-md w-10  '>+</button>
    </div>
  </label>

  <label className='px-4'>
    Room <br />
    <div className="input-group">
    <button type="button" className='bg-gray-200 p-2  text-black font-bold text-2xl rounded-md w-10  '>-</button>

      <input type="number"  name="Departure" placeholder='1' className="input bg-gray-100 w-16 max-w-xs" />
      <button type="button" className='bg-gray-200 p-2  text-black font-bold text-2xl rounded-md w-10  '>+</button>

    </div>
  </label>
</div>

  <input type="submit" value="Book Now" className='btn text-white bg-black mt-4'/>
</form>

        </div>
      </div>
    );
};

export default BookNow;