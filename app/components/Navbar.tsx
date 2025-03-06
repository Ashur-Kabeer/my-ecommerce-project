'use client'
import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md">

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 px-10 py-2">
          

          {/* Categories Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="text-gray-800 hover:text-indigo-600">
              All Categories
            </button>
            {isDropdownOpen && (
              <div className=" absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border">
                <ul className="text-sm">
                  <li className="px-4 py-2 hover:bg-indigo-100 cursor-pointer">
                    <Link href="/home">Women</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-indigo-100 cursor-pointer">
                    <Link href="/best-deals">Men</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-indigo-100 cursor-pointer">
                    <Link href="/furnitures">Beauty</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-indigo-100 cursor-pointer">
                    <Link href="/electronics">Home</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-indigo-100 cursor-pointer">
                    <Link href="/electronics">Phones</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-indigo-100 cursor-pointer">
                    <Link href="/electronics">Toys</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link href="/" className="text-gray-800 hover:text-indigo-600">Home</Link>
          <Link href="/best-deals" className="text-gray-800 hover:text-indigo-600">Best Deals</Link>
          <Link href="/Furnitures" className="text-gray-800 hover:text-indigo-600">Furnitures</Link>
          <Link href="/electronics" className="text-gray-800 hover:text-indigo-600">Electronics</Link>

          
        </nav>
    </header>
  );
};

export default Navbar;
