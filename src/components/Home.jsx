import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  
  return (
    <div className="overflow-hidden">
      
      <section className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Master React Props
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
             Explore Hands-on excercises to understand React properties and Build dynamic components
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link 
                to="/practice" 
                className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-bold text-lg 
                         transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/30"
              >
                Start Practicing
              </Link>
             
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6">
              Why Learn Props ?
            </h1>
            <p className="text-xl md:text-2xl text-black-100 max-w-3xl mx-auto leading-relaxed">
             Props allow you to pass data between components, making your React application modular and reusable. Start practicing to see how Props work in real-world scenarious</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
             
             
            </div>
          </div>
        </div>
      </section>

    </div> 
  );
}