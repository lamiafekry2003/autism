
// motion
import { motion } from 'framer-motion';
// variants
import {fedIn} from '../../variants'
export default function Services() {
  const services = [
    { id: 1, text: "Autism Spectrum Disorder" },
    { id: 2, text: "Testing Autism"  },
    { id: 3, text: "Community" },
    { id: 4, text: "Resources"  },
    { id: 5, text: "Awareness Videos"},
    { id: 6, text: "Testing Using Child Image" },
    { id: 7, text: "Testing Using Drawing Image" },
    { id: 8, text: "Testing Using Coloring Image" }
  ];
  const detailedServices = [
    { id: 1, title: "Autism Spectrum Disorder", description: "While ASDetect is not a diagnostic tool, the method on which the app is based is 83% accurate in identifying early signs of autism. However, no autism surveillance or screening method is perfectly accurate, so there is a chance that either:" },
    { id: 2, title: "Testing Autism", description: "While ASDetect is not a diagnostic tool, the method on which the app is based is 83% accurate in identifying early signs of autism. However, no autism surveillance or screening method is perfectly accurate, so there is a chance that either:" },
    { id: 3, title: "Community", description: "While ASDetect is not a diagnostic tool, the method on which the app is based is 83% accurate in identifying early signs of autism. However, no autism surveillance or screening method is perfectly accurate, so there is a chance that either:" },
    { id: 4, title: "Resource", description: "While ASDetect is not a diagnostic tool, the method on which the app is based is 83% accurate in identifying early signs of autism. However, no autism surveillance or screening method is perfectly accurate, so there is a chance that either:" },
  ];
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
          Services
        </h2>
        <p className="text-slate-500  mt-5 text-center mx-2 lg:mx-0 ">
          We provide auailty behavioral services based on the principles of
          applied Behavior analysis .ABA and Behavioral Services are provided to
          childern and adults with:
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 my-8 text-center">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fedIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col justify-center items-center mx-auto md-mx-5 lg:mx-5 my-5 bg-white shadow-xl w-72 h-[150px] rounded-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center items-center w-10 h-10 border-2 border-green-600 rounded-full mb-4">
                <i className="fa-solid fa-check text-green-500 text-2xl"></i>
              </div>
              <p className="w-full">{service.text}</p>
            </motion.div>
          ))}
        </div>
     </div>
    </div>
     {/* Detailed Services Section */}
     <section className="container mx-auto text-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {detailedServices.map(service => (
            <div key={service.id} className=" p-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center mb-4">
                <span className="text-blue-500 text-2xl font-bold">{service.id}</span>
              </div>
               <motion.div
              key={service.id}
              variants={fedIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col justify-center items-center mx-auto md:mx-5  my-5 bg-white shadow-xl w-80 lg:w-96 h-[150px] rounded-md text-center hover:shadow-lg transition-shadow"
            >
              {/* <div className="flex justify-center items-center w-10 h-10 border-2 border-green-600 rounded-full mb-4">
                <i className="fa-solid fa-check text-green-500 text-2xl"></i>
              </div> */}
              <p className="w-full">{service.title}</p>
            </motion.div>
              <motion.p 
              key={service.id}
              variants={fedIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-gray-500 max-w-md">{service.description}</motion.p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
