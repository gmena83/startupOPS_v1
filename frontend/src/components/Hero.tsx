import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-time-freedom.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium shadow-soft">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              {t("hero.badge")}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              {t("hero.title").split(" ").slice(0, 2).join(" ")}{" "}
              <span className="text-accent">
                {t("hero.title").split(" ").slice(2).join(" ")}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                variant="hero"
                className="group w-full sm:w-auto"
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-8 pt-4">
              <div>
                <p className="text-2xl sm:text-3xl font-bold">
                  {t("hero.stat1.value")}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {t("hero.stat1.label")}
                </p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border" />
              <div>
                <p className="text-2xl sm:text-3xl font-bold">
                  {t("hero.stat2.value")}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {t("hero.stat2.label")}
                </p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border" />
              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl sm:text-3xl font-bold">
                  {t("hero.stat3.value")}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {t("hero.stat3.label")}
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Modern workspace with business automation dashboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>

            {/* Floating card - hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-card p-4 sm:p-6 rounded-xl shadow-large border border-border animate-scale-in">
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                Monthly Time Saved
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-accent">
                156 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};
