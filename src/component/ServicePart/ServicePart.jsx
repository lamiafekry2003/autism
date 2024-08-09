export default function ServicePart() {
  return (
    <div className="  mx-auto min-h-[550px] bg-gray-100 py-10">
     <div className="mx-auto w-fit">
     <div className="tracking-wider">
        <h2 className=" text-center font-bold text-2xl lg:text-4xl">
          Who We Services
        </h2>
        <p className="text-slate-500  mt-5 text-center ml-2">
          We provide auailty behavioral services based on the principles of
          applied Behavior analysis .ABA and Behavioral Services are provided to
          childern and adults with:
        </p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-4  sm:grid-cols-3 my-8 text-center">
        <div className=" flex flex-col justify-center items-center mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center ">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full">Autism Spectrum Disorder</p>
        </div>
        <div className=" flex flex-col justify-center items-center  mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center ">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full">Testing Autism</p>
        </div>
        <div className=" flex flex-col justify-center items-center  mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center ">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full"> Communicty</p>
        </div>
        <div className=" flex flex-col justify-center items-center  mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center ">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full">Resources</p>
        </div>
        <div className=" flex flex-col justify-center items-center  mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center lg:mt-4">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full">Awaraness Videos</p>
        </div>
        <div className=" flex flex-col justify-center items-center  mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center lg:mt-4">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full"> Testing Using child image</p>
        </div>
        <div className=" flex flex-col justify-center items-center  mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center lg:mt-4">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full"> Testing Using Drowing image</p>
        </div>
        <div className=" flex flex-col justify-center items-center  mx-auto my-5 bg-white shadow-xl w-60 h-[150px] rounded-md text-center lg:mt-4">
          <div className=" flex justify-center items-center w-10 h-10 border-2 border-blue-500 rounded-full mb-4">
            <i className="fa-solid fa-check text-blue-500 text-2xl"></i>
          </div>
          <p className=" w-full"> Testing Using Coloring image</p>
        </div>
      </div>
      <div className=" flex justify-center items-center mx-auto">
        <button className="btn mt-2 ">
         <span className="btn-text-one">See More</span>
         <span className="btn-text-two">Great!</span>
        </button> 
        </div>
     </div>
    </div>
  );
}
