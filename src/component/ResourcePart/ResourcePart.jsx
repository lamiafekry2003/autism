import { Link } from "react-router-dom";
import { getResource, useGetResource } from "../../resource";
// motion
import { motion } from 'framer-motion';
// variants
import {fedIn} from '../../variants'
export default function ResourcePart() {
  const { data } = useGetResource("resource", getResource);
  console.log(data?.data?.fullData);

  return (
    <div className="mx-auto min-h-[550px] bg-gray-100 py-11">
      <motion.div 
      variants={fedIn('up', 0.2)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="tracking-wider">
        <h2 className="text-center font-bold text-2xl lg:text-4xl">Resource</h2>
        <p className="text-slate-500 mt-5 text-center ">
          Resource provides us with links to international websites that talk
          about autism in children, its causes, and other things.
        </p>
      </motion.div>
      <div 
      className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 lg:mx-20 my-10">
        {data?.data?.fullData?.slice(2, 5).map((resource) => (
          <motion.div 
          variants={fedIn('left', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
          key={resource?.position} className="flex">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-5">
                <div className="object-cover border-2  rounded-[50%]  p-2 border-blue-500">
                  <img src={resource?.favicon} alt="" className=" w-8 h-8 object-cover" />
                </div>
                <h2 className="text-2xl font-semibold">{resource.title}</h2>
              </div>
              <p className="text-gray-600 mt-4 mb-4">{resource.snippet}</p>
              <a
                href={resource.link}
                className="inline-block text-blue-500 hover:text-blue-700 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Article
              </a>
              <i className="fa-solid fa-arrow-right mx-2 text-blue-500"></i>
            </div>
          </motion.div>
        ))}
      </div>
      <div className=" flex justify-center items-center mx-auto">
        <Link to="resource">
        <button className="btn mt-2 ">
         <span className="btn-text-one">See More</span>
         <span className="btn-text-two">Great!</span>
        </button> 
        </Link>
        </div>
    </div>
  );
}
