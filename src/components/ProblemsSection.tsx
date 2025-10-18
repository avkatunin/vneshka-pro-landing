const ProblemsSection = () => {
  const problems = [
    {
      title: "Бюджет утекает в никуда",
      description: "Платишь блогеру, но не знаешь, сколько уникальных переходов и сколько из них реальные."
    },
    {
      title: "Просмотры — это иллюзия эффективности",
      description: "Инфлюенсеры показывают охваты, которые не бьются с кликами и продажами."
    },
    {
      title: "Накрутка скрывает правду",
      description: "Боты и фейковые клики искажают отчёты, ты платишь за пустой трафик."
    }
  ];

  return (
    <section className="py-20 bg-card">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Знакомые проблемы?
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-background border-2 border-orange-400 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;