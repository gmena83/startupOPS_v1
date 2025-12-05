import {
  Zap,
  Shield,
  Clock,
  BarChart3,
  Workflow,
  HeadphonesIcon,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    icon: Zap,
    titleKey: "features.1.title",
    descKey: "features.1.description",
  },
  {
    icon: Workflow,
    titleKey: "features.2.title",
    descKey: "features.2.description",
  },
  {
    icon: Clock,
    titleKey: "features.3.title",
    descKey: "features.3.description",
  },
  {
    icon: BarChart3,
    titleKey: "features.4.title",
    descKey: "features.4.description",
  },
  {
    icon: Shield,
    titleKey: "features.5.title",
    descKey: "features.5.description",
  },
  {
    icon: HeadphonesIcon,
    titleKey: "features.6.title",
    descKey: "features.6.description",
  },
];

export const Features = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("features.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("features.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.titleKey}
                className="group p-6 sm:p-8 rounded-2xl border border-border bg-card hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
