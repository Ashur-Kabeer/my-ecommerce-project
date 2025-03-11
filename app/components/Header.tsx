'use client'
import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const handleLanguageChange = (lang: any) => {
    setSelectedLanguage(lang);
    // Here, you can add logic to change the content language or redirect accordingly
  };
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  // Close the dropdown if user clicks outside of it
  const closeDropdown = (e: any) => {
    if (!e.target.closest('.language-dropdown')) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <header className="bg-gray-200 shadow-md">
      <div className="max-w-screen-xl mx-auto px-2 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-700">🛍Stop n Shop</Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white px-4 py-2 rounded-md w-[600px]">
          <input
            type="text"
            placeholder="Search for products, items or brands"
            className="w-full bg-transparent border-none outline-none text-gray-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="text-gray-600 ml-2 cursor-pointer" />
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-4">
          <nav className="text-lg hidden md:flex items-center space-x-6">
            <Link href="/Contact" className="text-gray-800 hover:text-indigo-600">📞Contact</Link>

            {/* Language Selector Dropdown */}
            <div className="relative language-dropdown">
              <button 
                onClick={toggleDropdown} 
                className="text-gray-800 hover:text-indigo-600"
              >
                {selectedLanguage} <span className="ml-1">&#x25BC;</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md border z-10">
                  <ul className="text-sm">
                    <li onClick={() => handleLanguageChange("EN")} className="px-4 py-2 hover:bg-indigo-100 cursor-pointer">EN</li>
                    <li onClick={() => handleLanguageChange("ES")} className="px-4 py-2 hover:bg-indigo-100 cursor-pointer">ES</li>
                    <li onClick={() => handleLanguageChange("FR")} className="px-4 py-2 hover:bg-indigo-100 cursor-pointer">FR</li>
                    <li onClick={() => handleLanguageChange("AR")} className="px-4 py-2 hover:bg-indigo-100 cursor-pointer">AR</li>
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {/* Icons: Login and Cart */}
          <Link href="/Login" className="text-gray-800 hover:text-indigo-600">
            <AiOutlineUser className="text-3xl"/>
          </Link>

          <div className="relative">
          <Link href="/CartPage" className="text-gray-800 hover:text-indigo-600">
            <AiOutlineShoppingCart className="text-3xl text-gray-800 hover:text-indigo-600" />
            </Link>
            {/* Cart Badge (number of items) */}
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1 py-2">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
