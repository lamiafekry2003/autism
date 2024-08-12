import { useState } from "react";
import img3 from "../../assets/about.png"
// motion
import { motion } from 'framer-motion';
// variants
import {fedIn} from '../../variants'
export default function About() {
  // const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  
  const faqs = [
    {
      question: "What is Autism?",
      answer: "Autism, or autism spectrum disorder (ASD), is a developmental disorder that affects communication, behavior, and interaction with others.",
    },
    {
      question: "How can I get support?",
      answer: "There are various resources available, including local support groups, therapy, and online communities.",
    },
    {
      question: "What are the symptoms of Autism?",
      answer: "Common symptoms include difficulties in social interaction, repetitive behaviors, and challenges with speech and nonverbal communication.",
    },
    {
      question: 'Can I also use ASDetect to check my older child’s development?',
      answer: 'ASDetect is specifically designed to measure social-communicative milestones from 11 to 30 months of age. Therefore, the likelihood of any children older than 30 months of age having autism cannot be accurately determined by ASDetect (although the 24 month assessment is still valid up until 30 months). This is because we don’t yet have an evidence base for these assessments,'
    }
  ];
  
  // const toggleAnswer = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  const openModal = (faq) => {
    setSelectedQuestion(faq);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  // const toggleModal = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
   <>
    <div className="pt-11">
      <div className=" mx-auto  py-11 min-h-[550px] ">
      <motion.div
       variants={fedIn('up', 0.2)} 
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.7 }}
      >
        <h2 className=" text-center font-bold text-2xl lg:text-4xl tracking-wider">
        Welcome To Autism Web
        </h2>
      </motion.div>
      <div className=" flex flex-wrap justify-center items-center">
        <motion.div 
         variants={fedIn('right', 0.2)} 
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7 }}
        className=" mt-9 mx-auto lg:mx-5 w-fit min-w-80">
          <img
            src={img3}
            alt=""
            className=" w-80 lg:w-full h-80 object-cover rounded"
          />
        </motion.div>
        <motion.div 
         variants={fedIn('left', 0.2)} 
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7 }}
        className=" max-w-sm lg:max-w-md ml-2 mt-4 tracking-wider">
          <p className=" text-slate-500  mt-5 mx-3">
            Autism provide ,provide a community for Autism and test for parents
            and caregivers of children aged 11 to 30 months, the downloaded
            90,000 times. FREE app Austism was launched in 2024 and has been It
            is based on research by the Olga Tennison Autism Research Centre at
            La Trobe University, Australia. The early autism detection method
            used in ASDetect is 83% accurate. It is based on research by the
            Olga Tennison Autism Research Centre at La Trobe University,
            Australia. The early autism detection method used in ASDetect is 83%
            accurate.
          </p>
        </motion.div>
      </div>
    </div>
    {/* quse */}
    <div className="container mx-auto p-10 bg-gray-100">
      <motion.div
       variants={fedIn('up', 0.2)} 
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.7 }}
      >
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Frequently Asked Questions
      </h2>
      </motion.div>
      <motion.div 
       variants={fedIn('left', 0.2)} 
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.7 }}
      className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" p-4"
          >
            <div
              className=" cursor-pointer"
              onClick={() => openModal(faq)}
            >
              <span></span>
              <h3 className="text-lg font-semibold text-blue-500 ">
                {faq.question}
              </h3>
              {/* <span className="text-blue-600">
                {activeIndex === index ? "-" : "+"}
              </span> */}
            </div>
            {/* {activeIndex === index && (
              <div className="mt-3 text-gray-700">
                <p>{faq.answer}</p>
                <button
                  onClick={() => openModal(faq)}
                  className="text-blue-600 mt-2 hover:underline"
                >
                  Read more
                </button>
              </div>
            )} */}
          </div>
        ))}
      </motion.div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              {selectedQuestion.question}
            </h3>
            <p className="text-gray-700">{selectedQuestion.answer}</p>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
    </div>




   </>
  )
}
