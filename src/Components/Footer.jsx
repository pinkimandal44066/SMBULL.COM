import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#a6c465] text-white py-12 shadow-lg transition-transform transform  ">
        <div className="container mx-auto px-6 md:px-12 ">
          <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">SMBULL</h2>
              <p className="text-lg mb-4">
                Providing high-quality services since 2024.
              </p>
              <p className="text-sm">© 2024 Smbull . All rights reserved.</p>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <NavLink to="/" className="text-lg hover:text-gray-400">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="text-lg hover:text-gray-400">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    className="text-lg hover:text-gray-400"
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Product"
                    className="text-lg hover:text-gray-400"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="text-lg hover:text-gray-400"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <NavLink to="/Blog" className="text-lg hover:text-gray-400">
                    Blog
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/faq" className="text-lg hover:text-gray-400">
                    FAQ
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className="text-lg hover:text-gray-400"
                  >
                    Help Center
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Privacypolicy"
                    className="text-lg hover:text-gray-400"
                  >
                    Privacy Policy{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Termsofservice"
                    className="text-lg hover:text-gray-400"
                  >
                    Terms of Service
                  </NavLink>
                </li>

                <li className="text-lg hover:text-gray-400">
                  <NavLink to="/career" className="text-lg hover:text-gray-400">
                    Careers
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
              <p className="text-lg mb-4">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form
                action="#"
                method="POST"
                className="flex flex-col sm:flex-row"
              >
                <input
                  type="email"
                  name=""
                  placeholder="Your email"
                  className="p-3 rounded-md border border-gray-700 bg-black text-white mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <NavLink to="/contact">
                  <button
                    type="submit"
                    className="bg-white text-black hover:text-white hover:bg-black py-3 px-6 rounded-md"
                  >
                    Send
                  </button>
                </NavLink>
              </form>
            </div>

            <div className="flex-1 ">
              <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-black text-3xl">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white hover:text-black text-3xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white hover:text-black text-3xl">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-white hover:text-black text-3xl">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-[#a6c465] shadow-2xl shadow-black text-white py-6 ">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
