import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'en' ? '한국어' : 'English'}
      </span>
    </Button>
  );
};

export default LanguageToggle;

