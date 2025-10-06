import { Phone, Mail } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactPopupProps {
  children: React.ReactNode;
}

const ContactPopup = ({ children }: ContactPopupProps) => {
  const { t } = useLanguage();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md mx-4 w-[90vw] sm:w-full">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-lg sm:text-xl">
            {t('contact.title')}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-sm sm:text-base">
            {t('contact.description')}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-3 py-4">
          <a
            href="tel:+14802009799"
            className="flex items-center gap-3 p-3 sm:p-4 bg-muted rounded-lg hover:bg-primary/10 hover:border-primary/20 border border-transparent hover:scale-105 transition-all duration-300 cursor-pointer group active:scale-95"
          >
            <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="font-medium group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">{t('contact.phone')}</p>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm sm:text-base break-all">+1 480 200 9799</p>
            </div>
          </a>

          <a
            href="mailto:weare@lettuce.build"
            className="flex items-center gap-3 p-3 sm:p-4 bg-muted rounded-lg hover:bg-primary/10 hover:border-primary/20 border border-transparent hover:scale-105 transition-all duration-300 cursor-pointer group active:scale-95"
          >
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="font-medium group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">{t('contact.email')}</p>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm sm:text-base break-all">weare@lettuce.build</p>
            </div>
          </a>
        </div>

        <AlertDialogFooter>
          <AlertDialogAction>{t('contact.gotIt')}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ContactPopup;