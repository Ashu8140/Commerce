import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({setQuery,query,TotalCount}) {
  
    return (
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">ShopEase</div>
  
          {/* Search Bar */}
          <div className="hidden md:flex flex-grow mx-4">
            <input
            value={query}
             onChange={((e)=>setQuery(e.target.value))}
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
  
          {/* Navigation & Icons */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Shop</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
  
            {/* Cart Icon */}
            <div className="relative">
            <Link to="/cart"> 
              <button className="text-gray-700 hover:text-blue-600">
                🛒
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">{TotalCount}</span>
              </button>
              </Link>
            </div>
  
            {/* Profile Dropdown */}
            <div className="relative">
              <button className="text-gray-700 hover:text-blue-600">👤</button>
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md hidden group-hover:block">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Orders</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  