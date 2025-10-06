import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GamepadIcon, Leaf, Users, Shield, Trophy, Code, Clock, Zap } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const getHighlights = (t: (key: string) => string) => [
  {
    icon: GamepadIcon,
    title: t('program.realGameDev'),
    description: t('program.realGameDevDesc'),
    color: "text-tech",
    bgColor: "bg-tech/10"
  },
  {
    icon: Leaf,
    title: t('program.environmentalEdu'),
    description: t('program.environmentalEduDesc'),
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Users,
    title: t('program.teamCollab'),
    description: t('program.teamCollabDesc'),
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Shield,
    title: t('program.onlineSafety'),
    description: t('program.onlineSafetyDesc'),
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Trophy,
    title: t('program.actualLaunch'),
    description: t('program.actualLaunchDesc'),
    color: "text-tech",
    bgColor: "bg-tech/10"
  },
  {
    icon: Code,
    title: t('program.technicalSkills'),
    description: t('program.technicalSkillsDesc'),
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

const ProgramHighlights = () => {
  const { t } = useLanguage();
  const [showGif, setShowGif] = useState(false);
  const [showSection1Gif, setShowSection1Gif] = useState(false);
  const [showSection2Gif, setShowSection2Gif] = useState(false);
  const [showSection3Gif, setShowSection3Gif] = useState(false);
  const [showSection4Gif, setShowSection4Gif] = useState(false);

  return (
    <section id="program" className="py-20 bg-background relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('program.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('program.description')}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {getHighlights(t).map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-md transition-all duration-300 border-border relative overflow-hidden"
                onMouseEnter={() => {
                  if (highlight.title === t('program.technicalSkills')) {
                    setShowGif(true);
                  } else if (highlight.title === t('program.realGameDev')) {
                    setShowSection1Gif(true);
                  } else if (highlight.title === t('program.environmentalEdu')) {
                    setShowSection2Gif(true);
                  } else if (highlight.title === t('program.teamCollab')) {
                    setShowSection3Gif(true);
                  } else if (highlight.title === t('program.onlineSafety')) {
                    setShowSection4Gif(true);
                  }
                }}
                onMouseLeave={() => {
                  if (highlight.title === t('program.technicalSkills')) {
                    setShowGif(false);
                  } else if (highlight.title === t('program.realGameDev')) {
                    setShowSection1Gif(false);
                  } else if (highlight.title === t('program.environmentalEdu')) {
                    setShowSection2Gif(false);
                  } else if (highlight.title === t('program.teamCollab')) {
                    setShowSection3Gif(false);
                  } else if (highlight.title === t('program.onlineSafety')) {
                    setShowSection4Gif(false);
                  }
                }}
              >
                {highlight.title === t('program.technicalSkills') && showGif ? (
                  <div className="absolute inset-0 p-4">
                    <img
                      src="/section6.gif"
                      alt="Technical Skills Animation"
                      className="w-full h-full object-fill rounded-lg"
                    />
                  </div>
                ) : highlight.title === t('program.realGameDev') && showSection1Gif ? (
                  <div className="absolute inset-0 p-4">
                    <img
                      src="/section1.gif"
                      alt="Real Game Development Animation"
                      className="w-full h-full object-fill rounded-lg"
                    />
                  </div>
                ) : highlight.title === t('program.environmentalEdu') && showSection2Gif ? (
                  <div className="absolute inset-0 p-4">
                    <img
                      src="/section2.gif"
                      alt="Environmental Education Animation"
                      className="w-full h-full object-fill rounded-lg"
                    />
                  </div>
                ) : highlight.title === t('program.teamCollab') && showSection3Gif ? (
                  <div className="absolute inset-0 p-4">
                    <img
                      src="/section3.gif"
                      alt="Team Collaboration Animation"
                      className="w-full h-full object-fill rounded-lg"
                    />
                  </div>
                ) : highlight.title === t('program.onlineSafety') && showSection4Gif ? (
                  <div className="absolute inset-0 p-4">
                    <img
                      src="/section4.gif"
                      alt="Online Safety Training Animation"
                      className="w-full h-full object-fill rounded-lg"
                    />
                  </div>
                ) : (
                  <>
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 ${highlight.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`h-8 w-8 ${highlight.color}`} />
                      </div>
                      <CardTitle className="text-lg lg:text-xl font-bold text-foreground">
                        {highlight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm lg:text-base text-muted-foreground text-center">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </>
                )}
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 bg-card/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-eco">
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">10</div>
            <div className="text-sm lg:text-base text-muted-foreground">Weeks Program</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-secondary mb-2">60</div>
            <div className="text-sm lg:text-base text-muted-foreground">Minutes per Class</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-tech mb-2">3</div>
            <div className="text-sm lg:text-base text-muted-foreground">Student Roles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm lg:text-base text-muted-foreground">Game Launch Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;