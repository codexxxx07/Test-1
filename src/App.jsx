import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

// Is exact folder path se Vite file ko bina kisi error ke dhoond lega
import { HoleBackground } from "./components/animate-ui\\components\\backgrounds/hole";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  
      <div className="relative min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        
         {/* HoleBackground is now active and properly imported */}
         <HoleBackground
          strokeColor="rgba(255,255,255,0.05)"
          className="absolute inset-0 h-full w-full pointer-events-none"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
          }}
        />

         <div className="relative z-10 flex flex-col min-h-screen grow">
          <Navbar />
          
          <main className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
              Welcome to Huii
            </h1>
            <p className="text-lg text-center text-gray-600 dark:text-gray-400">
              Responsive Navbar with Skeuomorphic Design
            </p>
          </main>
          
          <Footer />
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;