import HeaderData from "../data/NavData"
import {Link} from "react-router-dom";
import KgirsLogo from "../../assets/kgirs.png";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(0);

  const handleActiveMenu = (menu)=>{
    setIsActiveMenu(menu);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <header className="bg-[#014421] text-white border-b-2 border-gray-500 navbar-header">
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-5">
          <div>
            <img
              src={KgirsLogo}
              alt="Kgirs Logo"
              loading="lazy"
              className="w-32"
            />
          </div>
          <ul className="lg:flex justify-between items-center gap-6 hidden">
            {HeaderData.map((items, id) => (
              <li
                key={id}
                className={
                  `text-sm hover:text-gray-300 ${isActiveMenu === id ? "underline" : ""}`
                }
                onClick={() => handleActiveMenu(id)}
              >
                <Link to={items.link}>{items.title}</Link>
              </li>
            ))}
          </ul>
          <div>
            <button className="bg-[#006400] text-[#fff] px-4 py-2 rounded hover:bg-[#d1a030] lg:flex hidden">
              Pay Now
            </button>
          </div>
          <button onClick={toggleMenu} className="lg:hidden">
            {isMenuOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </nav>
        <div>
          {isMenuOpen && (
            <div className="sticky w-full h-full z-50 bg-[#2c694a] border-t-2 border-gray-500">
              <ul className="flex flex-col items-center justify-center gap-6 pt-4 pb-3">
                {HeaderData.map((items) => (
                  <li className="text-sm ">
                    <Link to={items.link} key={items.id}>
                      {items.title}
                    </Link>
                  </li>
                ))}
                <button className="bg-[#006400] text-[#fff] px-4 py-2 rounded hover:bg-[#d1a030]">
                  Pay Now
                </button>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
