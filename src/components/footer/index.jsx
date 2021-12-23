import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white p-[20px] sm:p-20">
      <div className="grid grid-cols-1 py-5 lg:grid-cols-3 md:grid-cols-2">
        <div className="mt-4 sm:mt-0">
          <div className="text-2xl font-bold">Submit Project</div>
          <div>
            <div>Lorem, ipsum.</div>
            <div>Lorem, ipsum.</div>
            <div>Lorem, ipsum.</div>
          </div>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="text-2xl font-bold">Contact</div>
          <div className="sm:w-11/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            nisi laudantium blanditiis omnis, quasi similique facilis adipisci
            ullam ab dicta.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquam nisi laudantium blanditiis omnis, quasi similique
            facilis adipisci ullam ab dicta.
          </div>
        </div>
        <div className="mt-4 sm:ml-5 sm:mt-0">
          <div className="text-2xl font-bold">Stay in touch</div>
          <div className="flex flex-col ">
            <input type="text" className="rounded-md my-3 text-black p-1" />
            <button className="bg-gradient-to-r from-blue-200 to-blue-400 rounded-md text-black p-1">
              Hello World
            </button>
          </div>
        </div>
      </div>
      <div className="h-[4px] bg-gradient-to-r from-black to-blue-400" />
      <div className="grid grid-cols-1 my-5 text-right md:grid-cols-2 lg:grid-cols-3">
        <div>
          <img
            src="/assets/Footer-Logo.png"
            alt="Footer Logo"
            className="w-48"
          />
        </div>
        <div className="flex h-fit mt-4 sm:mt-0">
          <a href="/" className="border-r-2 pr-3 mr-3">
            Terms & Condition
          </a>
          <a href="/" className="border-r-2 pr-3 mr-3">
            Privacy Policy
          </a>
          <a href="/">Disclaimer</a>
        </div>
        <div className="mt-4 sm:mt-0">2021 privacy policy</div>
      </div>
    </div>
  );
};

export default Footer;
