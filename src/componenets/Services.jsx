import React from "react";

function Services() {
  const services = [
    "Construction",
    "Renovation",
    "Consultation",
    "Repair",
    "Architecture",
    "Electrice",
  ];
  return (
    <div className="flex justify-center">
      <div className="bg-zinc-100 text-center items-center w-1/2 pt-10 pl-32 pr-32">
        <h1 className="font-bold text-2xl"> Services</h1>
        <div className="flex justify-center mt-5 flex-wrap p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className={`w-48 h-48 rounded-lg shadow-lg m-5  ${
                  index % 2 === 0 ? "bg-blue-500" : "bg-white"
                }`}
              >
                <div className="mt-14 ml-16 mb-2 items-center"><img src="https://images.pexels.com/photos/27972251/pexels-photo-27972251/free-photo-of-woman-riding-bike-with-surfboard.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="w-10 h-10 rounded-full"/></div>
                <h1 className="">{service}</h1>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
