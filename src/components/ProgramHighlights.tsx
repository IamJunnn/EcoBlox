import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GamepadIcon, Leaf, Users, Shield, Trophy, Code, Clock, Zap } from "lucide-react";
import { useState } from "react";

const highlights = [
  {
    icon: GamepadIcon,
    title: "Real Game Development",
    description: "Students build actual games in Roblox Studio that launch on our platform",
    color: "text-tech",
    bgColor: "bg-tech/10"
  },
  {
    icon: Leaf,
    title: "Environmental Education",
    description: "Every project addresses real environmental challenges and solutions",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work in specialized roles with project management skills for real outcomes",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Shield,
    title: "Online Safety Training",
    description: "Comprehensive digital citizenship and healthy gaming culture education",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Trophy,
    title: "Actual Game Launch",
    description: "Games are published on Tamra Republic platform for real players",
    color: "text-tech",
    bgColor: "bg-tech/10"
  },
  {
    icon: Code,
    title: "Technical Skills",
    description: "Learn Lua scripting, 3D design, and project management fundamentals",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

const ProgramHighlights = () => {
  const [showGif, setShowGif] = useState(false);
  const [showSection1Gif, setShowSection1Gif] = useState(false);
  const [showSection2Gif, setShowSection2Gif] = useState(false);
  const [showSection3Gif, setShowSection3Gif] = useState(false);
  const [showSection4Gif, setShowSection4Gif] = useState(false);

  return (
    <section id="program" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-eco-gradient rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tech-gradient rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why EcoBlox is Different
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlike traditional coding classes, EcoBlox combines environmental education,
            real game development, and digital citizenship in a comprehensive STEM program
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-eco transition-all duration-300 hover:scale-105 transform border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden"
                onMouseEnter={() => {
                  if (highlight.title === "Technical Skills") {
                    setShowGif(true);
                  } else if (highlight.title === "Real Game Development") {
                    setShowSection1Gif(true);
                  } else if (highlight.title === "Environmental Education") {
                    setShowSection2Gif(true);
                  } else if (highlight.title === "Team Collaboration") {
                    setShowSection3Gif(true);
                  } else if (highlight.title === "Online Safety Training") {
                    setShowSection4Gif(true);
                  }
                }}
                onMouseLeave={() => {
                  if (highlight.title === "Technical Skills") {
                    setShowGif(false);
                  } else if (highlight.title === "Real Game Development") {
                    setShowSection1Gif(false);
                  } else if (highlight.title === "Environmental Education") {
                    setShowSection2Gif(false);
                  } else if (highlight.title === "Team Collaboration") {
                    setShowSection3Gif(false);
                  } else if (highlight.title === "Online Safety Training") {
                    setShowSection4Gif(false);
                  }
                }}
              >
                {highlight.title === "Technical Skills" && showGif ? (
                  <div className="absolute inset-0 p-4">
                    <img
                      src="/section6.gif"
                      alt="Technical Skills Animation"
                      className="w-full h-full object-fill rounded-lg"
                    />
                  </div>
                ) : highlight.title === "Real Game Development" && showSection1Gif ? (
                  <div className="absolute inset-0 p-4">
                    <img
                      src="/section1.gif"
                      alt="Real Game Development Animation"
                      className="w-full h-full object-fill rounded-lg"
                    />
                  </div>
                ) : highlight.title === "Environmental Education" && showSection2Gif ? (
                  <div className="absolute inset-0 p-4">
                    <img
                      src="/section2.gif"
                      alt="Environmental Education Animation"
                      className="w-full h-full object-fill rounded-lg"
                    />
                  </div>
                ) : highlight.title === "Team Collaboration" && showSection3Gif ? (
                  <div className="absolute inset-0 p-4">
                    <img
                      src="/section3.gif"
                      alt="Team Collaboration Animation"
                      className="w-full h-full object-fill rounded-lg"
                    />
                  </div>
                ) : highlight.title === "Online Safety Training" && showSection4Gif ? (
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