import step12Video from "@/assets/step-1-2.mp4";
import step34 from "@/assets/step-3-4.png";
import step5 from "@/assets/step-5.png";

const SolutionSection = () => {
  const tiles = [
    {
      steps: [
        {
          number: "1",
          title: "Создаешь запись о новой рекламной кампании",
          description: "в личном кабинете"
        },
        {
          number: "2", 
          title: "Получаешь диплинк на свой товар",
          description: "готовый для размещения"
        }
      ],
      video: step12Video
    },
    {
      steps: [
        {
          number: "3",
          title: "При размещении рекламы просишь указать",
          description: "сгенерированный диплинк"
        },
        {
          number: "4",
          title: "Люди по клику сразу переходят на твой товар",
          description: "а не вбивают артикул в поиске"
        }
      ],
      image: step34
    },
    {
      steps: [
        {
          number: "5",
          title: "В личном кабинете получаешь статистику",
          description: "очищенную от ботов и накруток"
        }
      ],
      image: step5
    }
  ];

  const analytics = [
    "Статистика уникальных кликов за период",
    "Статистика, очищенная от ботов и накруток", 
    "Оценка стоимости клика",
    "Распределение по географии людей (скоро!)"
  ];

  const benefits = [
    "Видишь точное количество реальных переходов на продукт по каждой рекламной кампании",
    "Система отсекает ботов и фейковый трафик, показывая только живых покупателей.",
    "Считаете стоимость клика и понимаете, окупилась ли реклама у конкретного инфлюенсера."
  ];

  return (
    <section className="py-20 bg-gradient-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-primary rounded-full blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 fade-in-up">
            <span className="text-shimmer">
              ВнешкаПРО поможет тебе забыть об этих проблемах
            </span>
          </h2>
        </div>

        {/* How it works - single tile with sections */}
        <div className="mb-20">
          <div className="bg-card rounded-3xl p-8 border border-border shadow-card">
            {tiles.map((tile, tileIndex) => (
              <div key={tileIndex}>
                <div className="grid lg:grid-cols-2 gap-8 items-center py-8">
                  <div className="space-y-6">
                    {tile.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex gap-4 items-start">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1 text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-background/50 rounded-2xl p-4 border border-border min-h-[300px] flex items-center justify-center overflow-hidden">
                    {'video' in tile ? (
                      <video 
                        src={tile.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto rounded-lg object-contain"
                      />
                    ) : (
                      <img 
                        src={tile.image} 
                        alt={`Скриншот шагов ${tile.steps.map(s => s.number).join('-')}`}
                        className="w-full h-auto rounded-lg object-contain"
                      />
                    )}
                  </div>
                </div>
                {tileIndex < tiles.length - 1 && (
                  <div className="border-t border-border my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold">
            <span className="text-shimmer">
              В итоге с ВнешкаПРО:
            </span>
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`p-8 rounded-3xl bg-card border-2 border-cyan-400 hover-lift transition-all duration-300 backdrop-blur-sm fade-in-up stagger-${index + 1}`}
            >
              <p className="text-muted-foreground leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
