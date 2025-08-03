import KgirsLogo from "../../assets/klogo.jpeg";
import { Link } from "react-router-dom";
import FooterData from "../data/FooterData.js";
import * as Fa from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

export default function Footer() {
  return (
    <>
      <footer className=" text-black mt-20 p-2 mb-2">
        <div className="flex justify-between max-w-6xl mx-auto px-6 gap-4">
          <div className="max-w-xs">
            <div className="flex flex-nowrap justify-center items-center max-w-[250px] mb-2">
              <img src={KgirsLogo} alt="Logo" className="w-16" />
              <span className="font-extrabold">
                Kogi State Internal Revenue Service{" "}
              </span>
            </div>

            <p>
              KGIRS is the operational arm of the Kogi State Government
              responsible for the collection of taxes and other revenues.
            </p>
          </div>
          <div className="flex justify-between items-center gap-10">
            {FooterData.map((items, id) => (
              <div key={id} className="text-sm space-y-2">
                <h1 className="text-lg font-semibold mb-2">
               
                  {items.head} 
                </h1>
                <p>
                  <Link to={items.para1.link}>{items.para1.para}</Link>
                </p>
                <p>
                  <Link to={items.para2.link}>{items.para2.para}</Link>
                </p>
                <p>
                  <Link to={items.para3.link}>{items.para3.para}</Link>
                </p>
              </div>
            ))}
          </div>
        </div>
        <attribution className="flex lg:justify-between items-center flex-wrap justify-center text-center max-w-6xl mx-auto px-6">
          <div>
            <p>© 2025 Kgirs, Inc.</p>
          </div>
          <div className="flex items-center justify-center flex-wrap lg:ml-4 ml-4 lg:gap-7 gap-4  main-attribute ">
            <div className="flex gap-7 mb-0  sec-attribute">
              <Fa.FaInstagram className="text-gray-500 text-xl hover:text-pink-400 hover:text-3xl transition-all duration-300 ease-in-out cursor-pointer" />{" "}
              <Fa.FaTwitter
                className="text-gray-500 text-xl hover:text-black hover:text-3xl transition-all duration-300 ease-in-out cursor-pointer"
                cursor-pointer
              />{" "}
              <Fa.FaWhatsapp className="text-gray-500 text-xl hover:text-green-600 hover:text-3xl transition-all duration-300 ease-in-out cursor-pointer" />{" "}
              <Fa.FaFacebook className="text-gray-500 text-xl hover:text-blue-600 hover:text-3xl transition-all duration-300 ease-in-out cursor-pointer" />
            </div>
            <div className="flex lg:gap-2 gap-4 third-attribute">
              <button className="flex items-center whitespace-nowrap  bg-[#006400] hover:bg-[#22543D] cursor-pointer text-white  px-4   rounded-full">
                Android <Fa.FaGooglePlay className="ml-3 cursor-pointer" />
              </button>
              <button className="flex items-center whitespace-nowrap lg:text-base text-sm bg-[#006400] hover:bg-[#22543D] text-white cursor-pointer  px-5 py-2 rounded-full">
                iOS <GrAppleAppStore className="ml-3 cursor-pointer" />
              </button>
            </div>
          </div>
        </attribution>
      </footer>
    </>
  );
}
