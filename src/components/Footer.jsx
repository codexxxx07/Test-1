
const Footer = () => {
  return (
<footer className="bg-transparent border-t border-border/40 py-6 text-center">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
         <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          
           <div className="text-2xl font-bold text-gray-800 tracking-wide">
            Footer
          </div>

           <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Huii. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;