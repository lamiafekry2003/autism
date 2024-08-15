
import img from "../../assets/image 14.png";
import img3 from "../../assets/about.png";
import { useState } from "react";
import { motion } from 'framer-motion';
import { fedIn } from '../../variants';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  
  const faqs = [
    {
      question: "How sensitive is Autism?",
      answer: "While Autism is not a diagnostic tool, the method on which the app is based is 83% accurate in identifying early signs of autism. However, no autism surveillance or screening method is perfectly accurate, so there is a chance that either:A child could be assessed as ‘low likelihood’ and still go on to meet criteria for autism later in life, orA child could be assessed as ‘high likelihood’ and after formal developmental assessment by a health professional, not receive a diagnosis of autism.Regardless of the assessment result in ASDetect, parents should still seek professional advice if they have concerns about their children.",
    },
    {
      question: "My child was born prematurely; should I put in their actual birth date or their adjusted birth date?",
      answer: "Autism will prompt your to select the number of weeks gestation that applies to your child.",
    },
    {
      question: "Can Autism be installed on iPads and tablets?",
      answer: "Yes. Autism can be installed on iPads, iPhones as well as Android phones and tablets.",
    },
    {
      question: 'My child was assessed by ASDetect as “low likelihood” for autism, but he/she got a number of atypical results; what should I do?',
      answer: 'It is not uncommon to receive an ASDetect assessment of “low likelihood” for autism, but still receive atypical results for a number of behaviours. This is because ASDetect determines your child’s “likelihood” for autism based on whether your child is meeting very specific behavioural milestones for their age, which is based on research. As children develop at slightly different rates, not all children are displaying ALL of the behaviours in ASDetect. Furthermore, please note that ASDetect is designed to measure a child’s likelihood for autism specifically; therefore, the assessment results are not indicative of a child’s likelihood for other developmental conditions, such as developmental or language delay.'
    },
    {
      question: ' My child has been assessed by ASDetect as ‘high likelihood” for autism; what should I do?',
      answer: 'Your next step is to seek a formal developmental assessment for autism. See your primary healthcare physician or general practitioner (doctor), who can advise on who is qualified to perform autism assessments in your area.'
    },
    {
      question: ' ASDetect said that my child had a “high likelihood” for autism, but following a formal assessment no autism diagnosis was made; why is this?',
      answer: 'It’s important to remember that ASDetect does not provide a diagnosis. A formal assessment is the only method that can lead to an autism diagnosis. However, if you continue to have concerns about your child’s development, you should discuss these with your primary healthcare physician or general practitioner (doctor).'
    }
  ];
  const openModal = (faq) => {
    setSelectedQuestion(faq);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      {/* Section 1 */}
      <div className="mx-auto py-6 lg:py-10   max-w-full xl:min-h-[100vh]">
        <div className="flex flex-col justify-center items-center relative">
          <img
            src={img}
            alt="About Background"
            className="w-full object-cover h-[100vh]"
          />
          <h2 className="absolute inset-0 flex justify-center items-center text-center text-3xl lg:text-7xl font-bold text-blue-500 opacity-40">
            About
          </h2>
        </div>
      </div>
      
      {/* Section 2 */}
      {/* <div className="mx-auto mb-6 lg:mb-8 min-h-[60vh] lg:min-h-[100vh]">
        <div className="flex flex-col lg:flex-row lg:gap-12 justify-center items-center px-4 lg:px-0 ">
          <motion.div 
          variants={fedIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="order-2 lg:order-1 max-w-xs md:max-w-sm lg:max-w-md tracking-wider">
            <h2 className="text-2xl lg:text-4xl my-2 font-bold">
              Our Website{`'`}s Goal is
            </h2>
            <h2 className="text-2xl lg:text-4xl my-2 font-bold">
              How to Use the App for
            </h2>
            <span className="block text-2xl lg:text-4xl font-bold my-2 text-blue-500">
              Autism Detection
            </span>
            <p className="text-slate-500 leading-9">
              FREE app Austism was launched in 2024 and has been parents and
              caregivers of children aged 11 to 30 months, the parents and
              caregivers of children aged 11 to 30 months, the Autism provide
              ,provide a community for Autism and test for Autism provide
              ,provide a community for Autism and test for It is based on
              research by the Olga Tennison Autism Research It is based on
              research by the Olga Tennison Autism Research Centre at La Trobe
              University, Australia. The early autism detection method used in
              ASDetect is 83% accurate.
            </p>
          </motion.div>

          <div 
          className="order-1 lg:order-2 lg:w-auto mt-0 lg:ml-5">
            <img
              src={img3}
              alt="About Image"
              className="w-80 lg:w-96 h-[400px] lg:h-[600px] object-cover rounded-md mx-auto"
            />
          </div>
        </div>
      </div> */}
      <div className="mx-auto mb-6 lg:mb-8 min-h-[60vh]  lg:min-h-[100vh]">
  <div className="flex flex-col lg:flex-row lg:gap-12 justify-center items-center px-4 lg:px-0">
    <motion.div 
      variants={fedIn('left', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="order-2 lg:order-1 max-w-xs md:max-w-sm lg:max-w-md tracking-wider"
    >
      <h2 className="text-2xl lg:text-4xl my-2 font-bold">
        Our Website{`'`}s Goal is
      </h2>
      <h2 className="text-2xl lg:text-4xl my-2 font-bold">
        How to Use the App for
      </h2>
      <span className="block text-2xl lg:text-4xl font-bold my-2 text-blue-500">
        Autism Detection
      </span>
      <p className="text-slate-500 leading-9">
        FREE app Autism was launched in 2024 and has been parents and
        caregivers of children aged 11 to 30 months, the parents and
        caregivers of children aged 11 to 30 months. Autism provides
        a community for Autism and tests for Autism. It is based on
        research by the Olga Tennison Autism Research Centre at La Trobe
        University, Australia. The early autism detection method used in
        ASDetect is 83% accurate.
      </p>
    </motion.div>

    <div 
      className="order-1 lg:order-2 lg:w-auto mt-0 lg:ml-5">
      <img
        src={img3}
        alt="About Image"
        className="w-80 lg:w-96 h-[400px] lg:h-[600px] object-cover rounded-md mx-auto"
      />
    </div>
  </div>
</div>

      {/* Section 3 */}
      <div className="mx-auto py-10 lg:px-10 min-h-[750px] max-w-full xl:min-h-[100vh] bg-gray-100">
        <motion.div
        variants={fedIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} 
        className=" "
        >
          <h2 className="text-3xl font-bold text-center mb-10 mx-1">Frequently Asked Questions</h2>
        </motion.div>
        <div >
          {faqs.map((faq, index) => (
            <motion.div
            variants={fedIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
              key={index}
              className="p-7"
            >
              <div
                className="cursor-pointer flex gap-3"
                onClick={() => openModal(faq)}
              >
                <span className="font-bold inline-flex justify-center items-center p-1 w-6 h-6 text-blue-500 rounded-full border-2 border-blue-500  hover:text-white hover:bg-blue-500">
                  ?
                </span>
                <h3 className="text-base lg:text-lg font-semibold hover:underline hover:text-blue-500">
                  {faq.question}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              {selectedQuestion.question}
            </h3>
            <hr />
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
  );
}