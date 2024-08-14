import img2 from "../../assets/iPhone 15 Pro.png";
import logo from "../../assets/logos_google-play-icon.png";
import { motion } from 'framer-motion';
import { fedIn } from '../../variants';

export default function AppPart() {
  const features = [
    "For children 2 years and younger (between 11 and 30 months)",
    "Based on research with an 83% accuracy for detecting autism",
    "Features extensive video footage of children both with and without autism",
    "Contains 3 age-appropriate assessments for children aged 12, 18, and 24 months",
    "Based on world-class, rigorous research at the Olga Tennison Autism Research Centre"
  ];

  return (
    <div className="mx-auto py-11 min-h-[550px]">
      <motion.div
        variants={fedIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <h2 className="text-center font-bold text-2xl lg:text-4xl tracking-wider">
          Download App
        </h2>
      </motion.div>
      <div className="flex flex-wrap justify-center items-center mt-2">
        <motion.div
          variants={fedIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="mt-9 mx-auto lg:mx-5 w-fit min-w-80"
        >
          <img
            src={img2}
            alt="App Preview"
            className="lg:max-w-lg h-80 lg:h-[350px] object-cover"
          />
        </motion.div>
        <motion.div
          variants={fedIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="max-w-sm lg:max-w-2xl ml-4 mt-4 tracking-wider"
        >
          <p className="text-2xl text-slate-500 font-bold px-5 lg:px-0">
            Autism is a free app that empowers parents to assess their young children for early signs of autism
          </p>
          <ul className="text-slate-500 list-disc my-3 px-5 lg:px-0">
            {features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
          <div className="px-5 lg:px-0 flex justify-center items-center lg:flex-none">
          <button className="btn mt-3">
            <div className="flex justify-between items-center">
              <img src={logo} alt="Google Play Logo" className="w-4 ml-2" />
              <span className="btn-text-one">Download</span>
            </div>
            <span className="btn-text-two ml-2">By Google Play</span>
          </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}