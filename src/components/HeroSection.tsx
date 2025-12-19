import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-background relative overflow-hidden pt-16">
      {/* Floating background elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 floating"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-secondary rounded-full blur-3xl opacity-20 floating" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-accent rounded-full blur-3xl opacity-15 floating" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="flex justify-center items-center">
          <div className="text-center space-y-6 sm:space-y-8 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight fade-in-up">
              <span className="text-shimmer block mb-2 sm:mb-4">
                Отслеживай эффективность
              </span>
              <span className="text-foreground fade-in-up stagger-1">
                внешней рекламы в реальном времени
              </span>
            </h1>
            
            <p className="text-base sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed fade-in-up stagger-2 max-w-3xl mx-auto px-2">
              ВнешкаПРО - сервис аналитики внешней рекламы для селлеров и менеджеров маркетплейсов.
            </p>

            <div className="fade-in-up stagger-3">
              <Button variant="hero" size="lg" className="text-base sm:text-xl px-8 sm:px-12 py-6 sm:py-8 font-bold" asChild>
                <a href="https://app.vneshka.pro/" target="_blank" rel="noopener noreferrer">
                  Попробовать бесплатно
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
