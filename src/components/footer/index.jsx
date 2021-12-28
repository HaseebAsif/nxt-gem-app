import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white p-[20px] sm:p-20 sm:py-8">
      <div className="grid grid-cols-1 py-5 lg:grid-cols-3 md:grid-cols-2">
        <div className="mt-4 sm:mt-0">
          <div className="text-2xl font-bold">Submit Project</div>
          <div>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/17wtQyZ54vM4LaSFRN7x5MC2D-B2YWlxo/view?usp=sharing"
            >
              <div className="cursor-pointer">About Us</div>
            </a>
            <Link href="/">
              <div className="cursor-pointer">Sign Up</div>
            </Link>
            <Link href="/">
              <div className="cursor-pointer">Login</div>
            </Link>
          </div>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="text-2xl font-bold">Contact</div>
          <div className="sm:w-11/12">
            If you have any thoughts or questions you&apos;d like to share with
            us, send us a mail to{" "}
            <a href="contact@nxgem.io" className="underline text-[#07a5c9]">
              contact@nxgem.io
            </a>{" "}
            or get in touch with us through our social media channels.
          </div>
        </div>
        <div className="mt-4 sm:ml-5 sm:mt-0">
          <div className="text-2xl font-bold">Stay in touch</div>
          <div className="flex flex-col ">
            <input
              type="text"
              className="rounded-md my-3 text-black p-1"
              placeholder="Email Address"
            />
            <button className="bg-gradient-to-r from-[#ccf7ff] to-[#1295bd] rounded-md text-black p-1 uppercase">
              Subscribe to our newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="h-[4px] bg-gradient-to-r from-black to-blue-400" />
      <div className="grid grid-cols-1 my-5 text-right md:grid-cols-2 lg:grid-cols-3">
        <div>
          <img
            src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_509/v1640600879/Footer-Logo_tzrlfl.png"
            alt="Footer Logo"
            className="w-48"
          />
        </div>
        <div className="flex h-fit mt-4 sm:mt-0">
          <Link href="/">
            <div className="border-r-2 pr-3 mr-3 cursor-pointer">
              Terms & Conditions
            </div>
          </Link>
          <Link href="/">
            <div className="border-r-2 pr-3 mr-3 cursor-pointer">
              Privacy Policy
            </div>
          </Link>
          <Link href="/">
            <div className="cursor-pointer">Disclaimer</div>
          </Link>
        </div>
        <div className="mt-4 flex justify-center sm:block sm:mt-0">
          &copy; 2021 All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
