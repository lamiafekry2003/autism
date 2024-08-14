
import img2 from "../../assets/iPhone 15 Pro.png"
// motion
import { motion } from 'framer-motion';
// variants
import {fedIn} from '../../variants'
import "./header.scss";

export default function Header() {
  return (
    <div className="relative overflow-hidden min-h-[100vh] mx-auto bg-gray-100 py-10">
     <div>
     <div className="h-[700px] w-[700px] bg-blue-500 absolute -top-[40%] right-0 rounded-3xl rotate-45 -z-9">
      </div>
      <motion.div 
         variants={fedIn('left', 0.2)} 
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7 }}
      className=" hidden lg:block order-1 lg:order-2 lg:absolute lg:top-72 lg:right-[10%] z-10">
            <img src={img2} alt="Autism Detection" className="object-cover max-w-xl" />
          </motion.div>
     </div>
      <div className="container mx-auto px-4 my-12">
        <div className=" grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10 sm:pt-0 w-full tracking-wider lg:max-w-md  sm:max-w-sm order-2 lg:order-1 relative top-10 lg:top-28 lg:left-40">
          <motion.div
          variants={fedIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          >
            <h1 className="text-3xl lg:text-6xl font-bold text-white lg:text-black">Autism Detection</h1>
            <p className="mt-6 text-white lg:text-slate-500 sm:text-slate-500">
              For parents and caregivers of children aged 11 to 30 months, the
              FREE app 
              <span className="lg:text-blue-500 font-bold text-xl"> Autism </span>
               was launched in 2024 and has been downloaded 90,000 times
            </p>
            <div className="mt-6">
              <button className="bg-white lg:bg-blue-500 text-blue-500 lg:text-white px-4 py-2 rounded button">
                <span>Download</span>
              </button>
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </div>
  );
}
