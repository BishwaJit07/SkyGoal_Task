import person1 from "../../assets/Webtaskresources/Ellipse1.png";
import person2 from "../../assets/Webtaskresources/Ellipse2.png";
import person3 from "../../assets/Webtaskresources/Ellipse3.png";

const Testimonial = () => {
  return (
    <div>
      <h2 className="text-4xl font-medium text-center mb-16">Testimonials</h2>
 <div className=" flex flex-col md:flex-row justify-around">
{/* card */}
<div className=" flex flex-col m-2 justify-center items-center text-center">
        <img src={person3} alt="" />

        <h4>Corey Korsgaard</h4>
        <div className="my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="126"
            height="2"
            viewBox="0 0 126 2"
            fill="none"
          >
            <path d="M0 1H126" stroke="#A0CD9E" />
          </svg>
        </div>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

{/* card */}
      <div className=" flex flex-col justify-center items-center text-center px-16">
        <img src={person1} alt="" />

        <h4>Jakob Aminoff</h4>
        <div className="my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="126"
            height="2"
            viewBox="0 0 126 2"
            fill="none"
          >
            <path d="M0 1H126" stroke="#A0CD9E" />
          </svg>
        </div>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

{/* card */}
      <div className=" flex flex-col justify-center items-center text-center">
        <img src={person2} alt="" />

        <h4>Carla Press</h4>
        <div className="my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="126"
            height="2"
            viewBox="0 0 126 2"
            fill="none"
          >
            <path d="M0 1H126" stroke="#A0CD9E" />
          </svg>
        </div>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
 </div>

    </div>
  );
};

export default Testimonial;
