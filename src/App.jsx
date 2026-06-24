import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    // flex flex-col যোগ করা হয়েছে যাতে ভেতরের এলিমেন্টগুলো লম্বালম্বিভাবে সাজানো হয়
    <div className="min-h-screen flex flex-col bg-linear-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      {/* flex-grow যোগ করা হয়েছে যাতে main ট্যাগটি বাকি ফাঁকা জায়গা দখল করে ফুটারকে নিচে নামিয়ে দেয় */}
      <main className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Welcome to Huii
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Responsive Navbar with Skeuomorphic Design
        </p>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;