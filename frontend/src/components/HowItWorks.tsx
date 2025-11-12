import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Select Automation",
    description: "Choose from our ready-to-use workflows. No APIs to connect, no setup required.",
  },
  {
    number: "02",
    title: "Provide Input",
    description: "Simple form submission. No technical knowledge needed.",
  },
  {
    number: "03",
    title: "Receive Results",
    description: "Get automated results delivered via email, ready to use immediately.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How StartupOPS Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            No APIs. No integrations. No headaches. Just results.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-medium">
                  <span className="text-2xl sm:text-3xl font-bold text-accent-foreground">
                    {step.number}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-0 sm:pt-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Checkmark */}
              <div className="flex-shrink-0 hidden md:block">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
