import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Welcome to Huii
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Responsive Navbar with Skeuomorphic Design
        </p>
      </main>
    </div>
  );
}

export default App;
