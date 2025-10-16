import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Battery, Zap, Music, Users2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const GamePlan = () => {
  const { t } = useLanguage();
  
  return (
    <section id="gameplan" className="pt-20 pb-4 bg-background relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Gamepad2 className="h-10 w-10 lg:h-12 lg:w-12 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t('gameplan.title')}
            </h2>
          </div>

          {/* Game Preview GIF - First to attract attention */}
          <div className="mb-8">
            <div className="relative max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl border border-border">
                <img
                  src="/gameplan.gif"
                  alt="3EcoBlox Game Plan in Action"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            {t('gameplan.description')}
          </p>
        </div>

        {/* Core Concept Card */}
        <div className="mb-16">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-4">
                {t('gameplan.coreConcept')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                {t('gameplan.description')}
              </p>

              {/* Game mechanics grid */}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">
                <div className="bg-card/60 rounded-xl p-4 lg:p-6 border border-border/50 text-center">
                  <Battery className="h-8 w-8 lg:h-10 lg:w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2 text-sm lg:text-base">{t('gameplan.mechanic.battery')}</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground">{t('gameplan.mechanic.batteryDesc')}</p>
                </div>

                <div className="bg-card/60 rounded-xl p-4 lg:p-6 border border-border/50 text-center">
                  <ArrowRight className="h-8 w-8 lg:h-10 lg:w-10 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2 text-sm lg:text-base">{t('gameplan.mechanic.transport')}</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground">{t('gameplan.mechanic.transportDesc')}</p>
                </div>

                <div className="bg-card/60 rounded-xl p-4 lg:p-6 border border-border/50 text-center">
                  <Zap className="h-8 w-8 lg:h-10 lg:w-10 text-tech mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2 text-sm lg:text-base">{t('gameplan.mechanic.power')}</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground">{t('gameplan.mechanic.powerDesc')}</p>
                </div>

                <div className="bg-card/60 rounded-xl p-4 lg:p-6 border border-border/50 text-center">
                  <Music className="h-8 w-8 lg:h-10 lg:w-10 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2 text-sm lg:text-base">{t('gameplan.mechanic.event')}</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground">{t('gameplan.mechanic.eventDesc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Example Scenario */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-eco border border-border/50">
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6 text-center">
            {t('gameplan.exampleTitle')}
          </h3>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Users2 className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm lg:text-base">{t('gameplan.challenge')}</h4>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    {t('gameplan.challengeDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Battery className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm lg:text-base">{t('gameplan.solution')}</h4>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    {t('gameplan.solutionDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm lg:text-base">{t('gameplan.stakes')}</h4>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    {t('gameplan.stakesDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-tech/10 to-primary/10 rounded-xl p-6 lg:p-8 border border-tech/20">
              <h4 className="text-lg lg:text-xl font-bold text-foreground mb-4 text-center">
                {t('gameplan.learningOutcomes')}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base text-muted-foreground">{t('gameplan.outcome.energyPlanning')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base text-muted-foreground">{t('gameplan.outcome.sustainabilityConcepts')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-tech rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base text-muted-foreground">{t('gameplan.outcome.collaboration')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base text-muted-foreground">{t('gameplan.outcome.realWorldStem')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GamePlan;