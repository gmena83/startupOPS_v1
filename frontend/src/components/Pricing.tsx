import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { redirectToCheckout } from "@/lib/payment";
import { useToast } from "@/hooks/use-toast";

export const Pricing = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loadingTier, setLoadingTier] = useState<string | null>(null);
  
  const handleSubscribe = async (tierId: string) => {
    setLoadingTier(tierId);
    
    try {
      if (tierId === 'enterprise') {
        // For enterprise, open email client
        window.location.href = `mailto:${t("pricing.tier4.contact")}?subject=Enterprise Plan Inquiry`;
        return;
      }
      
      // Redirect to Stripe checkout
      await redirectToCheckout(tierId as 'starter' | 'professional' | 'growth');
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to start checkout process. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoadingTier(null);
    }
  };

  const tiers = [
    {
      id: "starter",
      nameKey: "pricing.tier1.name",
      priceKey: "pricing.tier1.price",
      period: t("pricing.monthly"),
      runsKey: "pricing.tier1.runs",
      featuresKeys: ["pricing.tier1.feature1", "pricing.tier1.feature2", "pricing.tier1.feature3", "pricing.tier1.feature4"],
      ctaKey: "pricing.getStarted",
      highlighted: false,
    },
    {
      id: "professional",
      nameKey: "pricing.tier2.name",
      priceKey: "pricing.tier2.price",
      period: t("pricing.monthly"),
      runsKey: "pricing.tier2.runs",
      featuresKeys: ["pricing.tier2.feature1", "pricing.tier2.feature2", "pricing.tier2.feature3", "pricing.tier2.feature4"],
      ctaKey: "pricing.getStarted",
      highlighted: true,
    },
    {
      id: "growth",
      nameKey: "pricing.tier3.name",
      priceKey: "pricing.tier3.price",
      period: t("pricing.monthly"),
      runsKey: "pricing.tier3.runs",
      featuresKeys: ["pricing.tier3.feature1", "pricing.tier3.feature2", "pricing.tier3.feature3", "pricing.tier3.feature4"],
      ctaKey: "pricing.getStarted",
      highlighted: false,
    },
    {
      id: "enterprise",
      nameKey: "pricing.tier4.name",
      priceKey: "pricing.tier4.price",
      periodKey: "pricing.tier4.period",
      runsKey: "pricing.tier4.runs",
      featuresKeys: ["pricing.tier4.feature1", "pricing.tier4.feature2", "pricing.tier4.feature3", "pricing.tier4.feature4"],
      ctaKey: "pricing.contactSales",
      highlighted: false,
      contact: t("pricing.tier4.contact"),
    },
  ];
  
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6">
            {t("pricing.description")}
          </p>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium">
            {t("pricing.badge")}
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={tier.nameKey}
              className={`relative p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 animate-fade-in-up ${
                tier.highlighted
                  ? "border-accent bg-card shadow-large sm:scale-105"
                  : "border-border bg-card hover:shadow-medium"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-gradient-accent rounded-full text-accent-foreground text-xs sm:text-sm font-semibold shadow-soft">
                  {t("pricing.mostPopular")}
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{t(tier.nameKey)}</h3>
                <div className="mb-2">
                  <span className="text-3xl sm:text-4xl font-bold">{t(tier.priceKey)}</span>
                  {t(tier.priceKey) !== "Custom" && t(tier.priceKey) !== "Personalizado" && <span className="text-sm sm:text-base text-muted-foreground">/{tier.period}</span>}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{t(tier.runsKey)}</p>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {tier.featuresKeys.map((featureKey) => (
                  <li key={featureKey} className="flex items-start gap-2 sm:gap-3">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm">{t(featureKey)}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={tier.highlighted ? "hero" : "outline"} 
                className="w-full"
                size="lg"
                onClick={() => handleSubscribe(tier.id)}
                disabled={loadingTier !== null}
              >
                {loadingTier === tier.id ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  t(tier.ctaKey)
                )}
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
