import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <button className="hover:underline text-gray-600 hover:text-orange-500">
                  Help
                </button>
              </li>
              <li className="mt-2">
                <button className="hover:underline text-gray-600 hover:text-orange-500">
                  Support
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <button className="hover:underline text-gray-600 hover:text-orange-500">
                  Terms
                </button>
              </li>
              <li className="mt-2">
                <button className="hover:underline text-gray-600 hover:text-orange-500">
                  Privacy
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <button className="hover:underline text-gray-600 hover:text-orange-500">
                  Facebook
                </button>
              </li>
              <li className="mt-2">
                <button className="hover:underline text-gray-600 hover:text-orange-500">
                  Linkedin
                </button>
              </li>
              <li className="mt-2">
                <button className="hover:underline text-gray-600 hover:text-orange-500">
                  Twitter
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <button className="hover:underline text-gray-600 hover:text-orange-500">
                  Official Blog
                </button>
              </li>
              <li className="mt-2">
                <button className="hover:underline text-gray-600 hover:text-orange-500">
                  About Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
