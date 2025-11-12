import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Workflow } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export const Header = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { href: "#features", label: t("nav.features") },
    { href: "#how-it-works", label: t("nav.howItWorks") },
    { href: "#automations", label: t("nav.automations") },
    { href: "#pricing", label: t("nav.pricing") },
  ];
  
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center">
              <Workflow className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="text-lg sm:text-xl font-bold">StartupOPS</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <Button variant="ghost" size="sm" className="hidden lg:inline-flex">
              {t("nav.signIn")}
            </Button>
            <Button variant="hero" size="sm">
              {t("nav.getStarted")}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center">
                <Workflow className="h-5 w-5 text-accent-foreground" />
              </div>
              StartupOPS
            </SheetTitle>
          </SheetHeader>
          
          <nav className="flex flex-col gap-4 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-lg font-medium text-foreground hover:text-accent transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            
            <div className="border-t border-border pt-4 mt-4 space-y-3">
              <Button variant="ghost" className="w-full justify-start" size="lg">
                {t("nav.signIn")}
              </Button>
              <Button variant="hero" className="w-full" size="lg">
                {t("nav.getStarted")}
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
