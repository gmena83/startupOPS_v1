import { Check, X } from "lucide-react";

const alternatives = [
  {
    name: "Hiring Full-Time",
    cost: "$50K-80K/year",
    limitation: "Expensive overhead, long hiring process, requires management",
  },
  {
    name: "Outsourcing",
    cost: "$20-50/hour",
    limitation: "Inconsistent quality, communication delays, lacks business context",
  },
  {
    name: "DIY Automation",
    cost: "10-20 hrs/week",
    limitation: "Requires technical skills, constant maintenance, breaks when APIs change",
  },
  {
    name: "Generic No-Code Tools",
    cost: "$50-200/month",
    limitation: "Still needs configuration, limited capabilities, not startup-specific",
  },
];

const advantages = [
  "Non-Tech Friendly - No coding required",
  "Pre-Built + Customizable - Ready-to-use, adapts to your needs",
  "Affordable at Scale - From $20/month",
  "Instant Results - Save 9.5hrs/week from start",
];

export const CompetitiveEdge = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why StartupOPS?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Traditional solutions waste your time and money. We give you results instantly.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Alternatives comparison */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {alternatives.map((alt, index) => (
              <div
                key={alt.name}
                className="p-4 sm:p-6 rounded-xl border-2 border-destructive/20 bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">{alt.name}</h3>
                    <p className="text-xs sm:text-sm font-medium text-destructive">{alt.cost}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{alt.limitation}</p>
              </div>
            ))}
          </div>
          
          {/* StartupOPS advantages */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-accent shadow-medium animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent-foreground/10 flex items-center justify-center">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-accent-foreground">StartupOPS</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {advantages.map((advantage) => (
                <div key={advantage} className="flex items-start gap-2 sm:gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-accent-foreground font-medium">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
