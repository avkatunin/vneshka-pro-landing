import { Button } from "@/components/ui/button";
import analyticsImage from "@/assets/analytics-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-background relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 floating"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-secondary rounded-full blur-3xl opacity-20 floating"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-accent rounded-full blur-3xl opacity-15 floating"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex justify-center items-center">
          <div className="text-center space-y-8 max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight fade-in-up">
              <span className="text-shimmer block mb-4">
                Отслеживай эффективность
              </span>
              <span className="text-foreground fade-in-up stagger-1">
                внешней рекламы в реальном времени
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed fade-in-up stagger-2 max-w-3xl mx-auto">
              ВнешкаПРО - сервис аналитики внешней рекламы для селлеров и
              менеджеров маркетплейсов.
            </p>

            <div className="fade-in-up  stagger-3">
              <Button
                variant="hero"
                size="lg"
                className="text-xl px-12 py-8 font-bold"
                asChild
              >
                <a
                  href="https://app.vneshka.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
