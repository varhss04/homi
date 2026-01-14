const Footer = () => {
  return (
    <footer className="bg-primary py-6 animate-in slide-in-from-bottom-4 duration-1000 delay-1200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-3">
          <img src="/homi_logo.jpg" alt="Homi Logo" className="h-12 w-12 object-contain rounded-full p-1" style={{ backgroundColor: '#efece3' }} />
          <h3 className="text-2xl font-bold text-white" style={{ fontFamily:"'Lato', sans-serif" }}>homi</h3>
          <p className="text-xs text-primary-foreground/60">
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
