import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Wrench, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const getTimelinePhases = (t: (key: string) => string) => [
  {
    icon: Calendar,
    phase: t('timeline.introduction'),
    week: t('timeline.week1'),
    title: t('timeline.kickoff'),
    description: t('timeline.kickoffDesc'),
    color: "text-primary",
    bgColor: "bg-primary",
  },
  {
    icon: Users,
    phase: t('timeline.roleTraining'),
    week: t('timeline.week2to5'),
    title: t('timeline.skillDevelopment'),
    description: t('timeline.skillDesc'),
    color: "text-secondary",
    bgColor: "bg-secondary",
  },
  {
    icon: Wrench,
    phase: t('timeline.gameBuild'),
    week: t('timeline.week6to9'),
    title: t('timeline.collaborativeDevelopment'),
    description: t('timeline.collaborativeDesc'),
    color: "text-tech",
    bgColor: "bg-tech",
  },
  {
    icon: CheckCircle,
    phase: t('timeline.reviewPublish'),
    week: t('timeline.week10'),
    title: t('timeline.launchShowcase'),
    description: t('timeline.launchDesc'),
    color: "text-accent",
    bgColor: "bg-accent",
  }
];

const ProgramTimeline = () => {
  const { t } = useLanguage();
  
  return (
    <section id="timeline" className="pt-8 pb-4 bg-muted/30 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('timeline.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('timeline.description')}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {getTimelinePhases(t).map((phase, index) => {
            const Icon = phase.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-md transition-all duration-300 bg-card border-border overflow-hidden"
              >
                <CardHeader className="relative pb-4">
                  <div className="relative z-10">
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 ${phase.week === "Week 10" ? "" : phase.bgColor + "/10"} ${phase.week === "Week 10" ? "" : "rounded-2xl"} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-7 w-7 lg:h-8 lg:w-8 ${phase.color}`} />
                    </div>
                    <div className="text-center">
                      <p className={`text-sm font-medium ${phase.color} mb-1`}>
                        {phase.week}
                      </p>
                      <CardTitle className="text-lg lg:text-xl font-bold mb-2">
                        {phase.phase}
                      </CardTitle>
                      <h3 className="text-sm lg:text-base font-semibold text-muted-foreground">
                        {phase.title}
                      </h3>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm lg:text-base text-muted-foreground text-center leading-relaxed">
                    {phase.description}
                  </p>
                </CardContent>

                {/* Phase indicator */}
                <div className="absolute top-4 right-4">
                  <div className={`w-8 h-8 ${phase.bgColor}/20 rounded-full flex items-center justify-center`}>
                    <span className={`text-xs font-bold ${phase.color}`}>
                      {index + 1}
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Program summary */}
        <div className="mt-16 bg-card/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-eco border border-border/50">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">10</div>
              <div className="text-sm lg:text-base text-muted-foreground">{t('timeline.stat.totalWeeks')}</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-secondary mb-2">4</div>
              <div className="text-sm lg:text-base text-muted-foreground">{t('timeline.stat.learningPhases')}</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-tech mb-2">1</div>
              <div className="text-sm lg:text-base text-muted-foreground">{t('timeline.stat.publishedGame')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramTimeline;