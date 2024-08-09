import img2 from "../../assets/iPhone 15 Pro.png";
import logo from "../../assets/logos_google-play-icon.png";

export default function AppPart() {
  return (
    <div className=" mx-auto  py-10 min-h-[550px]">
      <div>
        <h2 className=" text-center font-bold text-2xl lg:text-4xl tracking-wider">
          Download App
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-4">
        <div className=" mt-9 mx-auto lg:mx-5 w-fit min-w-80">
          <img
            src={img2}
            alt=""
            className="lg:max-w-lg h-80 lg:h-[400px]  object-cover"
          />
        </div>
        <div className=" max-w-sm lg:max-w-md ml-5 lg:ml-2 mt-4 tracking-wider">
          <p className=" text-2xl text-slate-500 font-bold ">
            Autism is a free app that empowers parents to assess thier young
            childern for early signs of autism
          </p>
          <ul className="text-slate-500 list-disc my-2">
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
          <button className="btn mt-2">
            <div className=" flex justify-between items-center">
              <img src={logo} alt="" className="w-4 ml-2 " />
              <span className="btn-text-one">Download</span>
            </div>
            {/* <span className="btn-text-one"> <img src={logo} alt="" className="w-5 text-center"/>Download</span> */}
            <span className="btn-text-two">By Google Play</span>
          </button>
        </div>
      </div>
    </div>
  );
}
