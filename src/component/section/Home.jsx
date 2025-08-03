import React from 'react'
import TaxData from '../data/TaxData.jsx';
import { Link } from 'react-router-dom';
import { FaBuildingColumns } from "react-icons/fa6";
import klogo from '../../assets/klogo.jpeg'
import firs from '../../assets/firsmini.png'
import aoc from '../../assets/aoc.png'
import suf from '../../assets/suf.png'
import jtb from '../../assets/jtb.jpeg'
import backgrd from '../../assets/backgrd.jpeg'

export default function Home() {


  return (
    <div>
      {/* Main Home */}
      <div
        className={` text-white p-4 lg:mt-[4.8%] mt-[18%] h-[26rem] `}
        style={{
          backgroundImage: `url(${backgrd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-4xl mx-auto  text-8xl p-8 text-black font-extrabold">
          <h1>Welcome to the Revenue House</h1>
        </div>
      </div>
      {/* Tax: What you should section */}
      <div className="max-w-6xl mx-auto px-6 mt-4 py-6 text-center  ">
        <h1 className="text-4xl font-extrabold p-8">
          Tax: What you need to know
        </h1>
        <div className="flex flex-wrap justify-center  px-6 mt-4 gap-4 text-left">
          {TaxData.map((tax) => (
            <div
              key={tax.id}
              className={`space-y-2 max-w-[220px] mx-auto  p-3 shadow-2xl rounded-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="border-1 border-yellow-100 p-3 inline-block">
                <span className="text-5xl text-red-600 ">{tax.taxIcon}</span>
              </div>

              <h2 className="font-extrabold text-lg">{tax.title}</h2>
              <p className="text-base">{tax.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 align-text-bottom text-center items-center">
                <Link to={tax.to}>{tax.btn}</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Our Partner */}
      <div className="py-16">
        <div className="text-center">
          <span className="text-5xl font-extrabold p-2 ">Our Partners</span>
          <p className="text-gray-400 text-lg p-2">
            We operate more efficiently by forming strategic partnerships
          </p>
        </div>

        <div className="flex gap-12 justify-between max-w-3xl mx-auto px-6 mt-2 p-2 items-center">
          <img src={klogo} alt="Kogi" className="max-w-[50px] cursor-pointer hover:max-w-[90px]" />
          <img src={firs} alt="Firs" className="max-w-[60px]  cursor-pointer hover:max-w-[100px]" />
          <img src={aoc} alt="Amb" className="max-w-[60px] cursor-pointer hover:max-w-[90px]" />
          <img src={jtb} alt="JTB" className="max-w-[90px] cursor-pointer hover:max-w-[120px]" />
          <img src={suf} alt="JTB" className="max-w-[90px] cursor-pointer hover:max-w-[120px]" />
        </div>
      </div>
      {/* Area Tax Office */}
      <div className="flex justify-between items-center  gap-10 max-w-4xl mx-auto px-6 mt-4 py-10 ">
        <div className="shadow-lg transition-shadow duration-300 hover:scale-105 p-6">
          <FaBuildingColumns className="text-[15rem] text-green-400" />
        </div>
        <div className="max-w-sm ">
          <h1 className="text-5xl font-extrabold">
            Find Our Tax Station Around Kogi
          </h1>
          <button className="bg-green-100 px-4 py-2 rounded hover:bg-green-800 cursor-pointer">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
