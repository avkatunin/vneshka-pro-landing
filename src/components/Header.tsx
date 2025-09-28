import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ВнешкаПРО
          </div>
          <Button variant="hero" size="lg">
            Попробовать бесплатно
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;