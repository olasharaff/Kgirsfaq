import React, { useState } from 'react'
import { HiOutlinePlus } from "react-icons/hi";
import { FaqContent, SecFaqs } from "../data/FaqData";

export default function Faqs() {
  const [faqsOpen, setFaqsOpen] = useState(
    Array(FaqContent.length).fill(false)
  );
  const [secOpen, setSecOpen] = useState(Array(SecFaqs.length).fill(false));

  const handleClickFaqs = (index) => {
    const newFaqsOpen = [...faqsOpen];
    newFaqsOpen[index] = !newFaqsOpen[index];
    setFaqsOpen(newFaqsOpen);
    const newSecOpen = [...secOpen];
    newSecOpen[index] = !newSecOpen[index];
    setSecOpen(newSecOpen);
  };
  return (

       <div className="lg:mt-[7%] mt-[30%]">
        <div className="max-w-6xl px-6 mx-auto my-20">
          <h1 className="text-base font-bold mb-6 text-[#7234F5]">FAQs</h1>
          <p className="lg:text-5xl font-bold text-3xl">
            Some of the Questions you might have
          </p>
        </div>
        {/* faq question */}
        <div className="max-w-6xl px-6 mx-auto my-20">
          <h1 className="text-3xl font-bold mb-6">General</h1>

          {FaqContent.map((faq, index) => (
            <div
              key={index}
              className={`cursor-pointer ${faqsOpen[index] ? "bg-black" : ""}`}
              onClick={() => handleClickFaqs(index)}
            >
              <div className="lg:px-10 px-6 border-b border-gray-300 py-7">
                <div
                  className={`flex justify-between items-center ${
                    faqsOpen[index] ? "text-white" : ""
                  } mb-6`}
                >
                  <h1 className="font-bold text-lg">{faq.question}</h1>
                  <p className="border border-gray-200 lg:text-base lg:px-4 lg:py-2 text-xs px-3 py-2 rounded-lg">
                    <HiOutlinePlus />
                  </p>
                </div>
                {faqsOpen[index] && (
                  <p className={faqsOpen[index] ? "text-white" : ""}>
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* security question */}
        <div className="max-w-6xl px-6 mx-auto my-20">
          <h1 className="text-3xl font-bold mb-6">Payment</h1>

          {SecFaqs.map((sec, index) => (
            <div
              key={index}
              className={`cursor-pointer ${faqsOpen[index] ? "bg-black" : ""}`}
              onClick={() => handleClickFaqs(index)}
            >
              <div className="lg:px-10 px-6 border-b border-gray-300 py-7">
                <div
                  className={`flex justify-between items-center ${
                    faqsOpen[index] ? "text-white" : ""
                  } mb-6`}
                >
                  <h1 className="font-bold text-lg">{sec.question}</h1>
                  <p className="border border-gray-200 lg:text-base lg:px-4 lg:py-2 text-xs px-3 py-2 rounded-lg">
                    <HiOutlinePlus />
                  </p>
                </div>
                {secOpen[index] && (
                  <p className={faqsOpen[index] ? "text-white" : ""}>
                    {sec.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
