const Header = () => {
  return (
    <header className="w-full bg-background sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-16">
        <a href="/" className="font-display text-xl tracking-[0.25em] uppercase text-foreground">
          Spanish Hunting
        </a>
        <nav className="flex items-center gap-8">
          <a
            href="#about"
            className="text-[11px] tracking-[0.2em] uppercase font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-[11px] tracking-[0.2em] uppercase font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
      <div className="w-full h-px bg-border" />
    </header>
  );
};

export default Header;
