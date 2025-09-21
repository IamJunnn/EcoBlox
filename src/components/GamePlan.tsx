import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Battery, Zap, Music, Users2, ArrowRight } from "lucide-react";

const GamePlan = () => {
  return (
    <section id="gameplan" className="pt-20 pb-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 lg:w-96 lg:h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 lg:w-96 lg:h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Gamepad2 className="h-10 w-10 lg:h-12 lg:w-12 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Game Plan
            </h2>
          </div>

          {/* Game Preview GIF - First to attract attention */}
          <div className="mb-8">
            <div className="relative max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-glow border border-border/50 bg-card/20 backdrop-blur-sm">
                <img
                  src="/gameplan.gif"
                  alt="EcoBlox Game Plan in Action"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Students create an interactive sustainability game where they manage energy resources
            and keep real-world events powered through smart upcycling
          </p>
        </div>

        {/* Core Concept Card */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-4">
                Core Concept: EV Battery Upcycling Game
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                EcoBlox combines Roblox game development with real-world sustainability learning.
                Students design a virtual world where players upcycle used EV batteries into new 1kWh battery blocks,
                manage renewable energy sources, and keep large-scale events powered, such as a K-pop concert.
              </p>

              {/* Game mechanics grid */}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">
                <div className="bg-card/60 rounded-xl p-4 lg:p-6 border border-border/50 text-center">
                  <Battery className="h-8 w-8 lg:h-10 lg:w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2 text-sm lg:text-base">Battery Conversion</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground">Process used EV batteries into 1kWh blocks</p>
                </div>

                <div className="bg-card/60 rounded-xl p-4 lg:p-6 border border-border/50 text-center">
                  <ArrowRight className="h-8 w-8 lg:h-10 lg:w-10 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2 text-sm lg:text-base">Transportation</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground">Move blocks to exchange stations</p>
                </div>

                <div className="bg-card/60 rounded-xl p-4 lg:p-6 border border-border/50 text-center">
                  <Zap className="h-8 w-8 lg:h-10 lg:w-10 text-tech mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2 text-sm lg:text-base">Power Management</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground">Supply energy to E-Charger Centers</p>
                </div>

                <div className="bg-card/60 rounded-xl p-4 lg:p-6 border border-border/50 text-center">
                  <Music className="h-8 w-8 lg:h-10 lg:w-10 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2 text-sm lg:text-base">Event Success</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground">Keep concerts and events running</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Example Scenario */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-eco border border-border/50">
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6 text-center">
            Example: K-pop Concert Challenge
          </h3>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Users2 className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm lg:text-base">The Challenge</h4>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    A concert with 100 people requires 100 kWh per hour. For a 2-hour concert,
                    students must supply 200 kWh total.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Battery className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm lg:text-base">The Solution</h4>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    Students process used EV batteries at the Battery Conversion Center,
                    creating 200 individual 1kWh blocks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm lg:text-base">The Stakes</h4>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    If supply runs low, the concert experiences a blackout! This teaches students
                    that careful energy planning and teamwork are essential.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-tech/10 to-primary/10 rounded-xl p-6 lg:p-8 border border-tech/20">
              <h4 className="text-lg lg:text-xl font-bold text-foreground mb-4 text-center">
                Learning Outcomes
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base text-muted-foreground">Energy planning and resource management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base text-muted-foreground">Environmental sustainability concepts</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-tech rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base text-muted-foreground">Collaborative problem-solving</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base text-muted-foreground">Real-world application of STEM skills</span>
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