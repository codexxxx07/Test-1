const Footer = () => {
  return (
    <footer className="bg-transparent border-t-2 border-secondary/30 py-8 text-center backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-heading text-4xl font-black tracking-widest text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
            MARVEL<span className="text-white">X</span>
          </div>

          <p className="text-muted-foreground text-sm font-oswald uppercase tracking-wider">
            © {new Date().getFullYear()} Spider-Man. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
