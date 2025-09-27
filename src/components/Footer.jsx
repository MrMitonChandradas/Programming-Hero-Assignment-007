import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-10 text-center md:text-left">
        <div className="text-center md:text-left">
          <div>CS — Ticket System</div>
          <p className="text-sm text-gray-300 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="mt-4 text-sm text-gray-400">
            <div>Made with ❤️</div>
          </div>
        </div>

        <div>
          <h6 className="font-semibold text-white">Company</h6>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Mission</li>
            <li className="hover:text-white cursor-pointer">Contact Saled</li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold text-white">Services</h6>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">
              Products & Services
            </li>
            <li className="hover:text-white cursor-pointer">
              Customer Stories
            </li>
            <li className="hover:text-white cursor-pointer">Download Apps</li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold text-white">Information</h6>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">Join Us</li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold text-white">Social Links</h6>
          <div className="mt-3 text-sm space-y-2 text-gray-300">
            <ul>
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>support@cst.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 ">
        <div className="container mx-auto px-4 py-3 text-md font-bold text-gray-400 text-center">
          <div className="mt-2 md:mt-0">
            © 2025 CS — Ticket System. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
