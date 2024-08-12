
// motion
import { motion } from 'framer-motion';
// variants
import {fedIn} from '../../variants'
export default function Services() {
  return (
    <div className=" pt-11">
     <div className="  mx-auto min-h-[550px] bg-gray-100 py-11">
     <div className="mx-auto w-fit">
     <motion.div 
      variants={fedIn('up', 0.2)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
     className="tracking-wider">
        <h2 className=" text-center font-bold text-2xl lg:text-4xl">
          Who We Services
        </h2>
        <p className="text-slate-500  mt-5 text-center ">
          We provide auailty behavioral services based on the principles of
          applied Behavior analysis .ABA and Behavioral Services are provided to
          childern and adults with:
        </p>
      </motion.div>
      <div 
      className=" grid grid-cols-1 lg:grid-cols-4  sm:grid-cols-3 my-8 text-center">
        <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className=" flex flex-col justify-center items-center mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center ">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full">Autism Spectrum Disorder</p>
        </motion.div>
        <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} className=" flex flex-col justify-center items-center  mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center ">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full">Testing Autism</p>
        </motion.div>
        <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} className=" flex flex-col justify-center items-center  mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center ">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full"> Communicty</p>
        </motion.div>
        <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} className=" flex flex-col justify-center items-center  mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center ">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full">Resources</p>
        </motion.div>
        <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} className=" flex flex-col justify-center items-center  mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center lg:mt-4">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full">Awaraness Videos</p>
        </motion.div>
        <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} className=" flex flex-col justify-center items-center  mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center lg:mt-4">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full"> Testing Using child image</p>
        </motion.div>
        <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} className=" flex flex-col justify-center items-center  mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center lg:mt-4">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full"> Testing Using Drowing image</p>
        </motion.div>
        <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} className=" flex flex-col justify-center items-center  mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center lg:mt-4">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full"> Testing Using Coloring image</p>
        </motion.div>
      </div>
     </div>
    </div>
      <div className="mx-auto min-h-[550px] bg-white p-10 mt-10">
        <motion.div
         variants={fedIn('up', 0.2)} 
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7 }}
        >
         <h2 className="text-center font-bold text-2xl lg:text-4xl tracking-wider">Testimonials</h2>
        </motion.div>
  <div 
  className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
    <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} className="bg-gray-100 p-5 rounded shadow-lg">
      <p className="text-slate-500">
        The Autism Detection app helped me understand my childs needs better. The resources provided are incredibly helpful!
      </p>
      <p className="mt-4 font-bold text-blue-500">- Parent A</p>
    </motion.div>
    <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} className="bg-gray-100 p-5 rounded shadow-lg">
      <p className="text-slate-500">
        As a caregiver, the app made it easier to Detetect Autism using images of childern.
      </p>
      <p className="mt-4 font-bold text-blue-500">- Caregiver B</p>
    </motion.div>
    <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} className="bg-gray-100 p-5 rounded shadow-lg">
      <p className="text-slate-500">
      As a caregiver, the app made it easier to Detetect Autism using Drawing images .
      </p>
      <p className="mt-4 font-bold text-blue-500">- Parent C</p>
    </motion.div>
    <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} className="bg-gray-100 p-5 rounded shadow-lg">
      <p className="text-slate-500">
      As a parent, the app made it easier to  connect to Docters .
      </p>
      <p className="mt-4 font-bold text-blue-500">- Parent C</p>
    </motion.div>
    <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} className="bg-gray-100 p-5 rounded shadow-lg">
      <p className="text-slate-500">
      The Autism Detection app helped me understand my childs needs better. The videos provided are incredibly helpful!
      </p>
      <p className="mt-4 font-bold text-blue-500">- Parent C</p>
    </motion.div>
    <motion.div 
        variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} className="bg-gray-100 p-5 rounded shadow-lg">
      <p className="text-slate-500">
      The Autism Detection app helped me connect to others people with same probleems .The Community provided are incredibly helpful!
      </p>
      <p className="mt-4 font-bold text-blue-500">- Parent D</p>
    </motion.div>
  </div>
</div>
    </div>
  );
}
