import React from "react";

function Navbar() {
    const navs = ['Home','Service','Help','All Project', 'Conatct Us']
  return (
    <div className="fixed top-0 left-0 w-full bg">
      <div className="flex justify-between items-center fixed w-full h-20 p-5 bg-slate-200">
        <h1 className="text-4xl text-blue-700 font-bold tracking-tighter font-serif">TheBox</h1>
        <div className="">
            {navs.map((nav,index)=>(
                    <button href="" key={index} className="p-5">{nav}</button>
            ))}     
        </div>
      </div>
    </div>
  );
}

export default Navbar;
