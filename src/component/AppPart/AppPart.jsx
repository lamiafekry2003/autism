import img2 from "../../assets/iPhone 15 Pro.png";
import logo from "../../assets/logos_google-play-icon.png";
// motion
import { motion } from 'framer-motion';
// variants
import {fedIn} from '../../variants'
export default function AppPart() {
  return (
    <div className=" mx-auto  py-11 min-h-[550px]">
      <motion.div
       variants={fedIn('up', 0.2)} 
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.7 }}
      >
        <h2 className=" text-center font-bold text-2xl lg:text-4xl tracking-wider">
          Download App
        </h2>
      </motion.div>
      <div className="flex flex-wrap justify-center items-center mt-2">
        <motion.div
        variants={fedIn('right', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
         className=" mt-9 mx-auto lg:mx-5 w-fit min-w-80">
          <img
            src={img2}
            alt=""
            className="lg:max-w-lg h-80 lg:h-[350px]  object-cover"
          />
        </motion.div>
        <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className=" max-w-sm lg:max-w-2xl ml-4  mt-4 tracking-wider">
          <p className=" text-2xl text-slate-500 font-bold ">
            Autism is a free app that empowers parents to assess thier young
            childern for early signs of autism
          </p>
          <ul className="text-slate-500 list-disc my-3">
            <li className="mb-2">
              For childern 2 years and younger (between 11 and 30 months)
            </li>
            <li className="mb-2">
              Based on research with an 83% accuracy for detecting autism
            </li>
            <li className="mb-2">
              Features extensive video footage of childern both with and without
              autism
            </li>
            <li className="mb-2">
              Contains 3 age-appropriate assessment for childern aged 12, 18 and
              24 months
            </li>
            <li className="mb-2">
              Based on world-class ,rigorous research at the Olga tennison
              Autism Research Centre
            </li>
          </ul>
          <button className="btn mt-3">
            <div className=" flex justify-between items-center">
              <img src={logo} alt="" className="w-4 ml-2 " />
              <span className="btn-text-one">Download</span>
            </div>
            {/* <span className="btn-text-one"> <img src={logo} alt="" className="w-5 text-center"/>Download</span> */}
            <span className="btn-text-two ml-2">By Google Play</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
