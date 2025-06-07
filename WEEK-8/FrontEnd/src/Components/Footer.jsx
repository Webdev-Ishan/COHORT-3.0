import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-stone-100 to-stone-200 text-black py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-8">
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-4 text-black">
            Services
          </h6>
          <Link className="block bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent link link-hover mb-2 hover:text-blue-400 transition-colors">
            Branding
          </Link>
          <Link className="block bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent link link-hover mb-2 hover:text-blue-400 transition-colors">
            Design
          </Link>
          <Link className="block bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent link link-hover mb-2 hover:text-blue-400 transition-colors">
            Marketing
          </Link>
          <Link className="block  link link-hover hover:text-blue-400 transition-colors">
            Advertisement
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-4 text-black">
            Company
          </h6>
          <Link className="block link bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent link-hover mb-2 hover:text-blue-400 transition-colors">
            About us
          </Link>
          <Link className="block link bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent link-hover mb-2 hover:text-blue-400 transition-colors">
            Contact
          </Link>
          <Link className="block link  link-hover mb-2 hover:text-blue-400 transition-colors">
            Jobs
          </Link>
          <Link className="block link bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent link-hover hover:text-blue-400 transition-colors">
            Press kit
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-4 text-black">
            Legal
          </h6>
          <Link className="block link bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent link-hover mb-2 hover:text-blue-400 transition-colors">
            Terms of use
          </Link>
          <Link className="block link bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent link-hover mb-2 hover:text-blue-400 transition-colors">
            Privacy policy
          </Link>
          <Link className="block link bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent link-hover hover:text-blue-400 transition-colors">
            Cookie policy
          </Link>
        </nav>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TeachMint. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
