import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Wrench, CheckCircle } from "lucide-react";

const timelinePhases = [
  {
    icon: Calendar,
    phase: "Introduction",
    week: "Week 1",
    title: "Program Kickoff",
    description: "Get familiar with the platform, safety guidelines, and basic concepts",
    color: "text-primary",
    bgColor: "bg-primary",
    gradient: "bg-eco-gradient"
  },
  {
    icon: Users,
    phase: "Role Training",
    week: "Week 2-5",
    title: "Skill Development",
    description: "Learn specialized skills in your chosen role: Builder, Scripter, or Tester/Planner",
    color: "text-secondary",
    bgColor: "bg-secondary",
    gradient: "bg-nature-tech-gradient"
  },
  {
    icon: Wrench,
    phase: "Game Build",
    week: "Week 6-9",
    title: "Collaborative Development",
    description: "Work as a team to build your environmental sustainability game",
    color: "text-tech",
    bgColor: "bg-tech",
    gradient: "bg-tech-gradient"
  },
  {
    icon: CheckCircle,
    phase: "Review & Publish",
    week: "Week 10",
    title: "Launch & Showcase",
    description: "Final testing, review, and publishing your game to the Tamra Republic platform",
    color: "text-accent",
    bgColor: "bg-accent",
    gradient: "bg-accent/20"
  }
];

const ProgramTimeline = () => {
  return (
    <section id="timeline" className="pt-8 pb-4 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tech rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            10-Week Program Journey
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A structured learning path that takes students from introduction to game publication
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {timelinePhases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-glow transition-all duration-500 hover:scale-105 transform bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden group relative"
              >
                <CardHeader className="relative pb-4">
                  {phase.week !== "Week 10" && (
                    <div className={`absolute inset-0 ${phase.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  )}
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
              <div className="text-sm lg:text-base text-muted-foreground">Total Weeks</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-secondary mb-2">4</div>
              <div className="text-sm lg:text-base text-muted-foreground">Learning Phases</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-tech mb-2">1</div>
              <div className="text-sm lg:text-base text-muted-foreground">Published Game</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramTimeline;