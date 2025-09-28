import { Button } from "@/components/ui/button";
import analyticsImage from "@/assets/analytics-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-background">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Отслеживай эффективность
              </span>
              <br />
              <span className="text-foreground">
                внешней рекламы в реальном времени
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              ВнешкаПРО - сервис аналитики внешней рекламы для селлеров и менеджеров маркетплейсов.
            </p>
            
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Попробовать бесплатно
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-30"></div>
            <img 
              src={analyticsImage} 
              alt="Панель аналитики ВнешкаПРО"
              className="relative rounded-3xl shadow-card border border-border/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;