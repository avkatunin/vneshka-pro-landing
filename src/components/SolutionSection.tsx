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
      placeholder: "📱 Скриншот шага 1-2"
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
      placeholder: "🔗 Скриншот шага 3-4"
    },
    {
      steps: [
        {
          number: "5",
          title: "В личном кабинете получаешь статистику",
          description: "по каждой рекламной кампании"
        }
      ],
      placeholder: "📊 Скриншот шага 5"
    }
  ];

  const analytics = [
    "Статистика уникальных кликов за период",
    "Статистика, очищенная от ботов и накруток", 
    "Оценка стоимости клика",
    "Распределение по географии людей (скоро!)"
  ];

  const benefits = [
    {
      title: "Деньги под контролем",
      description: "Видите точное количество реальных переходов по каждому диплинку, а не абстрактные цифры из отчётов блогеров."
    },
    {
      title: "Чистая аналитика", 
      description: "Система отсекает ботов и фейковый трафик, показывая только живых покупателей."
    },
    {
      title: "Реальные метрики вместо догадок",
      description: "Считаете стоимость клика и понимаете, окупилась ли реклама у конкретного инфлюенсера."
    }
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

        {/* How it works - 3 tiles */}
        <div className="mb-20 space-y-8">
          {tiles.map((tile, tileIndex) => (
            <div 
              key={tileIndex}
              className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-3xl p-8 border border-border shadow-card"
            >
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
              <div className="bg-background/50 rounded-2xl p-12 border border-border min-h-[300px] flex items-center justify-center">
                <span className="text-muted-foreground text-center text-lg">{tile.placeholder}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 mb-20 border border-border shadow-card backdrop-blur-sm">
          <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
            <span className="text-shimmer">
              Что будет в аналитике?
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-6">По каждой рекламной кампании:</h4>
              <ul className="space-y-4">
                {analytics.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-secondary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-secondary rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-background/50 rounded-2xl p-6 border border-border">
                <div className="text-center text-muted-foreground">
                  📊 Здесь будет скриншот <br />из личного кабинета
                </div>
              </div>
            </div>
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
              <h4 className="text-xl font-semibold mb-4 text-foreground">
                {benefit.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
