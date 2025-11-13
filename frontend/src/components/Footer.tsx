import { Workflow } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent flex items-center justify-center">
                <Workflow className="h-4 w-4 sm:h-5 sm:w-5 text-accent-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-bold">StartupOPS</span>
            </div>
            <p className="text-xs sm:text-sm opacity-80">
              {t("footer.tagline")}
            </p>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t("footer.product")}</h4>
            <ul className="space-y-2 text-xs sm:text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">{t("footer.product.features")}</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">{t("footer.product.integrations")}</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">{t("footer.product.pricing")}</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">{t("footer.product.changelog")}</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t("footer.company")}</h4>
            <ul className="space-y-2 text-xs sm:text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">{t("footer.company.about")}</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">{t("footer.company.blog")}</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">{t("footer.company.careers")}</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">{t("footer.company.contact")}</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t("footer.legal")}</h4>
            <ul className="space-y-2 text-xs sm:text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">{t("footer.legal.privacy")}</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">{t("footer.legal.terms")}</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">{t("footer.legal.security")}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm opacity-80">
          <p>
            {t("footer.createdBy")}{" "}
            <a 
              href="https://menatech.cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity underline"
            >
              {t("footer.website")}
            </a>
            {" "}|{" "}
            <a 
              href="https://www.linkedin.com/company/menatech-cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity underline"
            >
              {t("footer.linkedin")}
            </a>
          </p>
          <p className="mt-2">&copy; {currentYear} StartupOPS. {t("footer.allRights")}</p>
        </div>
      </div>
    </footer>
  );
};
