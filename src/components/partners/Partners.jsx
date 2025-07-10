import { assets } from "../../assets/assets";

const partners = [
  {
    name: "Pixel Portion",
    logo: "partnerImg1",
  },
  {
    name: "KumaSoft",
    logo: "partnerImg2",
  },
];

export default function ExclusivePartners() {
  return (
    <div className="w-full py-10 bg-gray-100 text-center">
      <h2
        className="text-6xl max-[500px]:text-4xl text-text font-medium text-center mb-8"
        data-aos="fade-right"
      >
        Exclusive
        <span className="text-secondary ml-3">Partners</span>
      </h2>
      <div className="flex justify-center space-x-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="w-28 h-28 p-4 bg-white shadow-lg rounded-2xl flex items-center justify-center"
          >
            <img
              src={assets[partner.logo]}
              alt={partner.name}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
