import AppPart from "../../component/AppPart/AppPart";
import test from "../../assets/iPhone 13 Mockup.png";
import home from "../../assets/Home.png"
import camera from "../../assets/camera.png"
import community from "../../assets/community.png"
import resource from "../../assets/resource.png"
import Slider from "react-slick";
// motion
import { motion } from 'framer-motion';
// variants
import {fedIn} from '../../variants'
export default function Application() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Correctly referencing the image paths
  const screenshots = [
    { src: home, alt: "Screenshot 1" },
    { src: test, alt: "Screenshot 2" },
    { src: camera, alt: "Screenshot 3" },
    { src: community, alt: "Screenshot 4" },
    { src: resource, alt: "Screenshot 5" },
  ];
 
  return (
    <div className=" pt-11">
      <AppPart />
      <div className=" mx-auto min-h-[550px] bg-gray-100 py-10">
        <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className=" ml-2 ">
          <h2 className=" lg:ml-20 text-blue-500 px-5 mb-3 font-bold text-2xl lg:text-4xl tracking-wider">
            Using Autism is easy
          </h2>
        </motion.div>
        <div 
        className="flex flex-col lg:flex-row justify-center items-center   lg:ml-24 my-5 px-5 ">
          <motion.ul 
          variants={fedIn('left', 0.2)} 
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="">
            <li className=" tracking-wider my-5">
              <div className="flex flex-col sm:ml-2">
                <div className="flex items-center">
                  <span className=" my-3 font-bold inline-flex justify-center items-center w-9 h-9 text-blue-500 rounded-full border-2 border-blue-500 hover:text-white hover:bg-blue-500 cursor-pointer">
                    1
                  </span>
                  <span className="ml-4  text-blue-500 text-md lg:text-2xl">
                    Sign up as a parent or caregiver
                  </span>
                </div>
                <span className="text-slate-500 text-xs lg:text-base ml-14 lg:ml-[58px]">
                  Enter your name, email address, and password
                </span>
              </div>
            </li>
            <hr />
            <li className=" tracking-wider my-5">
              <div className="flex flex-col sm:ml-2">
                <div className="flex items-center">
                  <span className=" my-3 font-bold  inline-flex justify-center items-center w-9 h-9 text-blue-500 rounded-full border-2 border-blue-500 hover:text-white hover:bg-blue-500 cursor-pointer">
                    2
                  </span>
                  <span className="ml-4  text-blue-500 text-md lg:text-2xl">
                    Enter your childs details
                  </span>
                </div>
                <span className="text-slate-500 text-xs lg:text-base ml-14 lg:ml-[58px]">
                  Your childs date of birth will prompt ASDetect to display the
                  appropriate assessment: 12 months, 18 months or 24 months.
                </span>
              </div>
            </li>
            <hr />
            <li className=" tracking-wider my-5">
              <div className="flex flex-col sm:ml-2">
                <div className="flex items-center">
                  <span className=" my-3 font-bold  inline-flex justify-center items-center w-9 h-9 text-blue-500 rounded-full border-2 border-blue-500 hover:text-white hover:bg-blue-500 cursor-pointer">
                    3
                  </span>
                  <span className="ml-4  text-blue-500 text-md lg:text-2xl">
                    Complete an assessment
                  </span>
                </div>
                <span className="text-slate-500 text-xs lg:text-base ml-14 lg:ml-[58px]">
                  Watch the videos and then answer each question (mostly) or
                  (rarely) An assessment takes between 20 and 30 minutes.
                </span>
              </div>
            </li>
            <hr />
            <li className=" tracking-wider my-5">
              <div className="flex flex-col sm:ml-2">
                <div className="flex items-center">
                  <span className=" my-3 font-bold  inline-flex justify-center items-center w-9 h-9 text-blue-500 rounded-full border-2 border-blue-500 hover:text-white hover:bg-blue-500 cursor-pointer">
                    4
                  </span>
                  <span className="ml-4  text-blue-500 text-md lg:text-2xl">
                    Review your answers
                  </span>
                </div>
                <span className="text-slate-500 text-xs lg:text-base ml-14 lg:ml-[58px]">
                  You can watch videos again and change your answers if
                  required.
                </span>
              </div>
            </li>
            <hr />
            <li className=" tracking-wider my-5">
              <div className="flex flex-col sm:ml-2">
                <div className="flex items-center">
                  <span className=" my-3 font-bold  inline-flex justify-center items-center w-9 h-9 text-blue-500 rounded-full border-2 border-blue-500 hover:text-white hover:bg-blue-500 cursor-pointer">
                    5
                  </span>
                  <span className="ml-4  text-blue-500 text-md lg:text-2xl">
                    Submit your answers and view results
                  </span>
                </div>
                <span className="text-slate-500 text-xs lg:text-base ml-14 lg:ml-[58px]">
                  You all receive an on-screen result of either a (higher) or
                  (lower) likelihood, as well as a comprehensive results email.
                </span>
              </div>
            </li>
          </motion.ul>
          <motion.div 
          variants={fedIn('right', 0.2)} 
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex justify-center items-center mt-9 mx-auto lg:mx-5 w-fit min-w-80">
            <img
              src={test}
              alt=""
              className="  h-80 lg:h-[350px]  object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* screenShot */}
      <div className="mx-auto min-h-[550px] py-10  ">
      <h2 className="text-blue-500 text-2xl lg:text-4xl font-bold tracking-wider text-center mb-8">
        Autism Screenshots
      </h2>
      <motion.div 
      variants={fedIn('left', 0.2)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="mx-auto w-[50%] my-4 ">
        <Slider {...settings}>
          {screenshots.map((screenshot, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-3">
                <div className=" lg:flex justify-center items-center">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="h-80 lg:h-[400px] object-cover mx-auto sm:mx-20 md:mx-20 "
                />
                </div>
              </div>
          ))}
        </Slider>
      </motion.div>
    </div>
        
      </div>
  );
}
