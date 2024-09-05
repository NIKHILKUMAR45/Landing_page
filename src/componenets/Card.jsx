import React from "react";

function Card() {
  const cards = [
    {
      name: "Bset Services",
      icon: "https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=600",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Bset Services",
      icon: "https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=600",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Bset Services",
        icon: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "Bset Services",
        icon: "https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=600",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      
  ];
  return (
    <div className='flex justify-center flex-wrap space-x-4'>
    <div>
        <h1 className='text-2xl mt-10 font-bold tracking-tighter text-center'>Our Reputation</h1>
        <div className='flex justify-center  flex-wrap mt-5'>
            {cards.map((card, index) => (
                <div key={index} className='w-60 p-5 bg-slate-100 m-2 mx-10 rounded-lg shadow-lg'>
                    <img src={card.icon} alt={`${card.name} icon`} className='w-16 h-16 mx-auto mb-4 rounded-full ' />
                    <h1 className='text-xl font-semibold text-center'>{card.name}</h1>
                    <p className='text-center mt-2'>{card.about}</p>
                </div>
            ))}
        </div>
    </div>
</div>
);
}

export default Card;
