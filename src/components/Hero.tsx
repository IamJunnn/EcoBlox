import { Button } from "@/components/ui/button";
import { Play, Users, GamepadIcon, Leaf, Code, Trophy } from "lucide-react";
import ContactPopup from "@/components/ContactPopup";
import VideoPopup from "@/components/VideoPopup";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern geometric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(292 73% 57%) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, hsl(145 73% 57%) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, hsl(208 73% 57%) 0%, transparent 50%)`,
          backgroundSize: '400px 400px, 600px 600px, 300px 300px'
        }} />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl rotate-45 animate-pulse blur-sm" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-accent/20 to-tech/20 rounded-full animate-pulse delay-300 blur-sm" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg rotate-12 animate-pulse delay-700 blur-sm" />
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-tech/20 to-accent/20 rounded-xl rotate-45 animate-pulse delay-1000 blur-sm" />
      </div>
      
      {/* Text readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/80" />
      
      {/* Additional text contrast overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-foreground/10">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight drop-shadow-lg">
                Turn Gaming Passion into{" "}
                <span className="bg-gradient-to-r from-green to-blue bg-clip-text text-transparent font-extrabold drop-shadow-md">
                  Environmental{" "}
                </span>
                <span className="bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent font-extrabold drop-shadow-md">
                  Action
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl drop-shadow-md">
                10-week program where students create real games while learning environmental 
                problem-solving and digital citizenship
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-foreground/80 drop-shadow-sm">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Small Groups</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                <span>Safe Environment</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                <span>Real Game Launch</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start">
              <ContactPopup>
                <Button
                  variant="accent"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-glow hover:scale-105 transform transition-all duration-300 w-full sm:w-auto"
                >
                  <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Schedule Discovery Call
                </Button>
              </ContactPopup>
              <VideoPopup
                videoUrl="https://vimeo.com/manage/videos/1111840426"
                title="EcoBlox Sample Class"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 text-foreground border-foreground/30 hover:bg-foreground/10 w-full sm:w-auto bg-background/80 backdrop-blur-sm"
                >
                  <GamepadIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Watch Sample Class
                </Button>
              </VideoPopup>
            </div>

            {/* Trust tagline */}
            <p className="text-foreground/80 text-lg italic drop-shadow-sm bg-background/60 backdrop-blur-sm px-4 py-2 rounded-lg">
              "Nurture digital native talent who think about the environment through games in a safe online environment!"
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
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
              
              {/* Floating badges */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 border border-foreground/20">
                <Leaf className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Environmental Focus</span>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 border border-foreground/20">
                <Code className="h-4 w-4 text-tech" />
                <span className="text-sm font-medium text-tech">Real Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;