import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-background/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-accent" />
          <span className="font-display text-xl font-semibold tracking-wide text-foreground">
            Spanish Hunting
          </span>
        </div>
        <nav className="flex items-center gap-6">
          <a
            href="#about"
            className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
