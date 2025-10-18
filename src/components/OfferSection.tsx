import { Button } from "@/components/ui/button";

const OfferSection = () => {
  const plans = [
    { deeplinks: 1, price: 200, discount: null },
    { deeplinks: 5, price: 899, discount: 10 },
    { deeplinks: 10, price: 1599, discount: 20 },
    { deeplinks: 20, price: 2799, discount: 30 },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Начинай отслеживать эффективность внешней рекламы с ВнешкаПРО
            </h2>
            <div className="inline-block bg-gradient-secondary px-8 py-3 rounded-full mt-4">
              <span className="text-secondary-foreground font-semibold text-lg">
                Первые 2 диплинка бесплатно!
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border-2 border-border hover:border-primary transition-all shadow-card hover:shadow-lg"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {plan.deeplinks}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {plan.deeplinks === 1 ? 'диплинк' : 'диплинков'}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.price}₽
                  </div>
                  {plan.discount && (
                    <div className="inline-block bg-accent px-3 py-1 rounded-full">
                      <span className="text-accent-foreground text-sm font-semibold">
                        -{plan.discount}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-xl px-12 py-6"
              asChild
            >
              <a href="https://app.vneshka.pro/" target="_blank" rel="noopener noreferrer">
                Попробовать бесплатно
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
