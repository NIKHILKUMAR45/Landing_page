import React from "react";

function Projects() {
  const projects = ["Commerical", "Residential", "Other"];
  const PNames = [
    {
      name: "Wildstone infra Hotel",
      loc: "1715 Ash Dr. San Jose South Dakota",
      img: "https://images.pexels.com/photos/11818297/pexels-photo-11818297.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "wish stone bulding",
      loc: "2715 Ash Dr.Jose north Dakota",
      img: "https://images.pexels.com/photos/11818297/pexels-photo-11818297.jpeg?auto=compress&cs=tinysrgb&w=400",

    },
    {
      name: "Wildstone infra Hotel",
      loc: "1715 Ash Dr. San Jose South Dakota",
      img: "https://images.pexels.com/photos/11818297/pexels-photo-11818297.jpeg?auto=compress&cs=tinysrgb&w=400",

    },
    {
      name: "Wildstone infra Hotel",
      loc: "1715 Ash Dr. San Jose South Dakota",
      img: "https://images.pexels.com/photos/11818297/pexels-photo-11818297.jpeg?auto=compress&cs=tinysrgb&w=400",

    },
  ];
  return (
    <div className="flex justify-center">
      <sidebar>
        <div className="w-60 h-96  ml-10 pt-5 mt-10 ">
          <h1 className="font-bold text-2xl">Projects</h1>
          <div className="mt-5">
            <a href="pro" className="text-blue-700 font-bold ">
              {" "}
              All
            </a>
            {projects.map((project, index) => (
              <h1 key={index} className="pro text-zinc-400 pl-3">
                {project}
              </h1>
            ))}
          </div>
        </div>
      </sidebar>
      <proj>
  <div className="mt-36 ml-40">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {PNames.map((PName, index) => (
        <div key={index} className="m-5">
          <img src={PName.img} alt={PName.name} className="h-52 w-52" />
          <div className="bg-blue-700 text-white">
            <h1 className="font-bold">{PName.name}</h1>
            <p className="w-52">{PName.loc}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-between">
    <button className="bg-zinc-900 text-zinc-100 mx-5 px-14 py-2">prev</button>
    <span className="h-3 w-3 bg-blue-700 rounded-full mt-5"></span>
    <span className="h-2 w-2 bg-zinc-300 rounded-full mt-5"></span>
    <span className="h-2 w-2 bg-zinc-300 rounded-full mt-5"></span>
    <span className="h-2 w-2 bg-zinc-300 rounded-full mt-5"></span>

    <button className="bg-zinc-900 text-zinc-100 mx-5 px-14 py-2">Next</button>
    </div>
  </div>
</proj>

    </div>
  );
}

export default Projects;
