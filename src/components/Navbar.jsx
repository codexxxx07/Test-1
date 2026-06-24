import React from "react";
// Clerk-এর কম্পোনেন্টগুলো এখানে নিয়ে আসা হলো
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 sm:px-12 flex justify-between items-center">
      {/* 1. Logo */}
      <div className="text-2xl font-bold text-gray-800 bg-gray-100 px-4 py-2 rounded-xl shadow-xs">
        Huii
      </div>

      {/* 2. Middle Links */}
      <div className="hidden md:flex gap-4">
        <a href="#" className="bg-white hover:bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg shadow-xs font-medium transition text-gray-700">Home</a>
        <a href="#" className="bg-white hover:bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg shadow-xs font-medium transition text-gray-700">About</a>
        <a href="#" className="bg-white hover:bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg shadow-xs font-medium transition text-gray-700">Contact</a>
      </div>

      {/* 3. Right Side - Dynamic Auth Buttons */}
      <div className="flex items-center gap-4">
        
        {/* ইউজার যদি লগইন না থাকে (SignedOut), তবে এই Login & Signup বাটন জোড়া দেখাবে */}
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

        {/* ইউজার যখন লগইন করে ফেলবে (SignedIn), তখন আগের বাটনগুলো উধাও হয়ে শুধু এই প্রোফাইল বাটনটি দেখাবে */}
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