import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
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