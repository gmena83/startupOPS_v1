import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileCheck, Sparkles, TrendingUp, Users, Mic, BookOpen } from "lucide-react";
import { TypeformDialog } from "@/components/TypeformDialog";

const automations = [
  {
    id: "data-validation",
    name: "Data Validation",
    icon: FileCheck,
    description: "Upload a PDF pitch deck, proposal, or report to identify and validate statements against factual data",
    benefit: "Ensure your documents are backed by verified, accurate information",
    details: [
      "Click to open the upload folder",
      "Upload your PDF file (pitch deck, proposal, or report)",
      "Receive validation results via email"
    ],
    typeformUrl: "https://g6jhbb0afjy.typeform.com/to/bGob5KGB"
  },
  {
    id: "prompt-generator",
    name: "Prompt Generator",
    icon: Sparkles,
    description: "Generate comprehensive 'megaprompts' tailored for specific no-code/low-code platforms",
    benefit: "Save time and tokens with optimized prompts from the start",
    details: [
      "Target platform name",
      "Use case description",
      "Desired output format",
      "Email address for results"
    ],
    detailsLabel: "Required Data:",
    typeformUrl: "https://g6jhbb0afjy.typeform.com/to/xi5LEhkm"
  },
  {
    id: "brandseo",
    name: "BrandSEO",
    icon: TrendingUp,
    description: "Analyze your brand's position in traditional and AI SEO with actionable recommendations",
    benefit: "Improve your brand's online visibility and ranking",
    details: [
      "Brand/company name",
      "Website URL",
      "Industry/sector",
      "Email address for results"
    ],
    detailsLabel: "Required Data:",
    typeformUrl: "https://g6jhbb0afjy.typeform.com/to/ntzMlRRJ"
  },
  {
    id: "ai-focus-group",
    name: "AI Focus Group",
    icon: Users,
    description: "Validate product ideas with AI-generated buyer personas that provide customer feedback",
    benefit: "Get customer insights before investing in development",
    details: [
      "Click to open the detailed form",
      "Provide product details and target segment",
      "Receive AI-generated focus group insights via email"
    ],
    typeformUrl: "https://g6jhbb0afjy.typeform.com/to/WcebIOc9"
  },
  {
    id: "extractstyle",
    name: "ExtractStyle",
    icon: Mic,
    description: "Analyze your communication style from text and audio to create personalized LLM instructions",
    benefit: "Make AI-generated content sound authentically like you",
    details: [
      "Click to open the form",
      "Share text samples or upload audio files",
      "Receive your personalized style guide via email"
    ],
    typeformUrl: "https://g6jhbb0afjy.typeform.com/to/PmxNo7Wy"
  },
  {
    id: "topic-research",
    name: "Topic Research",
    icon: BookOpen,
    description: "Generate well-researched blog content with SEO and trend analysis",
    benefit: "Save time while maintaining high-quality content standards",
    details: [
      "Click to open the form",
      "Provide your blog topic and requirements",
      "Receive SEO-optimized blog content via email"
    ],
    typeformUrl: "https://g6jhbb0afjy.typeform.com/to/s5lO6t5j"
  }
];

export const Automations = () => {
  const [selectedAutomation, setSelectedAutomation] = useState<string | null>(null);

  const openDialog = (automationId: string) => {
    setSelectedAutomation(automationId);
  };

  const closeDialog = () => {
    setSelectedAutomation(null);
  };

  const selectedAutomationData = automations.find(a => a.id === selectedAutomation);

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ready-to-Use Automations
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            No setup required. No APIs to connect. Just click, submit, and receive results.
          </p>
        </div>

        {/* Automations Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {automations.map((automation, index) => {
            const Icon = automation.icon;
            return (
              <div
                key={automation.id}
                className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:shadow-medium transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{automation.name}</h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  {automation.description}
                </p>

                {/* Benefit */}
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                  <p className="text-xs sm:text-sm font-medium text-accent-foreground">
                    {automation.benefit}
                  </p>
                </div>

                {/* Details */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-xs sm:text-sm font-semibold text-foreground mb-2">
                    {automation.detailsLabel || "How it works:"}
                  </p>
                  <ul className="space-y-2">
                    {automation.details.map((detail, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  variant="hero"
                  className="w-full"
                  size="lg"
                  onClick={() => openDialog(automation.id)}
                >
                  Try {automation.name}
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Typeform Dialog */}
      {selectedAutomationData && (
        <TypeformDialog
          isOpen={!!selectedAutomation}
          onClose={closeDialog}
          typeformUrl={selectedAutomationData.typeformUrl}
          automationName={selectedAutomationData.name}
          automationDescription={selectedAutomationData.description}
          automationBenefit={selectedAutomationData.benefit}
        />
      )}
    </section>
  );
};
