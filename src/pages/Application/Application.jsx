
import test from "../../assets/iPhone 13 Mockup.png";
import home from "../../assets/Home.png";
import camera from "../../assets/camera.png";
import community from "../../assets/community.png";
import resource from "../../assets/resource.png";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import { fedIn } from '../../variants';
import logo from "../../assets/logos_google-play-icon.png"
import img2 from "../../assets/iPhone 15 Pro.png"

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
  const features = [
    "For children 2 years and younger (between 11 and 30 months)",
    "Based on research with an 83% accuracy for detecting autism",
    "Features extensive video footage of children both with and without autism",
    "Contains 3 age-appropriate assessments for children aged 12, 18, and 24 months",
    "Based on world-class, rigorous research at the Olga Tennison Autism Research Centre"
  ];

  const steps = [
    {
      number: "1",
      title: "Sign up as a parent or caregiver",
      description: "Enter your name, email address, and password"
    },
    {
      number: "2",
      title: "Enter your child's details",
      description: "Your child's date of birth will prompt ASDetect to display the appropriate assessment: 12 months, 18 months, or 24 months."
    },
    {
      number: "3",
      title: "Complete an assessment",
      description: "Watch the videos and then answer each question (mostly) or (rarely). An assessment takes between 20 and 30 minutes."
    },
    {
      number: "4",
      title: "Review your answers",
      description: "You can watch videos again and change your answers if required."
    },
    {
      number: "5",
      title: "Submit your answers and view results",
      description: "You will receive an on-screen result of either a (higher) or (lower) likelihood, as well as a comprehensive results email."
    }
  ];

  const screenshots = [
    { src: home, alt: "Screenshot 1" },
    { src: test, alt: "Screenshot 2" },
    { src: camera, alt: "Screenshot 3" },
    { src: community, alt: "Screenshot 4" },
    { src: resource, alt: "Screenshot 5" },
  ];

  return (
    <div className="pt-14 overflow-x-hidden">
       <div className=" mx-auto min-h-[84vh] py-9">
       <div className="mx-auto w-fit">
     <motion.div 
      variants={fedIn('up', 0.2)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
     className="tracking-wider">
        <h2 className=" text-center font-bold text-2xl lg:text-4xl">
          Download App
        </h2>
      </motion.div>
      </div>
      <div className="flex flex-wrap lg:flex-row justify-center items-center my-4">
        <motion.div
          variants={fedIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-9 mx-auto lg:mx-5 w-fit min-w-80"
        >
          <img
            src={img2}
            alt="App Preview"
            className="lg:max-w-md 2xl:max-w-lg h-80 lg:h-[450px] object-cover"
          />
        </motion.div>
        <motion.div
          variants={fedIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-sm lg:max-w-md ml-4 mt-4 tracking-wider"
        >
          <p className="text-xl text-slate-500 font-bold px-5 lg:px-0">
            Autism is a free app that empowers parents to assess their young children for early signs of autism
          </p>
          <ul className="text-slate-500 list-disc  my-3 px-5 lg:px-0 leading-6">
            {features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
          <div className="px-5 lg:px-0 md:mx-auto">
          <button className="btn mt-3">
            <div className="flex justify-between items-center">
              <img src={logo} alt="Google Play Logo" className="w-4 ml-2" />
              <span className="btn-text-one">Download</span>
            </div>
            <span className="btn-text-two ml-2">By Google Play</span>
          </button>
          </div>
        </motion.div>
      </div>
    </div>
      <div className="mx-auto min-h-[84vh] bg-gray-100 py-9">
        <motion.div 
          variants={fedIn('left', 0.2)} 
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="ml-2">
          <h2 className="lg:ml-20 text-blue-500 px-5 mb-3 font-bold text-2xl lg:text-4xl tracking-wider">
            Using Autism is easy
          </h2>
        </motion.div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:ml-24 my-5 px-5">
          <motion.ul 
            variants={fedIn('left', 0.2)} 
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}>
            {steps.map((step, index) => (
              <li key={index} className="tracking-wider my-5">
                <div className="flex flex-col sm:ml-2">
                  <div className="flex items-center">
                    <span className="my-3 font-bold inline-flex justify-center items-center w-9 h-9 text-blue-500 rounded-full border-2 border-blue-500 hover:text-white hover:bg-blue-500 cursor-pointer">
                      {step.number}
                    </span>
                    <span className="ml-4 text-blue-500 text-md lg:text-2xl">
                      {step.title}
                    </span>
                  </div>
                  <span className="text-slate-500 text-xs lg:text-base ml-14 lg:ml-[58px]">
                    {step.description}
                  </span>
                </div>
                {index < steps.length - 1 && <hr className="mt-3"/>}
              </li>
            ))}
          </motion.ul>
          <motion.div 
            variants={fedIn('right', 0.2)} 
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex justify-center items-center mt-9 mx-auto lg:mx-5 w-fit min-w-80">
            <img
              src={test}
              alt="App Preview"
              className="h-80 lg:h-[350px] object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* ScreenShot */}
      <div className="mx-auto min-h-[84vh] py-10">
        <h2 className="text-blue-500 text-2xl lg:text-4xl font-bold tracking-wider text-center mb-8">
          Autism Screenshots
        </h2>
        <motion.div 
          variants={fedIn('left', 0.2)} 
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto w-[50%]">
          <Slider {...settings}>
            {screenshots.map((screenshot, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:flex justify-center items-center my-10">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="h-80 lg:h-[400px] object-cover mx-auto sm:mx-20 md:mx-20"
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