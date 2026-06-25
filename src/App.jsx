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
          strokeColor="rgba(232, 39, 42, 0.1)"
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
          
          <main className="grow">
            {/* HERO SECTION */}
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
              <div className="max-w-7xl mx-auto text-center relative z-10">
                <h1 className="font-heading text-7xl md:text-9xl font-bold mb-6 marvel-text-shadow text-primary">
                  MarvelX
                </h1>
                <p className="font-oswald text-2xl md:text-4xl text-secondary mb-8 tracking-wider uppercase">
                  Enter the Universe
                </p>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                  Experience the power of maximalist design. Bold. Dramatic. Epic.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <a href="#about" className="comic-panel bg-primary text-primary-foreground px-8 py-4 font-oswald text-xl uppercase tracking-wider hover:scale-105 transition-transform">
                    Explore
                  </a>
                  <a href="#contact" className="dramatic-border bg-secondary text-secondary-foreground px-8 py-4 font-oswald text-xl uppercase tracking-wider hover:scale-105 transition-transform">
                    Join Us
                  </a>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-20 left-10 w-32 h-32 border-4 border-primary opacity-20 rotate-45"></div>
              <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-secondary opacity-20 rotate-12"></div>
              <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-primary opacity-15 -rotate-12"></div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="py-24 px-4 relative">
              <div className="max-w-7xl mx-auto">
                <h2 className="font-heading text-6xl md:text-8xl font-bold text-center mb-16 marvel-text-shadow text-primary">
                  ABOUT
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="comic-panel bg-card p-8 text-center">
                    <div className="text-5xl mb-4">⚡</div>
                    <h3 className="font-oswald text-2xl text-secondary mb-4 uppercase">Power</h3>
                    <p className="text-muted-foreground">Unleash the full potential of your digital presence with our cutting-edge solutions.</p>
                  </div>
                  <div className="comic-panel bg-card p-8 text-center">
                    <div className="text-5xl mb-4">🎯</div>
                    <h3 className="font-oswald text-2xl text-secondary mb-4 uppercase">Precision</h3>
                    <p className="text-muted-foreground">Every element crafted with meticulous attention to detail and purpose.</p>
                  </div>
                  <div className="comic-panel bg-card p-8 text-center">
                    <div className="text-5xl mb-4">🚀</div>
                    <h3 className="font-oswald text-2xl text-secondary mb-4 uppercase">Impact</h3>
                    <p className="text-muted-foreground">Make a lasting impression with designs that command attention.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="py-24 px-4 relative">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-6xl md:text-8xl font-bold text-center mb-16 marvel-text-shadow text-primary">
                  CONTACT
                </h2>
                <div className="comic-panel bg-card p-8 md:p-12">
                  <form className="space-y-6" data-supabase-form="contact">
                    <div>
                      <label className="block font-oswald text-lg text-secondary mb-2 uppercase">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        className="w-full bg-background border-2 border-secondary/50 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                        placeholder="Your name"
                        data-supabase-field="name"
                      />
                    </div>
                    <div>
                      <label className="block font-oswald text-lg text-secondary mb-2 uppercase">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        className="w-full bg-background border-2 border-secondary/50 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                        placeholder="your@email.com"
                        data-supabase-field="email"
                      />
                    </div>
                    <div>
                      <label className="block font-oswald text-lg text-secondary mb-2 uppercase">Message</label>
                      <textarea 
                        name="message"
                        rows="4"
                        className="w-full bg-background border-2 border-secondary/50 px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Your message..."
                        data-supabase-field="message"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-primary text-primary-foreground px-8 py-4 font-oswald text-xl uppercase tracking-wider hover:scale-105 transition-transform marvel-glow"
                      data-supabase-submit="contact"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </main>
          
          <Footer />
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;