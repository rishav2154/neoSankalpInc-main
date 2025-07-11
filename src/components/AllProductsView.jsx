import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const AllProductsView = ({ products, onBackClick, onProductClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBackClick}
          className="inline-flex items-center space-x-2 text-[#154c79] hover:text-[#1a5c8a] font-semibold mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Gallery</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our complete collection of {products.length} enterprise-grade solutions
          </p>
          <div className="w-24 h-1 bg-[#154c79] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#154c79]/20 cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="text-[#154c79]">
                    {product.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl mb-1">
                    {product.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {product.pricing}
                  </p>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="bg-[#154c79]/10 text-[#154c79] text-xs px-3 py-1 rounded-full font-medium">
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                      +{product.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Button */}
                <button className="w-full bg-[#ff7161] hover:bg-[#ff6f61] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group/button">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductsView;