import { useState } from "react";
import { Clock, DollarSign, Heart, TrendingDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Impact {
  icon: typeof Clock;
  statKey: string;
  labelKey: string;
  descriptionKey: string;
  detailsKey: string;
  sourcesKey: string;
}

const impacts: Impact[] = [
  {
    icon: Clock,
    statKey: "problem.1.stat",
    labelKey: "problem.1.label",
    descriptionKey: "problem.1.description",
    detailsKey: "problem.1.details",
    sourcesKey: "problem.1.sources",
  },
  {
    icon: DollarSign,
    statKey: "problem.2.stat",
    labelKey: "problem.2.label",
    descriptionKey: "problem.2.description",
    detailsKey: "problem.2.details",
    sourcesKey: "problem.2.sources",
  },
  {
    icon: Heart,
    statKey: "problem.3.stat",
    labelKey: "problem.3.label",
    descriptionKey: "problem.3.description",
    detailsKey: "problem.3.details",
    sourcesKey: "problem.3.sources",
  },
  {
    icon: TrendingDown,
    statKey: "problem.4.stat",
    labelKey: "problem.4.label",
    descriptionKey: "problem.4.description",
    detailsKey: "problem.4.details",
    sourcesKey: "problem.4.sources",
  },
];

export const ProblemImpact = () => {
  const { t } = useLanguage();
  const [selectedImpact, setSelectedImpact] = useState<Impact | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("problem.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("problem.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={impact.labelKey}
                className="text-center p-6 sm:p-8 rounded-2xl border border-border bg-card hover:shadow-medium transition-all duration-300 animate-fade-in-up cursor-pointer hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImpact(impact)}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-destructive" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold mb-2">
                  {t(impact.statKey)}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-accent mb-2 sm:mb-3">
                  {t(impact.labelKey)}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {t(impact.descriptionKey)}
                </p>
                <p className="text-xs text-primary mt-3 font-medium">
                  Click to learn more →
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Details Dialog */}
      <Dialog
        open={!!selectedImpact}
        onOpenChange={() => setSelectedImpact(null)}
      >
        <DialogContent className="sm:max-w-[600px]">
          {selectedImpact && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    {(() => {
                      const Icon = selectedImpact.icon;
                      return <Icon className="h-6 w-6 text-destructive" />;
                    })()}
                  </div>
                  <div>
                    <DialogTitle className="text-2xl">
                      {t(selectedImpact.statKey)} {t(selectedImpact.labelKey)}
                    </DialogTitle>
                  </div>
                </div>
                <DialogDescription className="text-base">
                  {t(selectedImpact.descriptionKey)}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Detailed Analysis
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(selectedImpact.detailsKey)}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Sources</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(selectedImpact.sourcesKey)}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
