import React from "react";
 import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 sm:px-12 flex justify-between items-center">
       <div className="text-2xl font-bold text-gray-800 bg-gray-100 px-4 py-2 rounded-xl shadow-xs">
        Huii
      </div>

       <div className="hidden md:flex gap-4">
        <a href="#" className="bg-white hover:bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg shadow-xs font-medium transition text-gray-700">Home</a>
        <a href="#" className="bg-white hover:bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg shadow-xs font-medium transition text-gray-700">About</a>
        <a href="#" className="bg-white hover:bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg shadow-xs font-medium transition text-gray-700">Contact</a>
      </div>

       <div className="flex items-center gap-4">
        
         <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-medium px-4 py-2 rounded-lg shadow-xs transition cursor-pointer">
              Login
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg shadow-md transition cursor-pointer">
              Signup
            </button>
          </SignUpButton>
        </SignedOut>

         <SignedIn>
          <div className="flex items-center gap-2">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>

      </div>
    </nav>
  );
};

export default Navbar;