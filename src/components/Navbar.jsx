import React from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
// Shadcn Button ইমপোর্ট করা হলো
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
   <nav className="bg-transparent border-b border-border/40 py-4 px-6 sm:px-12 flex justify-between items-center">       {/* Logo */}
      <div className="text-2xl font-bold text-gray-800 bg-gray-100 px-4 py-2 rounded-xl shadow-xs">
        Huii
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-4">
        <a href="#" className="bg-white hover:bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg shadow-xs font-medium transition text-gray-700">Home</a>
        <a href="#" className="bg-white hover:bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg shadow-xs font-medium transition text-gray-700">About</a>
        <a href="#" className="bg-white hover:bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg shadow-xs font-medium transition text-gray-700">Contact</a>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        
        <SignedOut>
          {/* Clerk SignIn with Shadcn Outline Button */}
          <SignInButton mode="modal">
            <Button variant="outline" className="cursor-pointer">
              Login
            </Button>
          </SignInButton>

          {/* Clerk SignUp with Shadcn Default Button */}
          <SignUpButton mode="modal">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer shadow-md">
              Signup
            </Button>
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