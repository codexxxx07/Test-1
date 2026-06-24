import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pressedButton, setPressedButton] = useState(null);

  const handlePress = (buttonName) => {
    setPressedButton(buttonName);
    setTimeout(() => setPressedButton(null), 150);
  };

  return (
    <nav className="bg-linear-to-b from-gray-100 to-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left Side */}
          <div className="shrink-0">
            <div
              className="text-2xl font-bold text-gray-800 px-4 py-2 rounded-xl
                bg-linear-to-br from-white to-gray-100
                shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]
                hover:shadow-[0_6px_8px_-1px_rgba(0,0,0,0.15),0_3px_6px_-1px_rgba(0,0,0,0.1)]
                hover:-translate-y-0.5
                transition-all duration-200 ease-out
                cursor-pointer select-none"
            >
              Huii
            </div>
          </div>

          {/* Navigation Links - Center (Hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-2">
            {['Home', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-5 py-2.5 rounded-lg text-gray-700 font-medium
                  bg-linear-to-br from-white to-gray-50
                  shadow-[0_3px_4px_-1px_rgba(0,0,0,0.1),0_2px_3px_-1px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_5px_6px_-1px_rgba(0,0,0,0.12),0_3px_4px_-1px_rgba(0,0,0,0.08)]
                  hover:-translate-y-0.5
                  active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]
                  active:translate-y-0
                  transition-all duration-150 ease-out
                  cursor-pointer select-none"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Buttons - Right Side (Hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onMouseDown={() => handlePress('login')}
              onMouseUp={() => setPressedButton(null)}
              onMouseLeave={() => setPressedButton(null)}
              className={`px-6 py-2.5 rounded-lg font-semibold text-gray-700
                bg-linear-to-br from-white to-gray-100
                transition-all duration-150 ease-out cursor-pointer select-none
                ${pressedButton === 'login'
                  ? 'shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] translate-y-0.5'
                  : 'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.12),0_2px_4px_-1px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_8px_-1px_rgba(0,0,0,0.15),0_3px_6px_-1px_rgba(0,0,0,0.1)] hover:-translate-y-0.5'
                }`}
            >
              Login
            </button>
            <button
              onMouseDown={() => handlePress('signup')}
              onMouseUp={() => setPressedButton(null)}
              onMouseLeave={() => setPressedButton(null)}
              className={`px-6 py-2.5 rounded-lg font-semibold text-white
                bg-linear-to-br from-blue-500 to-blue-600
                transition-all duration-150 ease-out cursor-pointer select-none
                ${pressedButton === 'signup'
                  ? 'shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] translate-y-0.5'
                  : 'shadow-[0_4px_6px_-1px_rgba(59,130,246,0.4),0_2px_4px_-1px_rgba(59,130,246,0.2)] hover:shadow-[0_6px_8px_-1px_rgba(59,130,246,0.5),0_3px_6px_-1px_rgba(59,130,246,0.3)] hover:-translate-y-0.5'
                }`}
            >
              Signup
            </button>
          </div>

          {/* Hamburger Menu Button (Mobile only) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-lg
                bg-linear-to-br from-white to-gray-100
                shadow-[0_3px_4px_-1px_rgba(0,0,0,0.1),0_2px_3px_-1px_rgba(0,0,0,0.06)]
                hover:shadow-[0_5px_6px_-1px_rgba(0,0,0,0.12),0_3px_4px_-1px_rgba(0,0,0,0.08)]
                hover:-translate-y-0.5
                active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]
                active:translate-y-0
                transition-all duration-150 ease-out
                cursor-pointer select-none"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ease-out
                    ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ease-out
                    ${isOpen ? 'opacity-0' : ''}`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ease-out
                    ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 bg-linear-to-b from-gray-100 to-gray-200 shadow-inner">
          {['Home', 'About', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block px-5 py-3 rounded-lg text-gray-700 font-medium text-center
                bg-linear-to-br from-white to-gray-50
                shadow-[0_3px_4px_-1px_rgba(0,0,0,0.1),0_2px_3px_-1px_rgba(0,0,0,0.06)]
                hover:shadow-[0_5px_6px_-1px_rgba(0,0,0,0.12),0_3px_4px_-1px_rgba(0,0,0,0.08)]
                hover:-translate-y-0.5
                active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]
                active:translate-y-0
                transition-all duration-150 ease-out
                cursor-pointer select-none"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 space-y-3">
            <button
              onMouseDown={() => handlePress('mobile-login')}
              onMouseUp={() => setPressedButton(null)}
              onMouseLeave={() => setPressedButton(null)}
              className={`w-full px-6 py-3 rounded-lg font-semibold text-gray-700
                bg-linear-to-br from-white to-gray-100
                transition-all duration-150 ease-out cursor-pointer select-none
                ${pressedButton === 'mobile-login'
                  ? 'shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] translate-y-0.5'
                  : 'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.12),0_2px_4px_-1px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_8px_-1px_rgba(0,0,0,0.15),0_3px_6px_-1px_rgba(0,0,0,0.1)] hover:-translate-y-0.5'
                }`}
            >
              Login
            </button>
            <button
              onMouseDown={() => handlePress('mobile-signup')}
              onMouseUp={() => setPressedButton(null)}
              onMouseLeave={() => setPressedButton(null)}
              className={`w-full px-6 py-3 rounded-lg font-semibold text-white
                bg-linear-to-br from-blue-500 to-blue-600
                transition-all duration-150 ease-out cursor-pointer select-none
                ${pressedButton === 'mobile-signup'
                  ? 'shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] translate-y-0.5'
                  : 'shadow-[0_4px_6px_-1px_rgba(59,130,246,0.4),0_2px_4px_-1px_rgba(59,130,246,0.2)] hover:shadow-[0_6px_8px_-1px_rgba(59,130,246,0.5),0_3px_6px_-1px_rgba(59,130,246,0.3)] hover:-translate-y-0.5'
                }`}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
