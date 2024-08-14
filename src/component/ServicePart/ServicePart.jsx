import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { fedIn } from '../../variants';

export default function ServicePart() {
  const services = [
    { id: 1, text: "Autism Spectrum Disorder" },
    { id: 2, text: "Testing Autism" },
    { id: 3, text: "Community" },
    { id: 4, text: "Resources" },
    { id: 5, text: "Awareness Videos" },
    { id: 6, text: "Testing Using Child Image" },
    { id: 7, text: "Testing Using Drawing Image" },
    { id: 8, text: "Testing Using Coloring Image" }
  ];

  return (
    <div className="min-h-[100vh] bg-gray-100 py-11 px-4">
      <div className="mx-auto w-full max-w-screen-lg">
        <motion.div
          variants={fedIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.8 }}
          className="tracking-wider"
        >
          <h2 className="text-center font-bold text-2xl lg:text-4xl">
            Services
          </h2>
          <p className="text-slate-500 mt-5 text-center">
            We provide quality behavioral services based on the principles of
            Applied Behavior Analysis (ABA) to children and adults with:
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 text-center">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fedIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col justify-center items-center  bg-white shadow-xl w-full h-[150px] rounded-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center items-center w-10 h-10 border-2 border-green-600 rounded-full mb-4">
                <i className="fa-solid fa-check text-green-500 text-2xl"></i>
              </div>
              <p className="px-2">{service.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center mx-auto">
          <Link to="service">
            <button className="btn mt-2">
              <span className="btn-text-one">See More</span>
              <span className="btn-text-two">Great!</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}