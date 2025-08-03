import React from 'react'
import PrinData from '../data/PrinData.js'

export default function Principal() {
  return (
    <div>
      <div>
        <h1>Our Principals Officer</h1>
        <p>Meet the Experts Behind Your Financial Growth </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-4 py-6 "> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {PrinData.map((principal)=>(
            <div key={principal.id} className='shadow-lg rounded-lg p-4 bg-white'>
            <img src={principal.img} alt={principal.name} className="w-full  object-cover rounded-lg" />
            <h2 className="text-xl font-bold mt-2">{principal.name}</h2>
            <p className="text-gray-600 italic text-sm">{principal.desig}</p>
            <p className="mt-2 text-gray-800">{principal.about}</p>

            </div>
          ))}
        </div>
      </div>
       
      </div>
  
  );
}
