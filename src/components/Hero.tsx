import { Button } from "@/components/ui/button";
import { Play, Users, GamepadIcon, Leaf, Code, Trophy } from "lucide-react";
import ContactPopup from "@/components/ContactPopup";
import VideoPopup from "@/components/VideoPopup";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                {t('hero.title')}{" "}
                <span className="text-secondary font-extrabold">
                  {t('hero.title.environmental')}{" "}
                </span>
                <span className="text-accent font-extrabold">
                  {t('hero.title.action')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl">
                {t('hero.description')}
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-foreground/80">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{t('hero.smallGroups')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                <span>{t('hero.safeEnvironment')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                <span>{t('hero.realGameLaunch')}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start">
              <ContactPopup>
                <Button
                  variant="accent"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  {t('hero.scheduleCall')}
                </Button>
              </ContactPopup>
              <VideoPopup
                videoUrl="https://vimeo.com/manage/videos/1111840426"
                title="3EcoBlox Sample Class"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 text-foreground border-foreground/30 hover:bg-foreground/10 w-full sm:w-auto bg-background/80 backdrop-blur-sm"
                >
                  <GamepadIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  {t('hero.watchSample')}
                </Button>
              </VideoPopup>
            </div>

            {/* Trust tagline */}
            <p className="text-foreground/80 text-lg italic">
              "{t('hero.tagline')}"
            </p>
          </div>

          {/* Right Content - Hero Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-glow transition-all duration-500 transform hover:scale-105">
              <video 
                className="w-full h-auto object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/placeholder.svg"
              >
                <source src="/Game-Based Learning in Action_ EcoBlox Field Trip to Korea s Environmental Theme Park.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Floating badges */}
              <div className="absolute top-4 left-4 bg-background rounded-full px-4 py-2 flex items-center gap-2 border border-border">
                <Leaf className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">{t('hero.environmentalFocus')}</span>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-background rounded-full px-4 py-2 flex items-center gap-2 border border-border">
                <Code className="h-4 w-4 text-tech" />
                <span className="text-sm font-medium text-tech">{t('hero.realLearning')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;