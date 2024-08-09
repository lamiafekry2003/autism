import logo from "../../assets/logo (2).png"
export default function Footer() {
  return (
    <div className=" mx-auto  py-10 min-h-[200px] bg-blue-500">
      <ul className="font-medium flex  justify-center p-4 md:p-0 mt-4   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   ">
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-white "
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white">
            About
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white">
            App
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white">
            Resource
          </a>
        </li>
      </ul>
      <div className="flex justify-center items-center my-6">
        <div className=" flex justify-center items-center w-6 h-6 border-2 border-white rounded-full mx-3">
          <i className="fa-brands fa-facebook-f text-white  "></i>
        </div>
        <p className=" text-white">Follow Us On Facebook</p>
      </div>
      <p className=" text-white text-center">@2024  Autism App , All Right Reserved</p>
      <div className=" flex justify-center items-center">
          <img src={logo} alt="" className="h-8 mx-3" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white my-6">
           Autism
          </span>
      </div>
    </div>
  );
}
