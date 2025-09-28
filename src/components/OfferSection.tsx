import { Button } from "@/components/ui/button";

const OfferSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-primary p-12 rounded-3xl shadow-glow border border-border/50">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-primary-foreground">
                Начинай отслеживать эффективность внешней рекламы с ВнешкаПРО
              </h2>
              
              <div className="bg-background/10 rounded-2xl p-8 border border-primary-glow/30">
                <div className="text-6xl font-bold text-primary-foreground mb-4">
                  1000₽
                </div>
                <div className="text-xl text-primary-foreground/90 mb-2">
                  за 10 сгенерированных диплинков
                </div>
                <div className="inline-block bg-gradient-secondary px-6 py-2 rounded-full">
                  <span className="text-secondary-foreground font-semibold">
                    Первые 2 диплинка бесплатно!
                  </span>
                </div>
              </div>
              
              <Button 
                variant="cta" 
                size="lg" 
                className="text-xl px-12 py-6 bg-background text-foreground hover:bg-background/90"
              >
                Попробовать бесплатно
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-muted-foreground">
            <p className="text-lg">
              Присоединяйтесь к селлерам, которые уже контролируют свою рекламу
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;