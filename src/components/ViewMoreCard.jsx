import React from 'react';
import { Grid3X3, ArrowRight } from 'lucide-react';

const ViewMoreCard = ({ totalProducts, onViewMoreClick }) => {
  return (
    <div
      className="group bg-gradient-to-br from-[#154c79] to-[#1a5c8a] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer w-96 flex-shrink-0 relative"
      onClick={onViewMoreClick}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4">
          <Grid3X3 className="w-8 h-8 text-white" />
        </div>
        <div className="absolute top-16 right-8">
          <Grid3X3 className="w-6 h-6 text-white" />
        </div>
        <div className="absolute bottom-16 left-8">
          <Grid3X3 className="w-4 h-4 text-white" />
        </div>
        <div className="absolute bottom-8 right-4">
          <Grid3X3 className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center p-8 text-center text-white min-h-[400px]">
        <div className="mb-6">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <Grid3X3 className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2">View All Products</h3>
          <p className="text-white/90 text-lg">
            Explore our complete collection
          </p>
        </div>

        <div className="mb-6">
          <div className="text-4xl font-bold mb-2">{totalProducts}</div>
          <p className="text-white/80">Enterprise Solutions</p>
        </div>

        <div className="flex items-center space-x-2 text-white/90 group-hover:text-white transition-colors duration-300">
          <span className="font-semibold">Discover More</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default ViewMoreCard;