import { Clock, DollarSign, Heart, TrendingDown } from "lucide-react";

const impacts = [
  {
    icon: Clock,
    stat: "24hrs",
    label: "Per Week",
    description: "Founder time wasted on admin tasks",
  },
  {
    icon: DollarSign,
    stat: "$114K-$1M",
    label: "Per Year",
    description: "Lost in opportunity costs",
  },
  {
    icon: Heart,
    stat: "72%",
    label: "Of Founders",
    description: "Face mental health challenges",
  },
  {
    icon: TrendingDown,
    stat: "40%",
    label: "Higher Rate",
    description: "Burnout and turnover from stress",
  },
];

export const ProblemImpact = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The Hidden Cost of Administrative Tasks
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            While you're managing invoices and scheduling meetings, your business potential is slipping away.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={impact.label}
                className="text-center p-6 sm:p-8 rounded-2xl border border-border bg-card hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-destructive" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold mb-2">{impact.stat}</p>
                <p className="text-xs sm:text-sm font-semibold text-accent mb-2 sm:mb-3">{impact.label}</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {impact.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
