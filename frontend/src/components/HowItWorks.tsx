import {
  UserPlus,
  MousePointerClick,
  FileText,
  Mail,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  {
    icon: UserPlus,
    titleKey: "howItWorks.step1.title",
    descriptionKey: "howItWorks.step1.description",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MousePointerClick,
    titleKey: "howItWorks.step2.title",
    descriptionKey: "howItWorks.step2.description",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FileText,
    titleKey: "howItWorks.step3.title",
    descriptionKey: "howItWorks.step3.description",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Mail,
    titleKey: "howItWorks.step4.title",
    descriptionKey: "howItWorks.step4.description",
    color: "from-green-500 to-emerald-500",
  },
];

export const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("howItWorks.description")}
          </p>
        </div>

        {/* Animated Steps */}
        <div className="max-w-5xl mx-auto">
          {/* Mobile: Vertical Layout */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.titleKey}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg transform hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl font-bold text-muted-foreground">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-xl font-bold">
                            {t(step.titleKey)}
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          {t(step.descriptionKey)}
                        </p>
                      </div>
                    </div>

                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-8 top-20 w-0.5 h-6 bg-gradient-to-b from-border to-transparent" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: Horizontal Layout */}
          <div className="hidden md:block relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="grid grid-cols-4 gap-4 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.titleKey}
                    className="relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Step Content */}
                    <div className="text-center">
                      {/* Icon Container */}
                      <div className="relative inline-block mb-6">
                        {/* Pulse Animation */}
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 animate-pulse`}
                        />

                        {/* Icon */}
                        <div
                          className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-300`}
                        >
                          <Icon className="h-12 w-12 text-white" />
                        </div>

                        {/* Step Number */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md">
                          {index + 1}
                        </div>
                      </div>

                      {/* Text Content */}
                      <h3 className="text-lg font-bold mb-2">
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t(step.descriptionKey)}
                      </p>
                    </div>

                    {/* Arrow Between Steps */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-12 -right-2 transform translate-x-1/2 animate-bounce-x">
                        <ArrowRight className="h-5 w-5 text-accent" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Progress Animation Hint */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            ⚡ Average time from signup to first results:{" "}
            <span className="font-bold text-accent">Under 5 minutes</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes bounce-x {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }
        
        .animate-bounce-x {
          animation: bounce-x 2s infinite;
        }
      `}</style>
    </section>
  );
};
