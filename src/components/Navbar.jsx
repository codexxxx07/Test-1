import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
// Shadcn Button ইমপোর্ট করা হলো
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-transparent border-b-2 border-secondary/30 py-4 px-6 sm:px-12 flex justify-between items-center backdrop-blur-sm">
      {/* Logo */}
      <div className="font-heading text-4xl font-black tracking-widest text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
        MARVEL<span className="text-white">X</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-4">
        <a
          href="#home"
          className="comic-panel bg-card text-foreground px-6 py-2 font-oswald text-lg uppercase tracking-wider hover:scale-105 transition-transform"
        >
          Home
        </a>
        <a
          href="#about"
          className="comic-panel bg-card text-foreground px-6 py-2 font-oswald text-lg uppercase tracking-wider hover:scale-105 transition-transform"
        >
          About
        </a>
        <a
          href="#contact"
          className="comic-panel bg-card text-foreground px-6 py-2 font-oswald text-lg uppercase tracking-wider hover:scale-105 transition-transform"
        >
          Contact
        </a>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <SignedOut>
          {/* Clerk SignIn with Shadcn Outline Button */}
          <SignInButton mode="modal">
            <Button
              variant="outline"
              className="cursor-pointer font-oswald text-lg uppercase tracking-wider border-2 border-secondary/50 hover:border-primary hover:text-primary transition-colors"
              data-supabase-auth="login"
            >
              Login
            </Button>
          </SignInButton>

          {/* Clerk SignUp with Shadcn Default Button */}
          <SignUpButton mode="modal">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer font-oswald text-lg uppercase tracking-wider marvel-glow transition-all"
              data-supabase-auth="signup"
              data-stripe-ready="true"
            >
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
