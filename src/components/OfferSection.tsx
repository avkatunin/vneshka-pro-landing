import { Button } from "@/components/ui/button";

const OfferSection = () => {
  const plans = [
    { deeplinks: 1, price: 299, discount: null },
    { deeplinks: 5, price: 1349, discount: 10 },
    { deeplinks: 10, price: 2399, discount: 20 },
    { deeplinks: 20, price: 4199, discount: 30 },
  ];

  return (
    <section className="py-12 sm:py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent px-2">
              Начинай отслеживать эффективность внешней рекламы с ВнешкаПРО
            </h2>
            <div className="inline-block bg-gradient-secondary px-4 sm:px-8 py-2 sm:py-3 rounded-full mt-4">
              <span className="text-secondary-foreground font-semibold text-sm sm:text-lg">
                Первые 2 диплинка бесплатно!
              </span>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-4 sm:p-8 border-2 border-border shadow-card mb-8 sm:mb-12">
            <div className="space-y-2 sm:space-y-4">
              {plans.map((plan, index) => (
                <div key={index} className="flex items-center justify-between py-3 sm:py-4 border-b border-border last:border-b-0 gap-2">
                  <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                    <span className="text-lg sm:text-2xl font-bold text-foreground">
                      {plan.deeplinks} {plan.deeplinks === 1 ? 'диплинк' : 'диплинков'}
                    </span>
                    {plan.discount && (
                      <span className="bg-accent px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-accent-foreground text-xs sm:text-sm font-semibold">
                        -{plan.discount}%
                      </span>
                    )}
                  </div>
                  <div className="text-xl sm:text-3xl font-bold text-primary whitespace-nowrap">
                    {plan.price}₽
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-base sm:text-xl px-8 sm:px-12 py-6 sm:py-8 font-bold"
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
    </section>
  );
};

export default OfferSection;
