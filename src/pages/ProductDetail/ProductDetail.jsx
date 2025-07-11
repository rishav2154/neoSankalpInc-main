import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ExternalLink, Users, Zap, Shield, Grid3X3, Star, ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Enterprise Analytics Platform",
      description: "Transform your data into actionable insights with our comprehensive analytics solution designed for enterprise-scale operations.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Zap className="w-6 h-6" />,
      features: ["Real-time dashboards", "Advanced reporting", "Custom integrations"],
      pricing: "Starting at $299/month",
      images: [
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
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
      images: [
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
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
      images: [
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
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
      images: [
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
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
      images: [
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
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
      images: [
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
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
      pricing: "Starting at $179/month",
      images: [
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      detailedDescription: "Transform raw data into strategic insights with our comprehensive Business Intelligence Suite. Built for decision-makers, it provides real-time analytics and predictive modeling capabilities.",
      benefits: [
        "Improve decision accuracy by 65%",
        "Reduce reporting time by 80%",
        "Identify trends 3x faster",
        "Custom dashboard creation"
      ],
      testimonial: {
        text: "The insights we get from this BI suite have completely changed how we approach strategic planning. Data-driven decisions are now our norm.",
        author: "Mark Thompson, VP of Strategy at DataCorp"
      }
    },
    {
      id: 8,
      title: "Digital Transformation Platform",
      description: "Accelerate your digital journey with our comprehensive transformation platform and expert guidance.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Grid3X3 className="w-6 h-6" />,
      features: ["Process automation", "Legacy modernization", "Change management"],
      pricing: "Starting at $399/month",
      images: [
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      detailedDescription: "Navigate your digital transformation journey with confidence. Our platform combines cutting-edge technology with expert guidance to modernize your business processes and drive innovation.",
      benefits: [
        "Accelerate transformation by 50%",
        "Reduce operational costs by 40%",
        "Improve process efficiency by 70%",
        "Expert guidance and support"
      ],
      testimonial: {
        text: "This platform made our digital transformation seamless. We went from legacy systems to modern, efficient processes in record time.",
        author: "Jennifer Adams, CTO at ModernTech"
      }
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  const handleStartFreeTrial = () => {
    window.location.href = '/call';
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => window.close()}
            className="bg-[#154c79] hover:bg-[#1a5c8a] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
          >
            Close Window
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Close Button */}
        <button
          onClick={() => window.close()}
          className="inline-flex items-center space-x-2 text-[#154c79] hover:text-[#1a5c8a] font-semibold mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Close</span>
        </button>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#154c79] text-white p-3 rounded-xl">
                {product.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {product.title}
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {product.detailedDescription || product.description}
            </p>
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-3xl font-bold text-[#154c79]">
                {product.pricing}
              </span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-gray-600 ml-2">(4.9/5)</span>
              </div>
            </div>
            <button 
              onClick={handleStartFreeTrial}
              className="bg-[#ff7161] hover:bg-[#ff6f61] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </button>
          </div>
          <div className="relative">
            <div className="w-full h-96 rounded-2xl shadow-2xl overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
              >
                {(product.images || [product.image]).map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${product.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        {product.benefits && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.benefits.map((benefit, index) => (
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
            {product.features.map((feature, index) => (
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
        {product.testimonial && (
          <div className="bg-gradient-to-r from-[#154c79] to-[#1a5c8a] rounded-3xl p-8 md:p-12 text-center text-white mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                "{product.testimonial.text}"
              </blockquote>
              <cite className="text-blue-200 font-semibold">
                — {product.testimonial.author}
              </cite>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;