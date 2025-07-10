import React, { useState } from "react";
import { ExternalLink, Users, Zap, Shield, Grid3X3, Star, ArrowLeft } from "lucide-react";
import ViewMoreCard from "../ViewMoreCard";
import AllProductsView from "../AllProductsView";

const Work = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentView, setCurrentView] = useState('gallery');

  const products = [
    {
      id: 1,
      title: "Enterprise Analytics Platform",
      description: "Transform your data into actionable insights with our comprehensive analytics solution designed for enterprise-scale operations.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Zap className="w-6 h-6" />,
      features: ["Real-time dashboards", "Advanced reporting", "Custom integrations"],
      pricing: "Starting at $299/month",
      detailedDescription: "Our Enterprise Analytics Platform revolutionizes how businesses understand and utilize their data. Built for scale, it processes millions of data points in real-time, providing instant insights that drive strategic decisions.",
      benefits: [
        "Increase decision-making speed by 75%",
        "Reduce data processing time from hours to minutes",
        "Integrate with 200+ business applications",
        "Enterprise-grade security and compliance"
      ],
      testimonial: {
        text: "This platform transformed our data strategy completely. We now make decisions based on real-time insights rather than gut feelings.",
        author: "Sarah Johnson, CTO at TechCorp"
      }
    },
    {
      id: 2,
      title: "Cloud Infrastructure Suite",
      description: "Scalable cloud solutions that grow with your business, featuring automated deployment and robust security protocols.",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Shield className="w-6 h-6" />,
      features: ["Auto-scaling", "99.9% uptime", "Global CDN"],
      pricing: "Starting at $199/month",
      detailedDescription: "Deploy, scale, and manage your applications with confidence using our comprehensive cloud infrastructure suite. Built on enterprise-grade architecture with global reach and bulletproof security.",
      benefits: [
        "99.9% guaranteed uptime SLA",
        "Auto-scale based on demand",
        "Global edge locations for optimal performance",
        "Military-grade encryption and security"
      ],
      testimonial: {
        text: "The reliability and performance we get from this infrastructure suite is unmatched. Our applications have never been more stable.",
        author: "Michael Chen, DevOps Lead at StartupXYZ"
      }
    },
    {
      id: 3,
      title: "Team Collaboration Hub",
      description: "Streamline your workflow with our integrated collaboration platform that brings teams together regardless of location.",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Users className="w-6 h-6" />,
      features: ["Video conferencing", "Project management", "File sharing"],
      pricing: "Starting at $15/user/month",
      detailedDescription: "Break down silos and boost productivity with our all-in-one collaboration platform. Designed for modern teams, it combines communication, project management, and file sharing in one seamless experience.",
      benefits: [
        "Increase team productivity by 40%",
        "Reduce meeting time with smart scheduling",
        "Centralized file management and version control",
        "Seamless integration with existing tools"
      ],
      testimonial: {
        text: "Our remote team has never been more connected. This platform made collaboration effortless and actually enjoyable.",
        author: "Emma Rodriguez, Project Manager at DesignStudio"
      }
    },
    {
      id: 4,
      title: "AI-Powered Marketing Suite",
      description: "Revolutionize your marketing campaigns with intelligent automation and predictive analytics.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Zap className="w-6 h-6" />,
      features: ["Predictive analytics", "Campaign automation", "Customer insights"],
      pricing: "Starting at $149/month",
      detailedDescription: "Harness the power of artificial intelligence to create marketing campaigns that convert. Our suite analyzes customer behavior patterns and optimizes your marketing efforts in real-time.",
      benefits: [
        "Increase conversion rates by 60%",
        "Reduce marketing costs by 35%",
        "Automate 80% of repetitive tasks",
        "Real-time campaign optimization"
      ],
      testimonial: {
        text: "Our marketing ROI has never been higher. The AI insights help us target the right customers at the perfect moment.",
        author: "Lisa Park, Marketing Director at GrowthCo"
      }
    },
    {
      id: 5,
      title: "Security Operations Center",
      description: "Comprehensive cybersecurity solution with 24/7 monitoring and threat detection capabilities.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Shield className="w-6 h-6" />,
      features: ["24/7 monitoring", "Threat detection", "Incident response"],
      pricing: "Starting at $499/month",
      detailedDescription: "Protect your business with enterprise-grade security monitoring and response. Our SOC provides round-the-clock protection against evolving cyber threats.",
      benefits: [
        "99.99% threat detection accuracy",
        "Average 2-minute response time",
        "Compliance with major standards",
        "Dedicated security analysts"
      ],
      testimonial: {
        text: "Since implementing their SOC, we've had zero successful security breaches. The peace of mind is invaluable.",
        author: "David Kim, CISO at SecureTech"
      }
    },
    {
      id: 6,
      title: "Customer Experience Platform",
      description: "Deliver exceptional customer experiences across all touchpoints with our unified CX platform.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Users className="w-6 h-6" />,
      features: ["Omnichannel support", "Customer journey mapping", "Satisfaction analytics"],
      pricing: "Starting at $89/month",
      detailedDescription: "Transform customer interactions into lasting relationships. Our platform unifies all customer touchpoints to deliver consistent, personalized experiences that drive loyalty.",
      benefits: [
        "Increase customer satisfaction by 45%",
        "Reduce support tickets by 30%",
        "Improve first-call resolution by 50%",
        "360-degree customer view"
      ],
      testimonial: {
        text: "Our customer satisfaction scores have reached all-time highs. This platform made customer service our competitive advantage.",
        author: "Rachel Green, Customer Success Manager at ServicePro"
      }
    },
    {
      id: 7,
      title: "Business Intelligence Suite",
      description: "Make data-driven decisions with our comprehensive BI platform featuring advanced analytics and reporting.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Zap className="w-6 h-6" />,
      features: ["Data visualization", "Predictive modeling", "Custom reports"],
      pricing: "Starting at $179/month"
    },
    {
      id: 8,
      title: "Digital Transformation Platform",
      description: "Accelerate your digital journey with our comprehensive transformation platform and expert guidance.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Grid3X3 className="w-6 h-6" />,
      features: ["Process automation", "Legacy modernization", "Change management"],
      pricing: "Starting at $399/month"
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
  };

  const handleBackToGallery = () => {
    setCurrentView('gallery');
    setSelectedProduct(null);
  };

  const handleViewMoreClick = () => {
    setCurrentView('all-products');
  };

  const handleBackFromAllProducts = () => {
    setCurrentView('gallery');
  };

  // All Products View
  if (currentView === 'all-products') {
    return (
      <AllProductsView
        products={products}
        onBackClick={handleBackFromAllProducts}
        onProductClick={handleProductClick}
      />
    );
  }

  // Product Detail View
  if (currentView === 'detail' && selectedProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button
            onClick={handleBackToGallery}
            className="inline-flex items-center space-x-2 text-[#154c79] hover:text-[#1a5c8a] font-semibold mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Gallery</span>
          </button>

          {/* Product Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#154c79] text-white p-3 rounded-xl">
                  {selectedProduct.icon}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {selectedProduct.title}
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {selectedProduct.detailedDescription || selectedProduct.description}
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-bold text-[#154c79]">
                  {selectedProduct.pricing}
                </span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-600 ml-2">(4.9/5)</span>
                </div>
              </div>
              <button className="bg-[#154c79] hover:bg-[#1a5c8a] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
            </div>
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Key Benefits */}
          {selectedProduct.benefits && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedProduct.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Core Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {selectedProduct.features.map((feature, index) => (
                <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#154c79]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-[#154c79] rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature}</h3>
                  <p className="text-gray-600">
                    Advanced {feature.toLowerCase()} capabilities designed for enterprise needs.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {selectedProduct.testimonial && (
            <div className="bg-gradient-to-r from-[#154c79] to-[#1a5c8a] rounded-3xl p-8 md:p-12 text-center text-white mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                  "{selectedProduct.testimonial.text}"
                </blockquote>
                <cite className="text-blue-200 font-semibold">
                  — {selectedProduct.testimonial.author}
                </cite>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

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

                {/* View Button */}
                <button className="w-full bg-[#154c79] hover:bg-[#1a5c8a] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group/button">
                  <span>Learn More</span>
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