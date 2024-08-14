
import img2 from "../../assets/iPhone 15 Pro.png"
// motion
// import { motion } from 'framer-motion';
// // variants
// import {fedIn} from '../../variants'
import "./header.scss";

export default function Header() {
  return (
    // <div className="relative overflow-hidden lg:min-h-[100vh] sm:min-h-[650px] bg-gray-100 flex justify-center items-center   duration-200">
    //  <div>
    //  <div className=" h-[700px] w-[700px] bg-blue-500 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]">
    //   </div>
    //  </div>
    //   <div className="container pb-8 sm:pb-0">
    //     <div className=" grid grid-cols-1 sm:grid-cols-2">
    //     <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
    //       <motion.div
    //       variants={fedIn('right', 0.2)}
    //       initial="hidden"
    //       whileInView="show"
    //       viewport={{ once: false, amount: 0.7 }}
    //       >
    //         <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Autism Detection</h1>
    //         <p className="text-sm">
    //           For parents and caregivers of children aged 11 to 30 months, the
    //           FREE app 
    //           <span className="lg:text-blue-500 font-bold text-xl"> Autism </span>
    //            was launched in 2024 and has been downloaded 90,000 times
    //         </p>
    //         <div className="mt-6">
    //           <button className="bg-white lg:bg-blue-500 text-blue-500 lg:text-white px-4 py-2 rounded button">
    //             <span>Download</span>
    //           </button>
    //         </div>
    //       </motion.div>
    //     </div>
    //     </div>
    //   </div>
    //   <div className="order-1 sm:order-2">
    //   <motion.div 
    //      variants={fedIn('left', 0.2)} 
    //      initial="hidden"
    //      whileInView="show"
    //      viewport={{ once: false, amount: 0.7 }}
    //   className="relative z-10">
    //         <img src={img2} alt="Autism Detection" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto" />
    //       </motion.div>
    //   </div>
    // </div>
    <div className="relative overflow-hidden min-h-[650px]  sm:min-h-[100vh] bg-gray-100 flex justify-center items-center   ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-blue-500 absolute  -top-[40%] right-0 rounded-3xl rotate-45 -z[8] "></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center mx-4 sm:mx-20 gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    Autism Detection
                  </h1>
                  <p
                    
                    className="text-sm max-w-lg my-4  lg:text-slate-500 sm:text-slate-500"
                  >
                    For parents and caregivers of children aged 11 to 30 months, the
                    FREE app 
                    <span className= "text-blue-500 lg:text-blue-500 sm:lg:text-blue-500 "> Autism </span>
               was launched in 2024 and has been downloaded 90,000 times
                  </p>
                  
                  <div className="mt-4">
              <button className=" bg-blue-500  text-white  py-2 rounded button">
                <span>Download</span>
              </button>
            </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2 ">
                  <div
                    
                    className="relative z-10 mt-5 lg:mt-10 "
                  >
                    <img
                      src={img2}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
         
      </div>
    </div>
  );
};
  