import React from 'react';

function Form() {
  return (
    <div className=" py-20">
      {/* Contact Form */}
      <div className="max-w-3xl mx-auto p-10 bg-white shadow-md rounded-md ">
        <h2 className="text-3xl font-bold text-center mb-6">What can we do for you?</h2>
        <p className="text-center text-gray-600 mb-10">
          We are ready to work on a project of any complexity, whether it's commercial or residential.
        </p>
        
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name*" className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Email*" className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Reason for Contacting*" className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Phone" className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <textarea placeholder="Message" className="border border-gray-300 p-3 w-full mt-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
          
          <p className="text-xs text-gray-500 mt-2">* indicates a required field</p>
          
          <div className="flex justify-center mt-6">
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 p-5 text-gray-600 bg-zinc-100">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="space-y-2">
            <p><strong>ADDRESS:</strong> 6391 Elgin St. Celina, Delaware 10299</p>
            <p><strong>PHONE:</strong> +84 1102 2703</p>
            <p><strong>EMAIL:</strong> hello@thebox.com</p>
          </div>

          <div className="space-y-2 mt-6 md:mt-0">
            <p><strong>NEWSLETTER:</strong></p>
            <div className="flex">
              <input type="email" placeholder="Your email here" className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="ml-3 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">Subscribe</button>
            </div>
          </div>

          <div className="space-y-2 mt-6 md:mt-0">
            <p><strong>SOCIAL:</strong></p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-700"><i className="fab fa-facebook-f"></i> Facebook</a>
              <a href="#" className="text-blue-600 hover:text-blue-700"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
              <a href="#" className="text-blue-600 hover:text-blue-700"><i className="fab fa-twitter"></i> Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
