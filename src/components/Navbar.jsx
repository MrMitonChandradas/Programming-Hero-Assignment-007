import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">CS — Ticket System</div>
        <ul className="flex flex-cols gap-6 hover:text-black">
          <li className="hidden md:block">
            <a href="#">Home</a>
          </li>
          <li className="hidden md:block">
            <a href="#">FAQ</a>
          </li>
          <li className="hidden md:block">
            <a href="#">Changelog</a>
          </li>
          <li className="hidden md:block">
            <a href="#">Blog</a>
          </li>
          <li className="hidden md:block">
            <a href="#">Download</a>
          </li>
          <li className="hidden md:block">
            <a href="#">Contact</a>
          </li>

          <button className="bg-purple-600 text-white px-3 py-1 rounded ">
            + New Ticket
          </button>
        </ul>
      </div>
    </nav>
  );
}
