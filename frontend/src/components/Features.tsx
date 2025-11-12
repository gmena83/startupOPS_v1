import { Zap, Shield, Clock, BarChart3, Workflow, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "No Setup Required",
    description: "Plug & play automations. No API connections, no integrations, no headaches.",
  },
  {
    icon: Workflow,
    title: "Pre-Built & Ready",
    description: "6 automations ready to use immediately. Just log in and start saving time.",
  },
  {
    icon: Clock,
    title: "Instant Results",
    description: "Save up to 9.5 hours per week from day one. No learning curve.",
  },
  {
    icon: BarChart3,
    title: "Non-Tech Friendly",
    description: "No coding or technical skills required. Built for founders, not developers.",
  },
  {
    icon: Shield,
    title: "Bilingual Support",
    description: "Full EN/ES language support to serve diverse teams and markets.",
  },
  {
    icon: HeadphonesIcon,
    title: "Mobile-First",
    description: "Fully responsive design. Work from anywhere, anytime, on any device.",
  },
];

export const Features = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for Founders Who Value Their Time
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Unlike other tools, you don't need to connect APIs or configure complex workflows. Just log in and start automating.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 sm:p-8 rounded-2xl border border-border bg-card hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
