import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withCart, withUser } from "./withProvider";

function Navbar({ setQuery, query, totalcount, HandleLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-700"
        >
          ☰
        </button>

        <Link to="/cart" className="relative text-gray-700 hover:text-blue-600 text-xl">
          🛒
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            {totalcount || 0}
          </span>
        </Link>
      </div>

      {menuOpen && (
        <div className="mt-3 space-y-2 lg:hidden">
          <Link
            to="/"
            className="block text-gray-700 px-2 py-1 hover:bg-gray-100 rounded"
          >
            🏠 Home
          </Link>
          <Link
            to="/profile"
            className="block text-gray-700 px-2 py-1 hover:bg-gray-100 rounded"
          >
            👤 Profile
          </Link>
          <button
            onClick={HandleLogout}
            className="block text-left w-full text-gray-700 px-2 py-1 hover:bg-gray-100 rounded"
          >
            🚪 Logout
          </button>
        </div>
      )}

      <div className="hidden lg:flex justify-between items-center mt-4">
      
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        </div>

       
        <div className="w-[40%]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

       
        <div className="flex items-center space-x-6">
         
          <Link to="/cart" className="relative text-gray-700 hover:text-blue-600 text-xl">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              {totalcount || 0}
            </span>
          </Link>

        
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 text-xl">👤</button>
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-150 z-10">
              <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
              <button onClick={HandleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
            </div>
          </div>
        </div>
      </div>

     
      <div className="mt-4 lg:hidden">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>
    </nav>
  );
}

export default withUser(withCart(Navbar));
