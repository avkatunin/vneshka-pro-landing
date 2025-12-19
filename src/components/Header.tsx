import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2">
          <div className="text-lg sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ВнешкаПРО
          </div>
          <Button variant="hero" size="sm" className="sm:size-lg text-sm sm:text-base" asChild>
            <a href="https://app.vneshka.pro/" target="_blank" rel="noopener noreferrer">
              Попробовать
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;