import NewsletterSubscribe from "components/newsletter/NewsletterSubscribe";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white p-[20px] sm:p-20 sm:py-8">
      <div className="grid grid-cols-1 py-5 lg:grid-cols-3 md:grid-cols-2">
        <div className="mt-4 sm:ml-5 sm:mt-0">
          <div className="text-2xl font-bold">Stay in touch</div>
          <div className="flex flex-col md:w-11/12">
            <NewsletterSubscribe />
          </div>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="text-2xl font-bold">Contact</div>
          <div className="sm:w-11/12">
            If you have any thoughts or questions you&apos;d like to share with
            us, send us a mail to{" "}
            <a href="contact@nxtgem.io" className="underline text-[#07a5c9]">
              contact@nxtgem.io
            </a>{" "}
            or get in touch with us through our social media channels.
          </div>
        </div>
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
      </div>
      <div className="h-[4px] bg-gradient-to-r from-[#373e47] to-[#60a5fa]" />
      <div className="grid grid-cols-1 my-5 text-right md:grid-cols-2 lg:grid-cols-3">
        <div>
          <img
            src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_509/v1640600879/Footer-Logo_tzrlfl.png"
            alt="Footer Logo"
            className="w-48"
          />
        </div>
        <div className="flex justify-center sm:justify-end h-fit mt-4 sm:mt-0">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="/termsandconditions"
          >
            <div className="border-r-2 pr-3 mr-3 cursor-pointer">
              Terms & Conditions
            </div>
          </a>
          <a rel="noopener noreferrer" target="_blank" href="/privacy-policy">
            <div className="border-r-2 pr-3 mr-3 cursor-pointer">
              Privacy Policy
            </div>
          </a>
          <a rel="noopener noreferrer" target="_blank" href="/disclaimer">
            <div className="cursor-pointer">Disclaimer</div>
          </a>
        </div>
        <div className="mt-4 flex justify-center md:block md:mt-0">
          &copy; 2022 All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
