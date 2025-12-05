import { useState } from "react";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Alternative {
  nameKey: string;
  costKey: string;
  limitationKey: string;
}

interface Advantage {
  textKey: string;
  detailsKey: string;
  sourcesKey: string;
}

const alternatives: Alternative[] = [
  {
    nameKey: "competitive.alt1.name",
    costKey: "competitive.alt1.cost",
    limitationKey: "competitive.alt1.limitation",
  },
  {
    nameKey: "competitive.alt2.name",
    costKey: "competitive.alt2.cost",
    limitationKey: "competitive.alt2.limitation",
  },
  {
    nameKey: "competitive.alt3.name",
    costKey: "competitive.alt3.cost",
    limitationKey: "competitive.alt3.limitation",
  },
  {
    nameKey: "competitive.alt4.name",
    costKey: "competitive.alt4.cost",
    limitationKey: "competitive.alt4.limitation",
  },
];

const advantages: Advantage[] = [
  {
    textKey: "competitive.adv1",
    detailsKey: "competitive.adv1.details",
    sourcesKey: "competitive.adv1.sources",
  },
  {
    textKey: "competitive.adv2",
    detailsKey: "competitive.adv2.details",
    sourcesKey: "competitive.adv2.sources",
  },
  {
    textKey: "competitive.adv3",
    detailsKey: "competitive.adv3.details",
    sourcesKey: "competitive.adv3.sources",
  },
  {
    textKey: "competitive.adv4",
    detailsKey: "competitive.adv4.details",
    sourcesKey: "competitive.adv4.sources",
  },
];

export const CompetitiveEdge = () => {
  const { t } = useLanguage();
  const [selectedAdvantage, setSelectedAdvantage] = useState<Advantage | null>(
    null,
  );

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("competitive.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("competitive.description")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Alternatives comparison */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {alternatives.map((alt, index) => (
              <div
                key={alt.nameKey}
                className="p-4 sm:p-6 rounded-xl border-2 border-destructive/20 bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">
                      {t(alt.nameKey)}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-destructive">
                      {t(alt.costKey)}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {t(alt.limitationKey)}
                </p>
              </div>
            ))}
          </div>

          {/* StartupOPS advantages */}
          <div
            className="p-6 sm:p-8 rounded-2xl bg-gradient-accent shadow-medium animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent-foreground/10 flex items-center justify-center">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-accent-foreground">
                StartupOPS
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {advantages.map((advantage) => (
                <div
                  key={advantage.textKey}
                  className="flex items-start gap-2 sm:gap-3 cursor-pointer hover:bg-accent-foreground/5 p-2 rounded-lg transition-colors"
                  onClick={() => setSelectedAdvantage(advantage)}
                >
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-accent-foreground font-medium">
                    {t(advantage.textKey)}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-accent-foreground/80 mt-4 text-center">
              Click any advantage to learn more →
            </p>
          </div>
        </div>
      </div>

      {/* Advantage Details Dialog */}
      <Dialog
        open={!!selectedAdvantage}
        onOpenChange={() => setSelectedAdvantage(null)}
      >
        <DialogContent className="sm:max-w-[600px]">
          {selectedAdvantage && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="h-6 w-6 text-accent" />
                  </div>
                  <DialogTitle className="text-2xl">
                    {t(selectedAdvantage.textKey)}
                  </DialogTitle>
                </div>
              </DialogHeader>

              <div className="space-y-4 py-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">How It Works</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(selectedAdvantage.detailsKey)}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Data & Sources</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(selectedAdvantage.sourcesKey)}
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
