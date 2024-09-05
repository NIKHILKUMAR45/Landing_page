import React from "react";

function Experience() {
  const cards = [
    {
      no: "123",
      name: "Projects Completed",
      icon: "📝", // You can use a relevant icon here
    },
    {
      no: "84",
      name: "Happy Clients",
      icon: "🤝", // You can use a relevant icon here
    },
    {
      no: "37",
      name: "Awards Win",
      icon: "🏆", // You can use a relevant icon here
    },
    {
      no: "30",
      name: "Years in Business",
      icon: "📅", // You can use a relevant icon here
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-10 flex flex-col lg:flex-row justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 lg:mt-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg px- py-4 flex items-center"
            >
              <div className="text-4xl  -mt-28 -ml-3">{card.icon}</div>
              <div>
                <h2 className="text-3xl font-bold">{card.no}</h2>
                <p className="text-gray-500">{card.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" ml-20">
          <h1 className="text-4xl font-bold text-blue-900">
            30 Years Experience
          </h1>
          <p className="text-gray-600 mt-4 max-w-md">
            Our company has been the leading provider of construction services
            to clients throughout the USA since 1988.
          </p>
          <button className="mt-6 bg-blue-900 text-white px-4 py-2 rounded-md">
            Contact Us
          </button>
        </div>
      </div>

      <div
        className="h-44 w-1/2 bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/12925715/pexels-photo-12925715.jpeg?auto=compress&cs=tinysrgb&w=600')",
        }}
      >
        <div className="flex justify-around items-center text-white mt-10">
        <div className="m-10  ">
          <h1 className="font-bold text-2xl ">
            Free Consultation with Exceptional quality
          </h1>
          <p>just one call away +88 1102 2703</p>
        </div>
        <div>
        <button className="bg-transparent font-bold px-6 py-2 border-2 border-zinc-100">
          Get Your consultation
        </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
