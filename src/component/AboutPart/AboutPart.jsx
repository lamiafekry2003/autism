// import { Link } from "react-router-dom";
// import img3 from "../../assets/about.png";
// // motion
// import { motion } from "framer-motion";
// // variants
// import { fedIn } from "../../variants";
// import "./about.scss";
// export default function AboutPart() {
//   return (
//     <div className=" py-11 min-h-[100vh] ">
//       <motion.div
//         variants={fedIn("up", 0.2)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <h2 className=" text-center font-bold text-2xl lg:text-4xl tracking-wider">
//           Welcome To Autism Web
//         </h2>
//       </motion.div>
//       <div className=" flex flex-wrap justify-center items-center my-4 px-4mt-9 mx-auto lg:mx-5 w-full sm:w-auto max-w-[80%] lg:max-w-none">
//         <motion.div
//           variants={fedIn("left", 0.2)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.7 }}
//           className=" mt-9 mx-auto lg:mx-5 w-fit max-w-80"
//         >
//           <img
//             src={img3}
//             alt=""
//             className="w-full sm:w-80 lg:w-96 h-[300px] sm:h-[450px] object-cover rounded"
//           />
//         </motion.div>
//         <motion.div
//           variants={fedIn("right", 0.2)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.7 }}
//           className="mt-4 sm:mt-0 max-w-full sm:max-w-sm lg:max-w-md  lg:ml-2 tracking-wider "
//         >
//           <p className=" text-slate-500 leading-8  mx-3">
//             Autism provide ,provide a community for Autism and test for parents
//             and caregivers of children aged 11 to 30 months, the downloaded
//             90,000 times. FREE app Austism was launched in 2024 and has been It
//             is based on research by the Olga Tennison Autism Research Centre at
//             La Trobe University, Australia. The early autism detection method
//             used in ASDetect is 83% accurate. It is based on research by the
//             Olga Tennison Autism Research Centre at La Trobe University,
//             Australia. The early autism detection method used in ASDetect is 83%
//             accurate.
//           </p>
//           <div className="mx-auto">
//             <Link to="about">
//               <button className="btn ml-2 mt-3 ">
//                 <span className="btn-text-one">See More</span>
//                 <span className="btn-text-two">Great!</span>
//               </button>
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
import img3 from "../../assets/about.png";
import { motion } from "framer-motion";
import { fedIn } from "../../variants";
import { Link } from "react-router-dom";
import "./about.scss";

export default function AboutPart() {
  return (
    <div className="py-11 min-h-[100vh] max-w-full bg-white">
      <motion.div
        variants={fedIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center"
      >
        <h2 className="font-bold text-2xl lg:text-4xl tracking-wider">Welcome To Autism Web</h2>
      </motion.div>
      <div className="flex flex-wrap justify-center items-center my-9 mx-auto w-full max-w-screen-lg px-4">
        <motion.div
          variants={fedIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full sm:w-80 lg:w-96 mx-auto mt-9"
        >
          <img
            src={img3}
            alt="About Autism"
            className="w-full h-[300px] sm:h-[450px] object-cover rounded"
          />
        </motion.div>
        <motion.div
          variants={fedIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="mt-4 sm:mt-0 max-w-full sm:max-w-sm lg:max-w-md lg:ml-2 tracking-wider"
        >
          <p className="text-slate-500 leading-8 mx-3">
            Autism provides a community for Autism and tests for parents and caregivers of children aged 11 to 30 months. The FREE app Autism was launched in 2024 and has been downloaded 90,000 times.
            It is based on research by the Olga Tennison Autism Research Centre at La Trobe University, Australia. The early autism detection method used in ASDetect is 83% accurate.
          </p>
          <div className="mx-auto mt-3">
            <Link to="about">
              <button className="btn ml-2">
                <span className="btn-text-one">See More</span>
                <span className="btn-text-two">Great!</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}