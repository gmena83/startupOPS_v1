import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$20",
    period: "per month",
    runs: "20 automation runs",
    features: [
      "Basic automations",
      "Non-customizable",
      "Monthly free webinar",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$50",
    period: "per month",
    runs: "50 automation runs",
    features: [
      "All Starter features",
      "Advanced automations",
      "Prompt & code customization",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Growth",
    price: "$100",
    period: "per month",
    runs: "100 automation runs",
    features: [
      "All Professional features",
      "All automations",
      "Customized workflows",
      "Dedicated support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    runs: "Unlimited runs",
    features: [
      "All Growth features",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    highlighted: false,
    contact: "gonzalo@menatech.cloud",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium">
            From $20/month - No credit card for free trial
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 animate-fade-in-up ${
                tier.highlighted
                  ? "border-accent bg-card shadow-large sm:scale-105"
                  : "border-border bg-card hover:shadow-medium"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-gradient-accent rounded-full text-accent-foreground text-xs sm:text-sm font-semibold shadow-soft">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl sm:text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-sm sm:text-base text-muted-foreground">/{tier.period.split(" ")[1]}</span>}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{tier.runs}</p>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 sm:gap-3">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={tier.highlighted ? "hero" : "outline"} 
                className="w-full"
                size="lg"
              >
                {tier.cta}
              </Button>
              
              {tier.contact && (
                <p className="text-xs text-center text-muted-foreground mt-3 sm:mt-4">
                  Contact: <a href={`mailto:${tier.contact}`} className="text-accent hover:underline">{tier.contact}</a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
