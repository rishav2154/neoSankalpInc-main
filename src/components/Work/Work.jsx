import React from "react";
import { ExternalLink, Users, Zap, Shield, Grid3X3 } from "lucide-react";
import ViewMoreCard from "../ViewMoreCard";

const Work = () => {
  const products = [
    {
      id: 1,
      title: "Enterprise Analytics Platform",
      description: "Transform your data into actionable insights with our comprehensive analytics solution designed for enterprise-scale operations.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Zap className="w-6 h-6" />,
      features: ["Real-time dashboards", "Advanced reporting", "Custom integrations"],
      pricing: "Starting at $299/month",
      url: "https://analytics.neosankalp.com" // Replace with actual product URL
    },
    {
      id: 2,
      title: "Cloud Infrastructure Suite",
      description: "Scalable cloud solutions that grow with your business, featuring automated deployment and robust security protocols.",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Shield className="w-6 h-6" />,
      features: ["Auto-scaling", "99.9% uptime", "Global CDN"],
      pricing: "Starting at $199/month",
      url: "https://cloud.neosankalp.com" // Replace with actual product URL
    },
    {
      id: 3,
      title: "Team Collaboration Hub",
      description: "Streamline your workflow with our integrated collaboration platform that brings teams together regardless of location.",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Users className="w-6 h-6" />,
      features: ["Video conferencing", "Project management", "File sharing"],
      pricing: "Starting at $15/user/month",
      url: "https://collaboration.neosankalp.com" // Replace with actual product URL
    },
    {
      id: 4,
      title: "AI-Powered Marketing Suite",
      description: "Revolutionize your marketing campaigns with intelligent automation and predictive analytics.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Zap className="w-6 h-6" />,
      features: ["Predictive analytics", "Campaign automation", "Customer insights"],
      pricing: "Starting at $149/month",
      url: "https://marketing.neosankalp.com" // Replace with actual product URL
    },
    {
      id: 5,
      title: "Security Operations Center",
      description: "Comprehensive cybersecurity solution with 24/7 monitoring and threat detection capabilities.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Shield className="w-6 h-6" />,
      features: ["24/7 monitoring", "Threat detection", "Incident response"],
      pricing: "Starting at $499/month",
      url: "https://security.neosankalp.com" // Replace with actual product URL
    },
    {
      id: 6,
      title: "Customer Experience Platform",
      description: "Deliver exceptional customer experiences across all touchpoints with our unified CX platform.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Users className="w-6 h-6" />,
      features: ["Omnichannel support", "Customer journey mapping", "Satisfaction analytics"],
      pricing: "Starting at $89/month",
      url: "https://cx.neosankalp.com" // Replace with actual product URL
    },
    {
      id: 7,
      title: "Business Intelligence Suite",
      description: "Make data-driven decisions with our comprehensive BI platform featuring advanced analytics and reporting.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Zap className="w-6 h-6" />,
      features: ["Data visualization", "Predictive modeling", "Custom reports"],
      pricing: "Starting at $179/month",
      url: "https://bi.neosankalp.com" // Replace with actual product URL
    },
    {
      id: 8,
      title: "Digital Transformation Platform",
      description: "Accelerate your digital journey with our comprehensive transformation platform and expert guidance.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Grid3X3 className="w-6 h-6" />,
      features: ["Process automation", "Legacy modernization", "Change management"],
      pricing: "Starting at $399/month",
      url: "https://transformation.neosankalp.com" // Replace with actual product URL
    }
  ];

  const handleProductClick = (product) => {
    // Open product URL in new tab/window
    window.open(product.url, '_blank', 'noopener,noreferrer');
  };

  const handleViewMoreClick = () => {
    // Open a dedicated products page in new tab
    window.open('https://products.neosankalp.com', '_blank', 'noopener,noreferrer');
  };

  // Gallery View - Horizontal Products Scroll
  const displayProducts = products.slice(0, 5);

  return (
    <div className="py-16 px-32 max-xl:px-12 max-lg:px-5 bg-white" id="work">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-6xl max-[500px]:text-4xl text-text font-medium text-center mb-8">
          Check Out
          <span className="text-secondary ml-3">Our Products</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Scroll through our enterprise-grade solutions designed for modern businesses
        </p>
      </div>

      {/* Horizontal Products Scroll */}
      <div className="overflow-x-auto pb-6">
        <div className="flex space-x-6 w-max">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#154c79]/20 cursor-pointer w-96 flex-shrink-0"
              onClick={() => handleProductClick(product)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
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
                {/* External Link Indicator */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-[#154c79]" />
                </div>
              </div>

              {/* Product Content */}
              <div className="p-7">
                <p className="text-gray-600 mb-5 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="bg-[#154c79]/10 text-[#154c79] text-xs px-3 py-1 rounded-full font-medium">
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                      +{product.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* Visit Button */}
                <button className="w-full bg-[#154c79] hover:bg-[#1a5c8a] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group/button">
                  <span>Visit Product</span>
                  <ExternalLink className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}

          {/* View More Card */}
          <ViewMoreCard
            totalProducts={products.length}
            onViewMoreClick={handleViewMoreClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;