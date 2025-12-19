const ProblemsSection = () => {
  const problems = [
    "Платишь за внешнее продвижение, но не понимаешь, сколько людей реально заинтересовалось продуктом",
    "Оценки исходя из охватов не бьются с реальными кликами и продажами",
    "Тратишь время на ручной контроль и учет внешних продвижений"
  ];

  return (
    <section className="py-12 sm:py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Знакомые проблемы?
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-background border-2 border-orange-400 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;