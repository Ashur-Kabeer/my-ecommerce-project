// components/Footer.js
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-4">
            <div className="text-2xl font-bold text-white">🛍️Stop n Shop</div>
            <p className="text-gray-400 text-sm">
              Your one-stop online shop for all things trendy. Get the best deals, amazing discounts, and the latest products delivered to your doorstep!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="/about" className="hover:text-indigo-600">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-indigo-600">Contact</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-indigo-600">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-indigo-600">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter to stay updated with the latest products and offers.
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 w-full bg-gray-700 text-white rounded-md focus:outline-none"
              />
              <button className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex justify-center space-x-8">
          <a href="#" className="text-gray-400 hover:text-indigo-600">
            <i className="fab fa-facebook-f"></i> {/* You can use icons like Font Awesome */}
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-600">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2025 🛍️Stop n Shop, All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
